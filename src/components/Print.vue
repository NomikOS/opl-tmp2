<template>
  <header-user-data></header-user-data>
  <modal-wait></modal-wait>

  <ul class="ac25-main-menu">
    <li>
      <a class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <img src="html/images/print-big.png" alt="" />
          <p>imprimir</p>
        </div>
      </a>
    </li>
    <li>
      <a __click="print('invoice')" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p><!-- factura --></p>
        </div>
      </a>
    </li>
    <li>
      <a @click="print('internal-order')" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p>orden interna</p>
        </div>
      </a>
    </li>
    <li>
      <a @click="print('customer-pickup-order')" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p>orden cliente</p>
        </div>
      </a>
    </li>
    <li>
      <a __click="print('payments-history')" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p><!-- historial de pago --></p>
        </div>
      </a>
    </li>
    <li>
      <a __click="scan('special')" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p><!-- especial --></p>
        </div>
      </a>
    </li>
    <li>
      <a onclick="window.history.back()" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p>volver</p>
        </div>
      </a>
    </li>
  </ul><!-- end main-menu -->
</template>

<script>
  import HeaderUserData from './Partials/HeaderUserData.vue'
  import ModalWait from './Partials/ModalWait.vue'

  import { urls } from '../libs/common'
  import ls from '../libs/ls'
  import { showModal } from '../vuex/actions'
  import { getOrder } from '../vuex/getters'

  const ORDER_URL = urls.micro_api + '/order'

  export default {
    name: 'Print',
    components: {
      HeaderUserData,
      ModalWait,
    },
    vuex: {
      actions: {
        showModal: showModal
      },
      getters: {
        order: getOrder
      }
    },
    data() {
      return {}
    },

    ready() {
      console.info( '=================================== Print is ready with this order: ', this.order.id )
    },

    methods: {
      print( label ) {

        var setup = ls.get( 'setup' )

        console.info( setup, '--------------------------' );

        if ( !setup || !setup.printerMAC ) {
          return this.$route.router.go( '/setup' )
        }

        // var printerMAC = 'AC:3F:A4:56:66:EC';
        var mac = $.trim( setup.printerMAC ).toUpperCase()
        var that = this;
        var order_id = this.order.id;
        
        ModalWait.showIt( true )
        this.$http.get( ORDER_URL + '/' + order_id + '/opl-get-zpl/' + label ).then( ( response ) => {
          ModalWait.showIt( false )

          console.info( response, 'success callback' );
          console.info( label, 'Imprimiendo order #' + order_id + ' en impresora MAC: ' + mac );

          var text = response.data.text
          if ( !text ) {
            return alert( 'Texto no ha arrivado. Abortando impresión.' )
          }

          cordova.plugins.zbtprinter.print( mac, text,
            function( success ) {},
            function( fail ) {
              alert( 'Fallo en plugin de impresión. Posiblemente ha ingresado una dirección MAC incorrecta. Error interno: ' + fail );
            } );

        }, ( response ) => {
          console.info( response, 'error callback' );
        } );
      },

    },
  }
</script>