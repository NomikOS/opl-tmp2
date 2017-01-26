<template>
  <header-user-data></header-user-data>
  <div class="ac25-content-global">
    <div class="container">
      <div class="ac25-content-inner-holder ac25-min-height-200">
       <h4 class="ac25-top-red-text">ESTADO DE CUENTA</h4>
        <p class="ac25-order-number-info">
          <span>orden {{order.special_id}}</span>
          <notification-icon></notification-icon>
        </p>

       <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />
     </div><!-- end content-inner-holder -->

      <table class="ac25-content-inner-holder">
        <tr>
          <td>
            <p class="estados-top"> <span>PRECIO</span> <span class="estados-price">{{ order.price_printable }}</span>  </p>
            <div class="estados-box">
              <p class="estados-title"> Comercial </p>
              <p class="estados-middle green" v-bind:style="{ background: order.commercialStatus_color }">{{ order.commercialStatus_name }}</p>
            </div>
          </td>
          <td>
          <p class="estados-top">&nbsp;</p>
            <div class="estados-box">
              <p class="estados-title"> Pago </p>
              <p class="estados-middle yellow" v-if="order.paymentStatus_id != 3" v-bind:style="{ background: order.paymentStatus_color }">{{ order.paymentStatus_name }}</p>
              <p class="estados-middle yellow" v-if="order.paymentStatus_id == 3" v-bind:style="{ background: order.paymentStatus_color }">PAGO PENDIENTE<br />${{order.paymentRemaining}}</p>
            </div>
          </td>
          <td>
          <p class="estados-top">&nbsp;</p>
            <div class="estados-box">
              <p class="estados-title"> Logistico </p>
              <p class="estados-middle red" v-bind:style="{ background: order.logisticStatus_color }">{{ order.logisticStatus_name }}</p>
            </div>
          </td>
        </tr>
      </table>

      <div class="white-holder" v-if="order.payments">
      <p class="big-title sub"> Listado de pagos</p>
      <table class="standard-table version2">
        <tr class="border-solid">
          <td>Fecha</td> <td>Medio de Pago</td> <td>Monto</td>
          <tr v-for="payment in order.payments.data">
            <td>{{ payment.created_at }}</td> <td>{{payment.payment_gateway ? payment.payment_gateway : 'Crédito'}}</td> <td>{{ payment.total_amount }}</td></td>
          </tr>
        </table>
      </div><!-- end white-holder -->
      <div class="clearfix"></div>

    </div><!-- end container -->

  <footer class="ac25-content-footer" v-if="order.paymentStatus_id >= 4 ">
    <a onclick="window.history.back()" class="ac25-full-black left waves-effect waves-light">volver</a>
  </footer><!-- end footer -->
  <footer class="ac25-content-footer" v-if="order.paymentStatus_id < 4 ">
    <a @click="refresh()" class="ac25-full-black left waves-effect waves-light">refrescar</a>
  </footer><!-- end footer -->

  </div><!-- end content-global -->
</template>

<script>
  import { urls } from '../libs/common'
  import HeaderUserData from './Partials/HeaderUserData.vue'
  import NotificationIcon from './Partials/NotificationIcon.vue'
  import ButtonPrint from './Partials/ButtonPrint.vue'
  import ButtonScan from './Partials/ButtonScan.vue'
  import { getOrder, getCounters } from '../vuex/getters'
  import { storeData } from '../vuex/actions'
  import ls from '../libs/ls'

  const ORDER_URL = urls.micro_api + '/order'

  export default {
    name: 'Payment',
    components: {
      HeaderUserData,
      NotificationIcon,
    },
    vuex: {
      getters: {
        order: getOrder,
        counters: getCounters
      },
      actions: {
        storeData: storeData
      }
    },
    data: function() {
      return {
        show_volver_button : false
      }
    },
    methods: {
      refresh () {
        this.reload ()
      },

      reload () {
        var order_id = ls.get( 'order_id' )

        this.$http.get( ORDER_URL + '/' + order_id ).then( ( response ) => {

          var order = response.data.data
          console.info(order);

          this.storeData( {
            type: 'order',
            content: order
          } )

        }, ( response ) => {
          console.info( response, 'error callback' );
        } );

      }
    },
    ready: function() {
        console.info( '=================================== Payment is ready with this order: ', this.order.id )
        this.reload ()
    },
  }
</script>
