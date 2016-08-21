<template>
  <header-user-data></header-user-data>
  <div class="ac25-red-loading-section">
    <div class="container">
      <div class="ac25-loading-content">
        <h5>Esperando Evento...</h5>
        <img src="html/images/loading.gif" alt="" />
        <div v-if="grocer" style="margin-top:100px">
          <center><a @click="goto('transfer')" style="color:white;font-size: 20px;">ENTREGAR CARGA</a> </center>
          <br />
          <center><a @click="goto('reception')" style="color:white;font-size: 20px;">RECIBIR CARGA</a> </center>
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
  import { getOrder, getCounters, getAddressType } from '../vuex/getters'
  import { storeData } from '../vuex/actions'

  const ORDER_URL = urls.micro_api + '/order'

  export default {
    name: 'StandBy',
    components: {
      HeaderUserData
    },
    data: function () {
      return {
        grocer:false
      }
    },
    vuex: {
      getters: {
        order: getOrder,
        counters: getCounters,
        addressType: getAddressType
      },
      actions: {
        storeData: storeData
      }
    },
    ready() {
      console.info( 'StandBy is ready ===================================' );
      var setup = ls.get( 'setup' )
      this.grocer = setup.grocer
    },
    methods: {
      goto(address_type) {

        var order_id_input = prompt('Ingrese ID orden:', this.order && this.order.id > 0 ? this.order.id : '')
       if (!order_id_input || !$.isNumeric( order_id_input )) {
        return
      }

      this.$http.get( ORDER_URL + '/' + order_id_input + '/grocer-publish').then( ( response ) => {
        console.info( response, 'success callback' )

        if (!response.data || ! response.data.order) {
          return alert('Orden no existe')
        }

        var order = response.data.order
        console.info(order);

        if (order.commercial_status_id != 4) {
          return alert('La orden no está en estado de transporte')
        }

        this.storeData( {
          type: 'order',
          content: order
        } )

        this.storeData( {
          type: 'addressType',
          content: address_type
        } )


        // ls.save( 'order_id', order_id_input )
        // ls.save( 'address_type', address_type )

        this.$route.router.go( '/event-' + address_type )


      }, ( response ) => {
        console.info( response, 'error callback' )

        var data = response.data
        if (data.status_code && data.status_code == 404) {
          alert('Orden no existe')
        }
      } )
    }
  }
}
</script>
