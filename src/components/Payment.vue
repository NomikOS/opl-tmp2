<template>
  <header-user-data></header-user-data>
  <div class="ac25-content-global">
    <div class="container">
      <div class="ac25-content-inner-holder ac25-min-height-200 row">
        <h4 class="ac25-top-red-text">ESTADO DE CUENTA</h4>
        <p class="ac25-order-number-info">
          <span>orden {{order.special_id}}</span>
          <notification-icon></notification-icon>
        </p>
        <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />
      </div>
      <!-- end content-inner-holder -->
      <div class="ac25-content-inner-holder without-padding-bottom row">
        <p class="estados-top"> <span>PRECIO</span> <span class="estados-price">{{ order.price_printable }}</span> </p>
        <div class="row">
          <div class="col s4">
            <div class="estados-box">
              <p class="estados-title border"> Comercial </p>
              <p class="estados-middle green" v-bind:style="{ background: order.commercialStatus_color }">{{ order.commercialStatus_name }}</p>
            </div>
          </div>
          <div class="col s4">
            <div class="estados-box">
              <p class="estados-title border"> Pago </p>
              <p class="estados-middle yellow" v-if="order.paymentStatus_id != 3" v-bind:style="{ background: order.paymentStatus_color }">{{ order.paymentStatus_name }}</p>
              <p class="estados-middle yellow" v-if="order.paymentStatus_id == 3" v-bind:style="{ background: order.paymentStatus_color }">PAGO PENDIENTE<br />${{order.paymentRemaining}}</p>
            </div>
          </div>
          <div class="col s4">
            <div class="estados-box">
              <p class="estados-title border"> Logistico </p>
              <p class="estados-middle red" v-bind:style="{ background: order.logisticStatus_color }">{{ order.logisticStatus_name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="ac25-content-inner-holder without-padding-bottom row" v-if="order.payments">
        <p class="big-title sub"> Listado de pagos</p>
        <table class="standard-table version2">
          <thead>
            <tr>
              <th>Monto</th>
              <th>Fecha</th>
              <th>Medio de Pago</th>
            </tr>
          </thead>
          <tr class="border-solid">
            <tr v-for="payment in payments">
              <td><p class="border-red-bottom">{{ payment.total_amount }}</p></td>
              <td><p class="border-red-bottom">{{ payment.created_at }}</p></td>
              <td><p class="border-red-bottom">{{payment.payment_gateway ? payment.payment_gateway : 'Crédito'}}</p></td>
            </tr>
        </table>
      </div>
      <!-- end white-holder -->
      <div class="clearfix"></div>
    </div>
    <!-- end container -->

    <footer class="ac25-content-footer" v-if="order.paymentStatus_id >= 4 ">
      <a @click="back()" class="ac25-full-black left waves-effect waves-light">volver</a>
    </footer>
    <!-- end footer -->
    <footer class="ac25-content-footer" v-if="order.paymentStatus_id < 4 ">
      <a @click="refresh()" class="ac25-full-black left waves-effect waves-light">refrescar</a>
    </footer>
    <!-- end footer -->
  </div>
  <!-- end content-global -->
</template>
<script>
  import {
    urls
  } from '../libs/common'
  import HeaderUserData from './Partials/HeaderUserData.vue'
  import NotificationIcon from './Partials/NotificationIcon.vue'
  import ButtonPrint from './Partials/ButtonPrint.vue'
  import ButtonScan from './Partials/ButtonScan.vue'
  import {
    getOrder,
    getAddressType
  } from '../vuex/getters'
  import {
    storeData
  } from '../vuex/actions'
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
        addressType: getAddressType,
      },
      actions: {
        storeData: storeData
      }
    },
    computed: {
      payments () {
        if (typeof this.order.payments.data !== 'undefined') {
          return this.order.payments.data
        }
        return this.order.payments
      }
    },
    data: function () {
      return {
        show_volver_button: false
      }
    },
    methods: {
      refresh() {
        this.reload()
      },

      reload() {
        var order_id = ls.get('order_id')

        this.$http.get(ORDER_URL + '/' + order_id).then((response) => {

          var order = response.data.data
          console.info(order);

          this.storeData({
            type: 'order',
            content: order
          })

        }, (response) => {
          console.info(response, 'error callback');
        });

      },

      back() {
        console.info(this.addressType);
        return this.$route.router.go( '/event-' + this.addressType )
      }    
    },
    ready: function () {
      console.info('=================================== Payment is ready with this order: ', this.order.id)
      this.reload()
    },
  }
</script>