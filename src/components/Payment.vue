<template>
  <header-user-data></header-user-data>
  <modal-wait></modal-wait>

  <div class="ac25-content-global">
    <div class="container">
      <div class="ac25-content-inner-holder padding-bottom-none row">
        <h4 class="ac25-top-red-text">ESTADO DE CUENTA</h4>
        <p class="ac25-order-number-info">
          <span>ORDEN {{order.special_id}}</span>
          <notification-icon></notification-icon>
        </p>
        <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />
      </div>

      <div class="ac25-content-inner-holder without-padding-bottom row">
        <div class="row">
          <div class="col s12">
          <ul class="ac25-info-list ac25-w100">
            <li>
              <p class="ac25-info-list-content"> nombre: {{ infoName}} </p>
            </li>
            <li>
              <p class="ac25-info-list-content"> teléfono: {{ infoPhone }} </p>
            </li>
            <li>
              <p class="ac25-info-list-content"> dirección: {{order.pickupAddress_name}} </p>
            </li>
            <li>
              <p class="ac25-info-list-content"> deparmento: {{order.pickupAddress_apt ? order.pickupAddress_apt : 'N/A'}} </p>
            </li>            
            <li>
              <p class="ac25-info-list-content">MTS3: {{order.items_volume}}</p>
            </li>            
            <li>
              <p class="ac25-info-list-content">bultos: {{order.items_amount}}</p>
            </li>            
            <li>
              <p class="ac25-info-list-content">precio: {{order.price_printable}}</p>
            </li>                        
          </ul>
        </div>
        </div>
            <div class="estados-box">
              <p class="estados-middle yellow" v-if="order.paymentStatus_id != 3" v-bind:style="{ background: order.paymentStatus_color }">{{ order.paymentStatus_name }}</p>
              <p class="estados-middle yellow" v-if="order.paymentStatus_id == 3" v-bind:style="{ background: order.paymentStatus_color }">PAGO PENDIENTE<br />${{order.paymentRemaining}}</p>
            </div>        
      </div>

      <!-- end content-inner-holder -->
      <div class="ac25-content-inner-holder without-padding-bottom row" v-if="order.payments_array">
        <p class="big-title sub"> Listado de pagos</p>
        <table class="standard-table version2">
          <thead>
            <tr>
              <th>Monto</th>
              <th>Fecha</th>
              <th>Medio de Pago</th>
            </tr>
          </thead>
            <tr v-for="payment in order.payments_array" class="border-solid">
              <td><p class="border-red-bottom">${{ payment.total_amount }}</p></td>
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
  import ModalWait from './Partials/ModalWait.vue'
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
  const MICRO_API_URL = urls.micro_api  

  export default {
    name: 'Payment',
    components: {
      HeaderUserData,
      ModalWait,
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
        var setup = ls.get( 'setup' )

        if ( !setup || !setup.vehicleSelected ) {
          return this.$route.router.go( '/setup' )
        }

        ModalWait.showIt( true, 'refresh-order' )

        var vehicleSelected = setup.vehicleSelected

        this.$http.get( MICRO_API_URL + '/vehicle/' + vehicleSelected + '/opl-request-order' ).then( ( response ) => {

          ModalWait.showIt( false )

          if (response.data && response.data.success) {
            /////
          }

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
    computed: {
      infoName: function () {
        const name = this.order[this.addressType + 'Address_forperson'];
        return name === '-' ? this.order.customer.name : name;
      },
      infoPhone: function () {
        const phone = this.order[this.addressType + 'Address_forperson_phone'];
        return phone === '-' ? this.order.customer.phone : phone;
      }
    },    
  }
</script>