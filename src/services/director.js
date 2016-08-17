import Vue from 'vue' // modules are singletons!!!
import { router } from '../index'
import { urls } from '../libs/common' // import una variable
import utils from '../libs/utils' // import un objecto default
import ls from '../libs/ls'

const PASSPORT_WEBSITE_LOGOUT_URL = urls.passport_website + '?action=logout';
const PASSPORT_API_URL = urls.passport_api
const GATEWAY_API_URL = urls.gateway_api

export default {
  user: {
    authenticated: false,
    profile: {}
  },

  init() {

    this.user.authenticated = false
    this.user.profile = {}

    /**
     * We'll check all these data.
     * We need it for full functionality
     * ---------------------------------
     */
    var access_token = ls.get( 'access_token' )
    var user_id = ls.get( 'user_id' )
    var profile = ls.get( 'profile' )

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

  checkSetup() {
    var setup = ls.get( 'setup' )

    if ( !setup || !setup.vehicleSelected ) {

      console.info( 'Going to setup' );
      return router.go( '/setup' )
    }

    // return router.go( '/available' )
    // invalida relaods
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

    console.info( 'Going to iframe-external/go-passport after logout' );
    return router.go( '/iframe-external/go-passport' )
  },

  // The object to be passed as a header for authenticated requests
  // Not good place to check for existence of access_token
  // as here we just return a string
  getAuthHeader() {
    var access_token = ls.get( 'access_token' )
    return 'Bearer ' + access_token
  }


}
