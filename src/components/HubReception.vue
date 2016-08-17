<template>
  <header-user-data></header-user-data>
  <div class="ac25-content-global">
    <div class="container">
      <div class="ac25-content-inner-holder ac25-min-height-200">
       <h4 class="ac25-top-red-text">RECEPCIÓN DE CARGA</h4>
       <p class="left clearfix ac25-subtitle"> Hub: Bodega Huechuraba </p>
       <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />

       <div class="clearfix" style="height:100px"></div>

       <span class="ac25-top-check-title">
        Bultos a recibir: <span class="ac25-large-font">{{order.items_amount}}
      </span>

      <div class="clearfix" style="height:100px"></div>

      <h4 class="ac25-top-red-text">IMPORTANTE!</h4>
      <p class="left clearfix ac25-subtitle"> Escanee uno a uno los bultos y sólo cuando el bulto a escanear se encuentre arriba del móvil. </p>

      <div class="clearfix"></div>

    </div><!-- end content-inner-holder -->
  </div><!-- end container -->

  <footer class="ac25-content-footer">
    <button-print></button-print>
    <button-scan></button-scan>
    <div class="clearfix"></div>
  </footer><!-- end footer -->

</div><!-- end content-global -->
</template>

<script>
  import { urls } from '../libs/common'
  import HeaderUserData from './Partials/HeaderUserData.vue'
  import ButtonPrint from './Partials/ButtonPrint.vue'
  import ButtonScan from './Partials/ButtonScan.vue'
  import { getOrder, getCounters, getAddressType } from '../vuex/getters'

  const MICRO_API_URL = urls.micro_api

  export default {
    name: 'HubReception',
    components: {
      HeaderUserData,
      ButtonPrint,
      ButtonScan,
    },
    vuex: {
      getters: {
        order: getOrder,
        counters: getCounters,
        addressType: getAddressType
      }
    },
    ready: function() {
      console.info( 'HubReception is ready ===================================' );
    },
    methods: {
    }
  }
</script>
