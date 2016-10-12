import Vue from 'vue' // modules are singletons!!!
import { router } from '../index'
import { urls } from '../libs/common' // import una variable
import utils from '../libs/utils' // import un objecto default
import ls from '../libs/ls'

const PASSPORT_WEBSITE_LOGOUT_URL = urls.passport_website + '?action=logout';
const PASSPORT_API_URL = urls.passport_api
const GATEWAY_API_URL = urls.gateway_api
const MICRO_API_URL = urls.micro_api

export default {
  user: {
    authenticated: false,
    profile: {}
  },

  init() {

    this.user.authenticated = false
    this.user.profile = {}

    this.setPhonegapid()

    /**
     * We'll check all these data.
     * We need it for full functionality
     * ---------------------------------
     */
     var access_token = ls.get( 'access_token' )
     var user_id = ls.get( 'user_id' )
     var profile = ls.get( 'profile' )

    /**
     * Now grocer is very important
     * we needit well set it form start
     * --------------------------------
     */
     var grocer = ls.get( 'grocer' )
     ls.save( 'grocer', !!grocer )

    /**
     * Access token is needed
     */
     if ( !access_token || !user_id ) {

      console.info( 'Going to iframe-external/go-passport' );
      return router.go( '/iframe-external/go-passport' )
    }

    this.user.authenticated = true

    // Add Authorization header globally
    // to all ajax request. As when we need autheticate user
    // we go directly to passport. (not using Authorization header)
    Vue.http.headers.common[ 'Authorization' ] = this.getAuthHeader()

    /**
     * Profile is needed
     */
     if ( !profile || !profile.id ) {

      /**
       * Get profile
       */
       return this.getProfile();
     }

     this.user.profile = profile

    /**
     * Setup is needed
     */
     this.checkSetup()
   },

   setPhonegapid() {
    var phonegapid = ls.get( 'phonegapid' )

    if ( !phonegapid ) {

      var uuid = utils.randomCode( 64 )

      if ( typeof window.plugins == 'undefined' ) {
        ls.save( 'phonegapid', uuid )
        return console.info( 'Me parece que no estamos en un teléfono. Usaremos un phonegapid aleatorio' )
      }

      if ( typeof window.plugins.uniqueDeviceID == 'undefined' ) {
        ls.save( 'phonegapid', uuid )
        return console.info( 'Plugin uniqueDeviceID necesario. Usaremos un phonegapid aleatorio' )
      }

      // Recognize phone
      window.plugins.uniqueDeviceID.get( ( uuid ) => {

        // Save uuid as phonegapid
        ls.save( 'phonegapid', uuid )

      }, () => {
        return alert( 'No he podido identificar el teléfono. Reinicie aplicación o informe a la central' )
      } );
    }
  },

  checkSetup() {
    var setup = ls.get( 'setup' )
    var grocer = ls.get( 'grocer' )

    if ( grocer ) {
      return router.go( '/stand-by-grocer' )
    }

    if ( !setup || !setup.vehicleSelected ) {

      console.info( 'Going to setup' );
      return router.go( '/setup' )
    }

    return router.go( '/available' )
  },

  getProfile() {
    var user_id = ls.get( 'user_id' )

    Vue.http.get( GATEWAY_API_URL + '/passport/user/' + user_id + '/profile' ).then( ( response ) => {

      /**
       * Set and save profile
       */
       var profile = response.data.data
       ls.save( 'profile', profile )

       this.user.profile = profile

      /**
       * Setup is needed
       */
       this.checkSetup()

     }, ( response ) => {
      console.info( response, 'error callback' );
    } );
  },

  logout() {
    ls.save( 'access_token', '' );
    ls.save( 'user_id', '' );
    ls.save( 'profile', '' );

    var setup = ls.get( 'setup' )
    var grocer = ls.get( 'grocer' )

    if ( !grocer ) {

      if ( !setup || !setup.vehicleSelected ) {
        return this.$route.router.go( '/setup' )
      }

      var vehicleSelected = setup.vehicleSelected

      /**
       * Vehicle a estado = 1
       */
       Vue.http.post( MICRO_API_URL + '/vehicle/' + vehicleSelected + '/opl-logout' ).then( ( response ) => {
        var data = response.data

        if ( data.success && data.success == true ) {

          console.info( 'Going to iframe-external/go-passport AFTER LOGOUT' );
          return router.go( '/iframe-external/go-passport' )
        }

      }, ( response ) => {
          console.info( 'Going to iframe-external/go-passport AFTER LOGOUT failed' );
          return router.go( '/iframe-external/go-passport' )

      } )

     } else {

      console.info( 'Going to iframe-external/go-passport AFTER LOGOUT' );
      return router.go( '/iframe-external/go-passport' )
    }
  },

  getAuthHeader() {
    var access_token = ls.get( 'access_token' )
    if ( access_token ) {
      return 'Bearer ' + access_token
    }
  }
}
