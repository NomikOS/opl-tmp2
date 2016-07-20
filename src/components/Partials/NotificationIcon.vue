<template>
<a v-if="notification" @click="popup()"><img class="" src="../html/images/info.png" /></a>
</template>

<script>
// import { pubnub } from '../../libs/global'

export default {
  name: 'NotificationIcon',
  data() {
    return {
      notification: null
    }
  },
  methods: {
    popup() {
      var comment = this.notification.comment;
      alert( comment )
    },
    update: function() {  
      this.notification = 'read shipment comment pls'
    }    
  },
  created() {
    // var that = this;
    // pubnub.subscribe( {
    //   channel: 'notifications-opl',
    //   message: function( message ) {
    //     console.info( message );
    //     that.notification = message
    //   }
    // } );
  },
  ready() {
    console.info( 'NotificationIcon is ready ===================================' );
  }
}
</script>