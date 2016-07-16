<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <ul class="nav navbar-nav">
        <li><a v-link="'home'">Home</a></li>
        <li><a v-link="'login'" v-if="!user.authenticated">Login</a></li>
        <li><a v-link="'signup'" v-if="!user.authenticated">Sign Up</a></li>
        <li><a v-link="'secretquote'" v-if="user.authenticated">Secret Quote</a></li>
        <li><a v-link="'login'" v-if="user.authenticated" @click="logout()">Logout</a></li>
      </ul>
    </div>    
  </nav>
      <div class="top-bar border-bottom">
      <div class="container">
        <span class="left">OPERADOR: JUAN PEREZ DEL MANZANO</span>
        <span class="right">VER: 2.45</span>
      </div><!-- end .container -->
    </div><!-- end .top-bar -->

  <div class="container">
    <router-view></router-view>
  </div>

    <footer class="dynamic-position">
      <a href="#" class="full-black waves-effect waves-light">CERRAR SESSION</a>
    </footer><!-- end footer -->
</template>

<script>
import director from '../director'

export default {
  data() {
    return {
      user: director.user
    }
  },

  methods: {

    logout() {
      director.logout()
    }
  }
}
</script>