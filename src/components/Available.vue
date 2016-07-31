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
      this.retry();
      // centrar esto de retry para todos los ajax
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

            console.info( 'Inform available to central: Retrying in ' + secs + ' seconds' );
            setTimeout( function() {
              that.retry();
            }, secs )

            return
          }

          var result = response.data.result

          if ( result == 'all ok' ) {
            that.message = 'R4'

            setTimeout( function() {
              return that.$route.router.go( '/stand-by' )
            }, 1000 )

          } else {

            that.message = 'Central informada, pero no se han recibido instrucciones. Nos pondremos en espera dentro de 5 segundos...'
            setTimeout( function() {
              return that.$route.router.go( '/stand-by' )
            }, 5000 )
          }

        }, ( response ) => {
          console.info( response, 'error callback' );
        } )
      }
    }
  }
</script>