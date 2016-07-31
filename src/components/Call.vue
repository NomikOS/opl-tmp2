<template>
  <header-user-data></header-user-data>
  <div class="ac25-content-global">
    <div class="container">
      <div class="ac25-content-inner-holder ac25-min-height-200">
       <h4 class="ac25-top-red-text">LLAMADO</h4>
       <p class="left clearfix ac25-subtitle" style="width:60%">
         Seleccione una de las opciones para iniciar un llamado telefónico.
         <br />
         <br />
         Llame a cliente sólo en caso de ser necesario.
       </p>
       <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />
     </div><!-- end content-inner-holder -->
   </div><!-- end container -->
   <footer class="ac25-content-footer">
     <a class="ac25-full-red-custom waves-effect waves-light" v-if="!order.pickupAddress_person_phone"></a>
     <a href="tel:{{order.pickupAddress_person_phone}}" class="ac25-full-red-custom waves-effect waves-light" v-if="order.pickupAddress_person_phone">llamar al cliente</a>

     <a class="ac25-full-red-custom waves-effect waves-light" v-if="false"><!-- central llama a cliente --></a>

     <a href="tel:{{setup.phoneCentral}}" __click="callCentral()" class="ac25-full-red-custom waves-effect waves-light">llamar a la central</a>

     <a href="tel:{{setup.phoneMobile}}" __click="callDriver()" class="ac25-full-red-custom waves-effect waves-light">llamar al chofer</a>

     <a onclick="window.history.back()" class="ac25-full-black waves-effect waves-light">terminar</a>
   </footer><!-- end footer -->
 </div><!-- end content-global -->  
</template>

<script>
  import HeaderUserData from './Partials/HeaderUserData.vue'
  import ls from '../libs/ls'
  import { getOrder } from '../vuex/getters'

  var phoneMobile = ''
  var phoneCentral = ''

  export default {
    name: 'Call',
    components: {
      HeaderUserData
    },
    vuex: {
      getters: {
        order: getOrder
      }
    },    
    data: function() {
      return {
        setup:{}
      }
    },

    methods: {
      callCustomer() {
        var setup = ls.get( 'setup' )
        if ( !setup || !setup.phoneMobile ) {
          return this.$route.router.go( '/setup' )
        }
        phoneMobile = setup.phoneMobile

        alert('Ring ring')
      },
      callCentralCustomer() {
        var setup = ls.get( 'setup' )
        if ( !setup || !setup.phoneMobile ) {
          return this.$route.router.go( '/setup' )
        }
        phoneMobile = setup.phoneMobile

        alert('Ring ring')
      },
      callCentral() {
        var setup = ls.get( 'setup' )
        if ( !setup || !setup.phoneMobile ) {
          return this.$route.router.go( '/setup' )
        }
        phoneMobile = setup.phoneMobile

        alert('Ring ring')
      },            
      callDriver() {
        var setup = ls.get( 'setup' )
        if ( !setup || !setup.phoneMobile ) {
          return this.$route.router.go( '/setup' )
        }
        phoneMobile = setup.phoneMobile

        alert('Ring ring')
      },
    },
    ready(){
      console.info('Call is ready ===================================');
      var setup = ls.get( 'setup' )      
      this.setup = setup

      console.info(this.order.pickupAddress_person_phone, 'order.pickupAddress_person_phone');
      console.info(setup.phoneCentral, 'phoneCentral');
      console.info(setup.phoneMobile, 'phoneMobile');
      console.info(this.setup, 'this.setup:');
    }  
  }
</script>
