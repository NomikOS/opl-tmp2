<template>
  <a v-if="counters.items_to_scan_remaining > 0" v-link="'scan'" class="ac25-half-black  right waves-effect waves-light">
      <img src="../html/images/barcode-big-2.png" />
      <p class="ac25-no-margin">escanear ({{counters.items_to_scan_remaining}})</p>
  </a>

  <a v-if="counters.items_to_scan_remaining <= 0" class="ac25-half-black  right waves-effect waves-light" style="cursor:default">
      <img src="../html/images/barcode-big-2.png" />
      <p class="ac25-no-margin">escaneo listo</p>
  </a>
</template>

<script>
  import { getOrder, getCounters, getTripItemsRemainingCounter } from '../../vuex/getters'

  export default {
    name: 'ButtonScan',
    vuex: {
      getters: {
        order: getOrder,
        counters: getCounters
      }
    },
    data: function() {
      return {
      }
    },
    ready() {
      console.info( 'ButtonScan is ready for pickup/delivery ===================================' );
    }
  }
</script>
