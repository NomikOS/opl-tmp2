<template>
  <header-user-data></header-user-data>
  <modal-wait></modal-wait>

  <div class="ac25-content-global">
    <div class="container">
      <div class="ac25-content-inner-holder ac25-min-height-200">
        <h4 class="ac25-top-red-text">TRASBORDO DE ENTREGA</h4>
        <p class="left clearfix ac25-subtitle"> Hub: Bodega Huechuraba </p>
        <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />

        <ul class="ac25-red-list clearfix ac25-fleft ac25-mtop60">
          <li> Entregue los <span class="ac25-large-font">{{order.items_amount}}</span> bultos. </li>
          <li> Asegúrese bien que la pesona que recepciona firme la orden de trasbordo.</li>
        </ul>

        <div class="clearfix"></div>
        <a @click="print('items-list')" class="ac25-print-button ac25-mbottom50 clearfix waves-effect waves-light"> <img src="html/images/print.png" class="left" /><span>imprimir listado de bultos</span> </a>
      </div><!-- end content-inner-holder -->
    </div><!-- end container -->

    <footer class="ac25-content-footer">
      <a @click="finishTransfer()" class="ac25-full-red-custom-dev right waves-effect waves-light" style="padding:100px 20px">terminar</a>
    </footer><!-- end footer -->

  </div><!-- end content-global -->
</template>

<script>
  import { urls } from '../libs/common'
  import ls from '../libs/ls'
  import HeaderUserData from './Partials/HeaderUserData.vue'
  import ModalWait from './Partials/ModalWait.vue'
  import { getOrder, getCounters, getAddressType } from '../vuex/getters'

  const ORDER_URL = urls.micro_api + '/order'

  export default {
    name: 'HubTransfer',
    components: {
      HeaderUserData,
      ModalWait,
    },
    data: function() {
      return {
        order: {}
      };
    },
    vuex: {
      getters: {
        order: getOrder,
        counters: getCounters,
        addressType: getAddressType
      }
    },
    ready: function() {
      console.info( 'HubTransfer is ready ===================================' );
    },
    methods: {

      print( label ) {

        console.info(this.order, 'this.order de vuex----------------');
        console.info(this.order.id, 'this.order.id de vuex ----------------');

        var setup = ls.get( 'setup' )

        if ( !setup || !setup.printerMAC ) {
          return this.$route.router.go( '/setup' )
        }

        var mac = $.trim(setup.printerMAC).toUpperCase()
        var order_id = this.order.id; // fail

        var order_id = ls.get( 'order_id' )
        console.info(order_id, 'order_id de ls ----------------');

        ModalWait.showIt( true, 'printing' )
        this.$http.get( ORDER_URL + '/' + order_id + '/opl-get-zpl/' + label ).then( ( response ) => {
          ModalWait.showIt( false )

          console.info( response, 'success callback' );
          console.info( label, 'Imprimiendo order #' + order_id + ' en impresora MAC: ' + mac );

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

      finishTransfer () {

        console.info(this.order, 'this.order de vuex----------------');
        console.info(this.order.id, 'this.order.id de vuex ----------------');

        var order_id = this.order.id; // fail

        var order_id = ls.get( 'order_id' )
        console.info(order_id, 'order_id de ls ----------------');

        this.$http.post( ORDER_URL + '/finish-transfer', {
          order_id: order_id,

        } ).then( ( response ) => {
          console.info( response, 'success callback' );
          this.$route.router.go( '/available' )

        }, ( response ) => {
          console.info( response.data, 'error callback' );

        } );
      }
    }
  }
</script>
