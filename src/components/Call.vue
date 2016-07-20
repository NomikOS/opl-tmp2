<template>
  <header-user-data></header-user-data>
  <div class="ac25-content-global">
    <div class="container">
      <div class="ac25-content-inner-holder ac25-min-height-200">
       <h4 class="ac25-top-red-text">LLAMADO</h4>
       <p class="left clearfix ac25-subtitle" style="width:60%">
         Seleccione una de las opciones para iniciar un llamado telefónico.
         <br />
         <br />
         Llame a cliente sólo en caso de ser necesario.
       </p>
       <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" />
     </div><!-- end content-inner-holder -->
   </div><!-- end container -->
   <footer class="ac25-content-footer">
   <a @click="callCustomer()" class="ac25-full-red-custom waves-effect waves-light">llamar al cliente</a>
   <a @click="callCentralCustomer()" class="ac25-full-red-custom waves-effect waves-light">central llama a cliente</a>
   <a @click="callCentral()" class="ac25-full-red-custom waves-effect waves-light">llamar a la central</a>
    <a @click="callDriver()" class="ac25-full-red-custom waves-effect waves-light">llamar al chofer</a>
    <a onclick="window.history.back()" class="ac25-full-black waves-effect waves-light">terminar</a>
  </footer><!-- end footer -->
</div><!-- end content-global -->  
</template>

<script>
import HeaderUserData from './Partials/HeaderUserData.vue'

export default {
  name: 'Call',
  components: {
    HeaderUserData
  },
  methods: {
    callCustomer() {
      alert('Ring ring')
    },
    callCentralCustomer() {
      alert('Ring ring')
    },
    callCentral() {
      alert('Ring ring')
    },            
    callDriver() {
      alert('Ring ring')
    },
  },
  ready(){
    console.info('Call is ready ===================================');
  }  
}
</script>