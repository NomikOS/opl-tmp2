<template>
  <header-user-data></header-user-data>
  <div class="ac25-red-loading-section">
    <div class="container">

      <div class="ac25-loading-content" v-if="!order.id">
      OT: | {{order.id}}<br>show_acknowledge:{{show_acknowledge}}<br>show_in_position:{{show_in_position}}
        <h5>Esperando Evento...</h5>
        <img src="html/images/loading.gif" alt="" />
      </div>
      <div class="ac25-loading-content" v-if="order.id">
      OT: | {{order.id}}<br>show_acknowledge:{{show_acknowledge}}<br>show_in_position:{{show_in_position}}
        <h5>{{order.special_id}}<br /><br />EN PROGRESO </h5>
        <br />
        <img src="html/images/green-check.png" alt="" />
      </div>
    </div>
    <img class="ac25-top-right-hand ac25-loading" src="html/images/hand.png" v-link="'call'" />
  </div><!-- end red-loading-section -->

  <footer class="ac25-newfoot">
    <a @click="aknowledge()" class="ac25-full-black waves-effect waves-light" v-if="order.id && show_acknowledge">ACEPTAR</a>
    <a @click="inPosition()" class="ac25-full-black waves-effect waves-light" v-if="order.id && show_in_position">EN EL LUGAR</a>
    <a v-link="'logout'" class="ac25-full-black waves-effect waves-light">CERRAR SESSION</a>
  </footer><!-- end footer -->

</template>

<script>
  import HeaderUserData from './Partials/HeaderUserData.vue'
  import { urls } from '../libs/common'
  import ls from '../libs/ls'
  import { getOrder, getCounters, getAddressType, getShowAcknowledgeTime, getShowInPosition } from '../vuex/getters'
  import { storeData } from '../vuex/actions'

  const SHIPMENT_URL = urls.micro_api + '/shipment'

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
        order: getOrder,
        counters: getCounters,
        addressType: getAddressType,
        show_acknowledge: getShowAcknowledgeTime,
        show_in_position: getShowInPosition
      },
      actions: {
        storeData: storeData
      }
    },
    ready() {
        console.info( 'StandBy is ready ===================================' );
        console.info(this.order.pickup_acknowledge_time, 'this.order de vuex----------------');
        console.info(this.order.id, 'this.order.id de vuex ----------------');
    },
    methods: {
      inPosition () {

        var shipment_id = this.order[this.addressType + '_shipment_id']
        console.info(shipment_id, 'shipment_id');

        this.$http.post( SHIPMENT_URL + '/' + shipment_id + '/in-position' ).then( ( response ) => {

          if (response.data && response.data.success) {
            this.storeData( {
              type: 'show_in_position',
              content: false
            } )

            return this.$route.router.go( '/payment' )
          }
        });
      },
      aknowledge () {

        var shipment_id = this.order[this.addressType + '_shipment_id']
        console.info(shipment_id, 'shipment_id');

        this.$http.post( SHIPMENT_URL + '/' + shipment_id + '/aknowledge' ).then( ( response ) => {

          if (response.data && response.data.success) {
            this.storeData( {
              type: 'show_acknowledge',
              content: false
            } )
          }
        });
      }
      
    }
  }
</script>
