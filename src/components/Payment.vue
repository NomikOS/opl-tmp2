<template>
  <header-user-data></header-user-data>
  <modal-wait></modal-wait>
  <div class="ac25-content-global" id="windowPagos">
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
          <p class="estados-middle yellow" v-if="order.paymentStatus_id == 3" v-bind:style="{ background: order.paymentStatus_color }">PAGO PENDIENTE
            <br />${{order.paymentRemaining}}</p>
        </div>
      </div>
      <!-- end content-inner-holder -->
      <div class="ac25-content-inner-holder without-padding-bottom row" v-if="order.payments_array.length">
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
            <td>
              <p class="border-red-bottom">${{ payment.total_amount }}</p>
            </td>
            <td>
              <p class="border-red-bottom">{{ payment.created_at }}</p>
            </td>
            <td>
              <p class="border-red-bottom">{{payment.payment_gateway ? payment.payment_gateway : 'Crédito'}}</p>
            </td>
          </tr>
        </table>
      </div>
      <!-- end white-holder -->
      <div class="clearfix"></div>
    </div>
    <!-- end container -->
    <footer class="ac25-content-footer" v-if="order.paymentStatus_id >= 4 ">
      <a @click="back()" class="ac25-full-black left waves-effect waves-light">volver</a>
      <a @click="openIngresoPago()" class="ac25-full-black left waves-effect waves-light">ingreso pago</a>
    </footer>
    <!-- end footer -->
    <footer class="ac25-content-footer" v-if="order.paymentStatus_id < 4 ">
      <a @click="refresh()" class="ac25-full-black left waves-effect waves-light">refrescar</a>
    </footer>
    <!-- end footer -->
  </div>
  <!--
    Ventana ingreso de pagos
    ------------------------
  -->
  <div class="ac25-content-global" id="windowIngresoPago">
    <div class="container">
      <div class="ac25-content-inner-holder padding-bottom-none row">
        <h4 class="ac25-top-red-text">INGRESO DE PAGO</h4>
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
      </div>
      <!--
Redcompra
Tarjeta de crédito
2) Ingresar:
voucher (foto)
monto (textbox)
cód. autorización (textbox) -->
      <!-- end content-inner-holder -->
      <div class="ac25-content-inner-holder without-padding-bottom row" v-if="order.payments_array.length">
        <p class="big-title sub"> Elija </p>
        <div class="row">
          <div class="col s12">
            <ul class="ac25-info-list ac25-w100">
              <li>
                <p class="ac25-info-list-content">
                  <input type="radio" name="ingreso_payment_gateway" id="ingreso_payment_gateway1" value="redcompra">
                  <label for="ingreso_payment_gateway1">Redcompra</label>
                  <br />
                  <input type="radio" name="ingreso_payment_gateway" id="ingreso_payment_gateway2" value="creditcard">
                  <label for="ingreso_payment_gateway2">Tarjeta de crédito</label>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <p class="big-title sub"> Ingreso voucher </p>
        <div class="row">
          <div class="col s12">
            <ul class="ac25-info-list ac25-w100">
              <li>
                <p class="ac25-info-list-content">
                  <input type="hidden" name="ingreso_pago_voucher_url" id="ingreso_pago_voucher_url">
                  <!-- ec_receipt_upload_buttons -->
                  <div id="ec_receipt_upload_buttons">
                    <!-- ec_choose_transfer_camera -->
                    <input type="button" id="ec_choose_transfer_camera" value="Fotografiar comprobante">
                    <!-- ec_choose_transfer_file -->
                    <input type="button" id="ec_choose_transfer_file" value="Subir comprobante">
                  </div>
                  <!-- ec_receipt_submit_buttons -->
                  <div id="ec_receipt_submit_buttons">
                    <!-- ec_choose_transfer_verify -->
                    <input type="button" id="ec_choose_transfer_verify" value="Verificar comprobante" @click="verifyVoucher()">
                    <!-- ec_choose_transfer_submit -->
                    <input type="button" id="ec_choose_transfer_submit" value="Enviar" @click="processForm()">
                  </div>
                  <div id="ec_choose_image_verify">
                    <div id="ec_image_verify_img"></div>
                    <input type="button" id="ec_image_verify_button" value="OK">
                  </div>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <p class="big-title sub"> Ingrese </p>
        <div class="row">
          <div class="col s12">
            <ul class="ac25-info-list ac25-w100">
              <li>
                <p class="ac25-info-list-content">
                  Monto de pago
                  <input type="number" name="ingreso_pago_amount" id="ingreso_pago_amount">
                </p>
                <p class="ac25-info-list-content">
                  Código de autorización
                  <input type="number" name="ingreso_pago_authorization_code" id="ingreso_pago_authorization_code">
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- end white-holder -->
      <div class="clearfix"></div>
    </div>
    <!-- end container -->
    <footer class="ac25-content-footer">
      <a @click="closeIngresoPago()" class="ac25-full-black left waves-effect waves-light">cerrar</a>
    </footer>
    <!-- end footer -->
  </div>
  <!-- end content-global -->
