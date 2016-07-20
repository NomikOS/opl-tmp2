<template>
  <header-user-data></header-user-data>
  <div class="ac25-red-loading-section">
    <div class="container">
      <div class="ac25-loading-content">
       <h5>Redireccionando</h5>
       <img src="/html/images/loading.gif" />
     </div>
   </div>
 </div><!-- end red-loading-section -->
</template>

<script>
import director from '../services/director'
import HeaderUserData from './Partials/HeaderUserData.vue'

// moder a service?
// 
// 
// 
// 

export default {
  name: 'Redirecting',
  components: {
    HeaderUserData
  },
  ready() {
    console.info(this.$route);
    // window.setTimeout(function(){
    //   this.$route.router.go( '/stand-by' )
    // }, 1000)
    
  }
}
</script>