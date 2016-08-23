<template>
  <header-user-data></header-user-data>
  <div class="ac25-red-loading-section">
    <div class="container">
      <div class="ac25-loading-content">
        <h5>Preparado para operaciones en hub</h5>
        <hr />

        <div style="margin-top:100px">
        <!-- quiero poner items en transito -->
          <center><a @click="goto('trip-transfer')" style="color:white;font-size: 30px;_border:1px solid white;padding:10px;width:90%">ENTREGAR CARGA</a> </center>
          <br />
          <!-- quiero poner items en hub -->
          <center><a @click="goto('trip-reception')" style="color:white;font-size: 30px;_border:1px solid white;padding:10px;width:90%">RECIBIR CARGA</a> </center>
        </div>
      </div>
    </div>
    <img class="ac25-top-right-hand ac25-loading" src="html/images/hand.png" v-link="'call'" />
  </div><!-- end red-loading-section -->

  <footer class="ac25-newfoot">
    <a v-link="'logout'" class="ac25-full-black waves-effect waves-light">CERRAR SESSION</a>
  </footer><!-- end footer -->
</template>

<script>
  import HeaderUserData from './Partials/HeaderUserData.vue'
  import { urls } from '../libs/common'
  import ls from '../libs/ls'
  import { getTrip, getCounters, getOperationType } from '../vuex/getters'
  import { storeData } from '../vuex/actions'

  const TRIP_URL = urls.micro_api + '/trip'

  export default {
    name: 'StandBy',
    components: {
      HeaderUserData
    },
    data: function () {
      return {
      }
    },
    vuex: {
      getters: {
        trip: getTrip,
        counters: getCounters,
      },
      actions: {
        storeData: storeData
      }
    },
    ready() {
      console.info( 'StandByGrocer is ready ===================================' );
    },
    methods: {
      goto(operation_type) {

        var trip_id_input = prompt('Ingrese ID viaje:', this.trip && this.trip.id > 0 ? this.trip.id : '')
        if (!trip_id_input || !$.isNumeric( trip_id_input )) {
          return alert('Ingrese un ID numérico')
        }

        this.$http.get( TRIP_URL + '/' + trip_id_input + '/grocer-publish/' + operation_type).then( ( response ) => {

          if (!response.data || ! response.data.trip) {
            return alert('Viaje no existe')
          }

          var trip = response.data.trip
          var items_remaining = response.data.items_remaining

          this.storeData( {
            type: 'trip',
            content: trip
          } )

          this.storeData( {
            type: 'trip_items_remaining_counter',
            content: items_remaining.length
          } )

          this.storeData( {
            type: 'operation_type',
            content: operation_type
          } )

          console.info(operation_type, 'operation_type:');

          this.$route.router.go( '/' + operation_type )

        }, ( response ) => {
          console.info( response, 'error callback' )

          var data = response.data
          if (data.status_code && data.status_code == 404) {
            alert('Viaje no existe')
          }

        } )

      }
    }
  }
</script>
