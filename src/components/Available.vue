<template>
  <header-user-data></header-user-data>
  <div class="ac25-red-loading-section">
    <div class="container">
      <div class="ac25-loading-content">
       <h5>{{message}}</h5>
       <img src="html/images/loading.gif" />
     </div>
   </div>
 </div><!-- end red-loading-section -->
</template>

<script>
  import director from '../services/director'
  import HeaderUserData from './Partials/HeaderUserData.vue'
  import { urls } from '../libs/common'
  import ls from '../libs/ls'

  const MICRO_API_URL = urls.micro_api

  export default {
    name: 'Available',
    components: {
      HeaderUserData
    },
    data: function() {
      return {
        message: 'Poniendose a disposición de la central'
      }
    },
    ready() {
      console.info( 'Available is ready ===================================' );

      var grocer = ls.get( 'grocer' )

      if ( grocer ) {
        return this.$route.router.go( '/stand-by-grocer' )

      } else {
        this.retry();

      }
    },
    methods: {
      retry: function() {

        var setup = ls.get( 'setup' )

        if ( !setup || !setup.vehicleSelected ) {
          return this.$route.router.go( '/setup' )
        }

        var vehicleSelected = setup.vehicleSelected
        var secs = 30000;
        var that = this;

        this.$http.get( MICRO_API_URL + '/vehicle/' + vehicleSelected + '/opl-available' ).then( ( response ) => {
          console.info( response, 'success callback' )

          if ( !response.ok ) {

            console.info( 'Informing i\'m available to central failed. Retrying in ' + secs + ' seconds' );
            setTimeout( function() {
              that.retry();
            }, secs )

            return
          }

          var result = response.data.result

          console.info('resultado desde api a estoy disponible:', result);

          if ( result == 'all ok' ) {
            that.message = 'R4'

            setTimeout( function() {
              console.info('/stand-by despues de 1 second !!!!!!!!!!!!!!!!!!!!!');
              return that.$route.router.go( '/stand-by' )
            }, 1000 )

          } else {

            if ( result != 'shipment dispatched' ) {

              that.message = 'Central informada, pero no se han recibido instrucciones. Nos pondremos en espera dentro de 5 segundos...'
              console.info('/stand-by despues de retry !!!!!!!!!!!!!!!!!!!!!');
              return that.$route.router.go( '/stand-by' )
            }

            /**
             * NO enrutar aqui a ninguna parte ya que
             * se espera un notificacion via pubnub que
             * manejara el siguiente paso a seguir, asshole!!!
             */
          }

        }, ( response ) => {
          console.info( response, 'error callback' );

          var data = response.data
          if ( 401 == data.status_code ) {
            director.logout()
          }

        } )
      }
    }
  }
</script>
