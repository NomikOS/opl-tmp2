<template>
  <div class="ac25-top-bar ac25-border-bottom">
   <div class="container">
    <!-- <span class="left" v-if="!user.authenticated">Aplicación no disponible hasta autorizar usuario</span> -->
    <!-- <span class="left" v-if="user.authenticated">OPERADOR: {{user.profile.name}}</span> -->
    <span class="left" v-if="user.profile.name">OPERADOR: {{user.profile.name}}</span>
    <span class="right">VER: 0.7</span>
    <span class="right"><a v-link="'available'" style="color:white">PING</a> &nbsp; | &nbsp; </span>
    <span class="right"><a v-link="'setup'" style="color:white">SETUP</a> &nbsp; | &nbsp; </span>
    <span class="right"><a @click="reset()" style="color:white" v-if="false">RESET</a> &nbsp; | &nbsp; </span>
  </div><!-- end .container -->
</div><!-- end .top-bar -->
</template>

<script>
  import director from '../../services/director'
  import { pubnub } from '../../libs/global'
  import { resetData } from '../../vuex/actions'
  import ls from '../../libs/ls'

  export default {
    name: 'HeaderUserData',
    data() {
      return {
        user: director.user
      }
    },
    vuex: {
      actions: {
        resetData: resetData
      },
    },
    methods: {
      logout() {
        director.logout()
      },
      reset() {
        return
        
        this.resetData()

        /**
         * safeguards
         */
         ls.save( 'order_id', 0 );
         ls.save( 'address_type', '' )

        this.$route.router.go( '/available' )
      }      
    }
  }
</script>

<style type="text/css">
  .container span {
    font-size: 1.2em;
  }
</style>
