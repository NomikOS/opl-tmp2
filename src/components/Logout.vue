<template>
  <header-user-data></header-user-data>
  <div class="ac25-content-global">
    <div class="container">
      <div class="ac25-content-inner-holder ac25-min-height-200">
       <h4 class="ac25-top-red-text">ECONOCARGO</h4>
       <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" />
     </div><!-- end content-inner-holder -->
   </div><!-- end container -->
   <footer class="ac25-content-footer">
   <a @click="callCustomer()" class="ac25-full-red-custom waves-effect waves-light" style="padding:100px 20px">Esta seguro que desea cerrar la cerrar?</a>
    <a @click="yes()" class="ac25-half-black left waves-effect waves-light" style="border:1px solid white">sí</a>
    <a @click="no()" class="ac25-half-black left waves-effect waves-light" style="border:1px solid white">no</a>
  </footer><!-- end footer -->
</div><!-- end content-global -->  
</template>

<script>
import { router } from '../index'
import director from '../services/director'
import HeaderUserData from './Partials/HeaderUserData.vue'

export default {
  name: 'Call',
  components: {
    HeaderUserData
  },
  methods: {
    yes() {
      director.logout()
    },    
    no() {
      router.go(window.history.back())
    }
  }
}
</script>