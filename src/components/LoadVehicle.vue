<template>
  <header-user-data></header-user-data>
  <modal-wait></modal-wait>

  <div class="ac25-content-global">
    <div class="container">

      <div class="ac25-content-inner-holder ac25-min-height-200" v-if="addressType == 'pickup'">
       <h4 class="ac25-top-red-text">CARGAR EL CAMION</h4>
       <p class="left clearfix ac25-subtitle"> Orden {{order.special_id}} </p>
       <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />

        <ul class="ac25-red-list clearfix ac25-fleft ac25-mtop60">
          <li> Cargue los <span class="ac25-large-font">{{order.items_amount}}</span> bultos.</li>
          <li> Una vez que este listo para pasar a la siguiente orden, persione terminar.</li>
        </ul>

        <div class="clearfix"></div>
          <a @click="print('items-list')" class="ac25-print-button ac25-mbottom50 clearfix waves-effect waves-light"> <img src="html/images/print.png" class="left" /><span>imprimir listado de bultos</span> </a>
        </div><!-- end content-inner-holder -->
      </div><!-- end container -->

      <div class="ac25-content-inner-holder ac25-min-height-200" v-if="addressType == 'delivery'">
       <h4 class="ac25-top-red-text">DESCARGAR<br />EL CAMION</h4>
       <p class="left clearfix ac25-subtitle"> Orden {{order.special_id}} </p>
       <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />

        <ul class="ac25-red-list clearfix ac25-fleft ac25-mtop60">
          <li> Desargue los <span class="ac25-large-font">{{order.items_amount}}</span> bultos.</li>
          <li> Una vez que este listo para pasar a la siguiente orden, persione terminar.</li>
        </ul>

        <div class="clearfix"></div>
          <a @click="print('items-list')" class="ac25-print-button ac25-mbottom50 clearfix waves-effect waves-light"> <img src="html/images/print.png" class="left" /><span>imprimir listado de bultos</span> </a>
        </div><!-- end content-inner-holder -->
      </div><!-- end container -->

      <footer class="ac25-content-footer">
        <a onclick="window.history.back()" class="ac25-half-black left waves-effect waves-light">volver</a>
        <a @click="finishOrder()" class="ac25-half-red right waves-effect waves-light">terminar</a>
      </footer><!-- end footer -->

  </div><!-- end content-global -->
</template>

<script>
  import HeaderUserData from './Partials/HeaderUserData.vue'
  import ModalWait from './Partials/ModalWait.vue'
  import NotificationIcon from './Partials/NotificationIcon.vue'
  import ButtonPrint from './Partials/ButtonPrint.vue'
  import ButtonScan from './Partials/ButtonScan.vue'
  import Print from './Print.vue'
  import { urls } from '../libs/common'
  import ls from '../libs/ls'
  import { getOrder, getCounters, getAddressType } from '../vuex/getters'

  const ORDER_URL = urls.micro_api + '/order'

  export default {
    name: 'LoadVehicle',
    components: {
      HeaderUserData,
      ModalWait,
      NotificationIcon,
      ButtonPrint,
      ButtonScan,
      Print
    },
    vuex: {
      getters: {
        order: getOrder,
        counters: getCounters,
        addressType: getAddressType
      }
    },
    ready: function() {
      console.info( '=================================== LoadVehicle is ready with this order: ', this.order.id )
    },
    methods: {
      finishOrder () {

        var that = this;
        var order_id = this.order.id;
        var addressType = this.addressType

        this.$http.post( ORDER_URL + '/finish-shipment', {
          order_id: order_id,
          shipment_type: addressType,
          address_type: addressType

        } ).then( ( response ) => {
          console.info( response, 'success callback' );
          this.$route.router.go( '/available' )

        }, ( response ) => {
          console.info( response.data, 'error callback' );

        } );
      },
      print( label ) {
        Print.print(label)

        // var setup = ls.get( 'setup' )

        // if ( !setup || !setup.printerMAC ) {
        //   return this.$route.router.go( '/setup' )
        // }

        // // var printerMAC 1039 = 'AC:3F:A4:56:66:EC';
        // var mac = $.trim(setup.printerMAC).toUpperCase()

        // var that = this;
        // var order_id = this.order.id;

        // ModalWait.showIt( true, 'printing' )
        // this.$http.get( ORDER_URL + '/' + order_id + '/opl-get-zpl/' + label ).then( ( response ) => {
        //   ModalWait.showIt( false )

        //   console.info( response, 'success callback' );
        //   console.info( label, 'Imprimiendo order #' + order_id + ' en impresora MAC: ' + mac );

        //   var text = response.data.text
        //   if (!text) {
        //     return alert('Texto no ha arrivado. Abortando impresión.')
        //   }

        //   cordova.plugins.zbtprinter.print( mac, text,
        //     function( success ) {},
        //     function( fail ) {
        //       alert( 'Fallo en plugin de impresión. Posiblemente ha ingresado una dirección MAC incorrecta. Error interno: ' + fail  );
        //     } );

        // }, ( response ) => {
        //   console.info( response, 'error callback' );
        // } );
      },
    }
  }
</script>
