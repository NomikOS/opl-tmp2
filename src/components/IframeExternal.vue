<template>
  <iframe id="opl_iframe" style="width:100%;height:100%"></iframe>
</template>

<script>
  import director from '../services/director'
  import { urls } from '../libs/common'
  import utils from '../libs/utils'
  import ls from '../libs/ls'

  const MICRO_API_URL = urls.micro_api
  const PASSPORT_WEBSITE_LOGIN_URL = urls.passport_website + '?continue=' + urls.passport_api + '/auth/xxx123/phonegap-logged-in';

  export default {
    name: 'IframeExternal',
    components: {},
    data: function() {
      return {
        message: 'Poniendose a disposición de la central'
      }
    },
    ready() {
      console.info( 'IframeExternal is ready ===================================' );
      // this.retry();

      var url = ''
      var url_action = this.$route.params.url

      switch ( url_action ) {
        case 'go-passport':
          url = PASSPORT_WEBSITE_LOGIN_URL
          break;
      }

      console.info(PASSPORT_WEBSITE_LOGIN_URL, 'PASSPORT_WEBSITE_LOGIN_URL');

      var $opl_iframe = $( '#opl_iframe' )
      $opl_iframe.prop( 'src', url )

      // function addAnEventListener( obj, evt, func ) {
      //   if ( 'addEventListener' in obj ) {
      //     obj.addEventListener( evt, func, false );
      //   } else if ( 'attachEvent' in obj ) { //IE
      //     obj.attachEvent( 'on' + evt, func );
      //   }
      // }

      // var secondPageValue = '';
      // function iFrameListener( event ) {
      //   var secondPageValue = event.data;
      //   console.info( secondPageValue, 'secondPageValue ####################################################################' );

      //   var token = utils.getUrlVariable( 'token', secondPageValue );
      //   var uid = utils.getUrlVariable( 'uid', secondPageValue );

      //   console.info(token, '####################################################################');
      //   console.info(uid, '####################################################################');

      //   ls.save( 'access_token', token );
      //   ls.save( 'user_id', uid );


      // }

      // addAnEventListener( window, 'message', iFrameListener );

        // $opl_iframe.postMessage(myMessage.value, '*');
      // conitnue algunba vez, adios hare algo con pubnub


      //     $('#opl_iframe').on ('load', function(){            
      //       var url = $(this).get(0).contentWindow.location.href;
      //       console.info(url, 'opl_iframe url');

      //   // var appIndex = url.indexOf('/app/');
      //   // if (appIndex > -1) {
      //   //  var appURL = url.substr(appIndex+5);
      //   //  window.location.href = appURL;
      //   // }
      // });      

      // centar esto de retry para todos los ajax
    },
    methods: {
      retry: function() {

        var setup = ls.get( 'setup' )

        if ( !setup || !setup.vehicleSelected ) {
          return this.$route.router.go( '/setup' )
        }

        var vehicleSelected = setup.vehicleSelected

        this.$http.get( MICRO_API_URL + '/' + vehicleSelected + '/opl-available' ).then( ( response ) => {
          console.info( response, 'success callback' )

          var result = response.data.result
          if ( result != 'OK' ) {
            return this.retry();
          }

          this.message = 'R4'

        }, ( response ) => {
          console.info( response, 'error callback' );
        } )
      }
    }
  }
</script>