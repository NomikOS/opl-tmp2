<template>
  <header-user-data></header-user-data>
  <div class="ac25-red-loading-section">
    <div class="container">
      <div class="ac25-loading-content">
       <h5>Autentificado</h5>
       <img src="html/images/loading.gif" />
     </div>
   </div>
 </div><!-- end red-loading-section -->
</template>

<script>
import director from '../services/director'
import HeaderUserData from './Partials/HeaderUserData.vue'

export default {
  name: 'LoggedIn',
  components: {
    HeaderUserData
  },
  ready() {
    console.info( 'LoggedIn is ready =================================== !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!' );
    director.loggedIn( this )
  }
}
</script>