</template>
<style>
#ec_choose_image_verify {
  display: none;
  z-index: 7;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  position: absolute;
  border-top-style: none;
  border-top-width: 0px;
  border-left-style: none;
  border-left-width: 0px;
  border-right-style: none;
  border-right-width: 0px;
  border-bottom-style: none;
  border-bottom-width: 0px;
  border-top-left-radius: 0px;
  -moz-border-radius-topleft: 0px;
  border-top-right-radius: 0px;
  -moz-border-radius-topright: 0px;
  border-bottom-left-radius: 0px;
  -moz-border-radius-bottomleft: 0px;
  border-bottom-right-radius: 0px;
  -moz-border-radius-bottomright: 0px;
}
#ec_image_verify_img {
  z-index: 3;
  top: 14px;
  bottom: 46px;
  left: 0px;
  right: 0px;
  position: absolute;  
  border-top-left-radius: 10px;
  -moz-border-radius-topleft: 10px;
  border-top-right-radius: 10px;
  -moz-border-radius-topright: 10px;
  border-bottom-left-radius: 10px;
  -moz-border-radius-bottomleft: 10px;
  border-bottom-right-radius: 10px;
  -moz-border-radius-bottomright: 10px;
  border-top-style: solid;
  border-top-width: 1px;
  border-left-style: solid;
  border-left-width: 1px;
  border-right-style: solid;
  border-right-width: 1px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

#ec_image_verify_button {
  z-index: 4;
  width: 288px;
  height: 28px;
  bottom: 10px;
  left: 15px;
  font-size: 14px;
  border-top-color: transparent;
  border-top-width: 0px;
  border-left-color: transparent;
  border-left-width: 0px;
  border-right-color: transparent;
  border-right-width: 0px;
  border-bottom-color: transparent;
  border-bottom-width: 0px;
  background-color: rgb(0, 191, 0);
}
</style>
<script>
import {
  urls
} from '../libs/common'
import HeaderUserData from './Partials/HeaderUserData.vue'
import ModalWait from './Partials/ModalWait.vue'
import NotificationIcon from './Partials/NotificationIcon.vue'
import ButtonPrint from './Partials/ButtonPrint.vue'
import ButtonScan from './Partials/ButtonScan.vue'

/**
 * Subir voucher
 */
import upload from '../services/upload'

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
    payments() {
      if (typeof this.order.payments.data !== 'undefined') {
        return this.order.payments.data
      }
      return this.order.payments
    }
  },
  data: function() {
    return {
      show_volver_button: false
    }
  },
  methods: {
    refresh() {
      this.reload()
    },

    reload() {
      var setup = ls.get('setup')

      if (!setup || !setup.vehicleSelected) {
        return this.$route.router.go('/setup')
      }

      ModalWait.showIt(true, 'refresh-order')

      var vehicleSelected = setup.vehicleSelected

      this.$http.get(MICRO_API_URL + '/vehicle/' + vehicleSelected + '/opl-request-order').then((response) => {

        ModalWait.showIt(false)

        if (response.data && response.data.success) {
          /////
        }

      }, (response) => {
        console.info(response, 'error callback');
      });

    },

    back() {
      console.info(this.addressType);
      return this.$route.router.go('/event-' + this.addressType)
    },

    processForm() {
      upload.processForm(this.order.id)
    },

    verifyVoucher() {
      upload.processForm(this.order.id)
    },

    openIngresoPago() {
      var $w1 = $('#windowPagos')
      $w1.hide()
      var $w2 = $('#windowIngresoPago')
      $w2.show()
    },

    closeIngresoPago() {
      var $w1 = $('#windowPagos')
      $w1.show()
      var $w2 = $('#windowIngresoPago')
      $w2.hide()
    }
  },
  ready: function() {
    console.info('=================================== Payment is ready with this order: ', this.order.id)
    this.reload()
    upload.init()

    /**
     * open siempre ventana prncipal
     */
    // this.closeIngresoPago()
    this.openIngresoPago()
  },
  computed: {
    infoName: function() {
      const name = this.order[this.addressType + 'Address_forperson'];
      return name === '-' ? this.order.customer.name : name;
    },
    infoPhone: function() {
      const phone = this.order[this.addressType + 'Address_forperson_phone'];
      return phone === '-' ? this.order.customer.phone : phone;
    }
  },
}
</script>
