<template>
  <div class="ac25-top-bar ac25-border-bottom">
   <div class="container">
    <span class="left" v-if="!user.authenticated">Aplicación no disponible hasta autorizar usuario</span>
    <span class="left" v-if="user.authenticated">OPERADOR: {{user.profile.name}}</span>          
    <span class="right">VER: 0.1</span>
  </div><!-- end .container -->
</div><!-- end .top-bar -->
</template>

<script>
  import director from '../../services/director'
  import { pubnub } from '../../libs/global'

  export default {

    name: 'HeaderUserData',

  // props: {
  //   comment: Object
  // },

  data() {
    return {
      user: director.user
    }
  },

  methods: {

    logout() {
      director.logout()
    }
  },

  created() {  },

  ready(){  }  
}
</script>