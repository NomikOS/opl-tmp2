<template>
	<a v-link="'scan-trip'" class="ac25-half-black  right waves-effect waves-light">
		<img src="../html/images/barcode-big-2.png" />
    <div style="margin-top:100px">
      <p class="ac25-no-margin" v-if="trip_items_remaining_counter > 0">escanear ({{trip_items_remaining_counter}})</p>
      <p class="ac25-no-margin" v-if="trip_items_remaining_counter <= 0">escaneo listo</p>
    </div>
  </a>
</template>

<script>
  import { getTripItemsRemainingCounter } from '../../vuex/getters'
  import ls from '../../libs/ls'

  export default {
    name: 'ButtonScan',
    vuex: {
      getters: {
        trip_items_remaining_counter: getTripItemsRemainingCounter
      }
    },
    data: function() {
      return {
        grocer: false
      }
    },
    ready() {
      var grocer = ls.get( 'grocer' )
      this.grocer = grocer

      console.info( 'ButtonScan is ready for ' + ( grocer ? 'Grocer' : 'OPL' ) + ' ===================================' );
    }
  }
</script>
