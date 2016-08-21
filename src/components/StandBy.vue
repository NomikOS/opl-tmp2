<template>
  <header-user-data></header-user-data>
  <div class="ac25-red-loading-section">
    <div class="container">
      <div class="ac25-loading-content">
        <h5>Esperando Evento...</h5>
        <img src="html/images/loading.gif" alt="" />
    <div v-if="grocer" style="margin-top:200px">
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
  import ls from '../libs/ls'

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
    ready() {
      console.info( 'StandBy is ready ===================================' );
      var setup = ls.get( 'setup' )
      this.grocer = setup.grocer
    },
    methods: {
      goto(address_type) {

       var order_id_input = prompt("Ingrese orden", "");
       if (!order_id_input || !$.isNumeric( order_id_input )) {
        return
      }

      ls.save( 'order_id', order_id_input )
      ls.save( 'address_type', address_type )

      this.$route.router.go( '/event-' + address_type )
    }
  }
}
</script>
