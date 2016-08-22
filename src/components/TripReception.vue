<template>
  <header-user-data></header-user-data>
  <div class="ac25-content-global">
    <div class="container">
      <div class="ac25-content-inner-holder ac25-min-height-200">
       <h4 class="ac25-top-red-text">RECEPCIÓN DE<br />CARGA</h4>
       <p class="left clearfix ac25-subtitle"> Hub: Bodega Huechuraba </p>
       <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />

       <div class="clearfix" style="height:100px"></div>

       <span class="ac25-top-check-title">
        Bultos a recibir: <span class="ac25-large-font">{{trip_items_remaining_counter}} / Viaje #{{trip.id}}
      </span>

      <div class="clearfix" style="height:100px"></div>

      <h4 class="ac25-top-red-text">IMPORTANTE!</h4>
      <p class="left clearfix ac25-subtitle"> Escanee uno a uno los bultos y sólo cuando el bulto a escanear se encuentre en bodega. </p>

      <div class="clearfix"></div>

    </div><!-- end content-inner-holder -->
  </div><!-- end container -->

  <footer class="ac25-content-footer">
    <button-print-trip></button-print-trip>
    <button-scan-trip></button-scan-trip>
    <div class="clearfix"></div>
  </footer><!-- end footer -->

</div><!-- end content-global -->
</template>

<script>
  import { urls } from '../libs/common'
  import HeaderUserData from './Partials/HeaderUserData.vue'
  import ButtonPrintTrip from './Partials/ButtonPrintTrip.vue'
  import ButtonScanTrip from './Partials/ButtonScanTrip.vue'
  import { getTrip, getOperationType, getTripItemsRemainingCounter } from '../vuex/getters'

  const MICRO_API_URL = urls.micro_api

  export default {
    name: 'TripReception',
    components: {
      HeaderUserData,
      ButtonPrintTrip,
      ButtonScanTrip,
    },
    vuex: {
      getters: {
        operation_type: getOperationType,
        trip: getTrip,
        trip_items_remaining_counter: getTripItemsRemainingCounter
      }
    },
    ready: function() {
      console.info( 'TripReception is ready ===================================' );
    },
    methods: {
    }
  }
</script>
