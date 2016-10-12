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
      <a @click="print('invoice')" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p v-if="order.dte_type == 33">factura</p>
          <p v-if="order.dte_type == 39">boleta</p>
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
      <a @click="print('items-list-trip')" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p>lista de bultos</p>
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
  import { getTrip, getOperationType } from '../vuex/getters'

  const TRIP_URL = urls.micro_api + '/trip'

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
        operation_type: getOperationType,
        trip: getTrip,
      }
    },
    data() {
      return {
        grocer: false
      }
    },

    ready() {
      console.info( '=================================== Print is ready with this trip: ', this.trip.id )
      var grocer = ls.get( 'grocer' )
      this.grocer = grocer
    },

    methods: {
      print( label ) {

        var setup = ls.get( 'setup' )

        if ( !setup || !setup.printerMAC ) {
          return this.$route.router.go( '/setup' )
        }

        var mac = $.trim( setup.printerMAC ).toUpperCase()
        var trip_id = this.trip.id;

        ModalWait.showIt( true, 'printing' )
        this.$http.get( TRIP_URL + '/' + trip_id + '/opl-get-zpl/' + label + '/' + this.operation_type + '/' + (this.grocer ? 'grocer' : 'opl') ).then( ( response ) => {
          ModalWait.showIt( false )

          console.info( response, 'success callback' );
          console.info( label, 'Imprimiendo trip #' + trip_id + ' en impresora MAC: ' + mac );

          var text = response.data.text
          if (!text) {
            return alert('Texto no ha arrivado. Abortando impresión.')
          }

          cordova.plugins.zbtprinter.print( mac, text,
            function( success ) {},
            function( fail ) {
              alert( 'Fallo en plugin de impresión. Posiblemente ha ingresado una dirección MAC incorrecta. Error interno: ' + fail  );
            } );

        }, ( response ) => {
          console.info( response, 'error callback' );
        } );
      },

    },
  }
</script>
