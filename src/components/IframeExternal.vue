<template>
  <iframe id="opl_iframe" style="width:100%;height:100%"></iframe>
</template>

<script>
  import director from '../services/director'
  import { urls } from '../libs/common'
  import utils from '../libs/utils'
  import ls from '../libs/ls'

  const MICRO_API_URL = urls.micro_api
  const PASSPORT_WEBSITE_LOGIN_URL = urls.passport_website + '?continue=' + urls.passport_api + '/auth/{phonegapid}/phonegap-logged-in&client_id=1e54d678ffef7a44c9ad676c9a578acc';

  export default {
    name: 'IframeExternal',
    ready() {
      console.info( 'IframeExternal is ready ===================================' );

      var url = ''
      var url_action = this.$route.params.url
      var phonegapid = ls.get( 'phonegapid')

      switch ( url_action ) {
        case 'go-passport':
        url = PASSPORT_WEBSITE_LOGIN_URL.replace(/{phonegapid}/, phonegapid)
        console.info(url, 'going to url, see ya');
        break;
      }

      var $opl_iframe = $( '#opl_iframe' )
      $opl_iframe.prop( 'src', url )
    }
  }
</script>
