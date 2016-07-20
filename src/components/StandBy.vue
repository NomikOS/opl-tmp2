<template>
  <header-user-data></header-user-data>
  <div class="ac25-red-loading-section">
    <div class="container">
      <div class="ac25-loading-content">
        <h5>Esperando Evento...</h5>
        <img src="html/images/loading.gif" alt="" />
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

  export default {
    name: 'StandBy',
    components: {
      HeaderUserData
    },
    ready() {
      console.info( 'StandBy is ready ===================================' );
    },  
    destroyed() {
      console.info( 'StandBy is destroyed ===================================' );
    }
  }
</script>