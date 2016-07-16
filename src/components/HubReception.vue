<template>
<header-user-data></header-user-data>
<div class="ac25-content-global">
  <div class="container">
    <div class="ac25-content-inner-holder ac25-min-height-200">
     <h4 class="ac25-top-red-text">CARGAR EL CAMION</h4>
     <p class="left clearfix ac25-subtitle"> Orden {{order.special_id}} </p>
     <img class="ac25-top-right-hand ac25-z-1" src="/html/images/hand-black.png" v-link="'call'" />

     <ul class="ac25-red-list clearfix ac25-fleft ac25-mtop60">
      <li> Cargue los <span class="ac25-large-font">{{order.items_amount}}</span> bultos. </li>
      <li> Una vez que este listo para pasar a la siguiente orden, persione terminar.</li>
    </ul>

    <div class="clearfix"></div>
    <a href="#" class="ac25-print-button ac25-mbottom50 clearfix waves-effect waves-light"> <img src="/html/images/print.png"  class="left" alt="" />  <span>imprimir listado de bultos</span> </a>
  </div><!-- end content-inner-holder -->
</div><!-- end container -->

<footer class="ac25-content-footer">
  <a onclick="window.history.back()" class="ac25-half-black left waves-effect waves-light">volver</a>
  <a @click="finishOrder()" class="ac25-half-red right waves-effect waves-light">terminar</a>
</footer><!-- end footer -->

</div><!-- end content-global -->
</template>

<script>
import { urls } from '../libs/common'
import HeaderUserData from './Partials/HeaderUserData.vue'
import NotificationIcon from './Partials/NotificationIcon.vue'
import ButtonPrint from './Partials/ButtonPrint.vue'
import ButtonScan from './Partials/ButtonScan.vue'

const MICRO_API_URL = urls.micro_api

export default {
  name: 'HubReception',
  components: {
    HeaderUserData,
    NotificationIcon,
    ButtonPrint,
    ButtonScan
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
    finishOrder: function() {
      this.$http.put( MICRO_API_URL + '/137/finish-pickup' ).then( ( response ) => {
        console.info( response, 'success callback' );
        var order = response.data.data

        



        this.$route.router.go( 'available' )







      }, ( response ) => {
        console.info( response.data, 'error callback' );
      } );
    }    
  }
}
</script>