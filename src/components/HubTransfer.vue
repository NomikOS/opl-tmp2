<template>
  <header-user-data></header-user-data>
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
    <a @click="finishOrder()" class="ac25-full-red-custom-dev right waves-effect waves-light" style="padding:100px 20px">terminar</a>
  </footer><!-- end footer -->

</div><!-- end content-global -->
</template>

<script>
  import { urls } from '../libs/common'
  import HeaderUserData from './Partials/HeaderUserData.vue'
  import NotificationIcon from './Partials/NotificationIcon.vue'
  import ButtonPrint from './Partials/ButtonPrint.vue'
  import ButtonScan from './Partials/ButtonScan.vue'
  import Print from './Print.vue'

  const MICRO_API_URL = urls.micro_api

  export default {
    name: 'HubReception',
    components: {
      HeaderUserData,
      NotificationIcon,
      Print
    },
    data: function() {
      return {
        order: {}
      };
    },
    ready: function() {
      console.info( 'HubReception is ready ===================================' );
      this.load();
    },
    methods: {
      load: function() {
        this.$http.get( MICRO_API_URL + '/137' ).then( ( response ) => {
          console.info( response, 'success callback' );
          var order = response.data.data
          this.order = order
        }, ( response ) => {
          console.info( response, 'error callback' );
        } );
      },
      print( label ) {
        Print.print(label)

      },
      finishOrder: function() {
        this.$http.put( MICRO_API_URL + '/137/finish-pickup' ).then( ( response ) => {
          console.info( response, 'success callback' );
          var order = response.data.data





          this.$route.router.go( '/available' )







        }, ( response ) => {
          console.info( response.data, 'error callback' );
        } );
      }
    }
  }
</script>
