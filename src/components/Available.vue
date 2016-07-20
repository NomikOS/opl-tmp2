<template>
  <header-user-data></header-user-data>
  <div class="ac25-red-loading-section">
    <div class="container">
      <div class="ac25-loading-content">
       <h5>{{message}}</h5>
       <img src="/html/images/loading.gif" />
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
    data: function(){
      return {
        message:'Poniendose a disposición de la central'
      }
    },
    ready() {
      console.info( 'Available is ready ===================================' );
      this.retry();



      // centar esto de retry para todos los ajax
    },
    methods: {
      retry: function() {    

        var setup = ls.get( 'setup' )

        if (!setup || !setup.vehicleSelected) {
          return this.$route.router.go( '/setup' )
        }

        var vehicleSelected = setup.vehicleSelected        

        this.$http.get( MICRO_API_URL + '/' + vehicleSelected  + '/opl-available' ).then( ( response ) => {
          console.info( response, 'success callback' )

          var result = response.data.result
          if (result != 'OK') {
            return this.retry();
          }

          this.message = 'R4'

        }, ( response ) => {
          console.info( response, 'error callback' );
        } )        
      }
    }
  }
</script>