import Vue from 'vue' // modules are singletons!!!
import { router } from '../index'
import { urls } from '../libs/common' // import una variable
import utils from '../libs/utils' // import un objecto default
import ls from '../libs/ls'

const PASSPORT_WEBSITE_LOGIN_URL = urls.passport_website + '?continue=' + urls.passport_api + '/auth/xxx123/phonegap-logged-in'
const PASSPORT_WEBSITE_LOGOUT_URL = urls.passport_website + '?action=logout';
const PASSPORT_API_URL = urls.passport_api
const SIGNUP_URL = urls.api + 'users/'

export default {
  user: {
    authenticated: false,
    profile: {}
  },

  /**
   * Chek for phone setup and user director
   * --------------------------------------
   */

   init() {

    var access_token = ls.get( 'access_token' )

    /**
     * Access token is needed
     */
     if ( access_token ) {

      var setup = ls.get( 'setup' )
      console.info('OPL setup:', setup );

      /**
       * Setup is needed
       */
       if ( setup ) {

       } else {

        console.info( 'Going to setup' );
        return router.go( '/setup' )
      }

      this.user.authenticated = true

      var profile = ls.get( 'profile' )

      if ( profile ) {
        this.user.profile = profile
      }

      return router.go( '/available' )

    } else {

      this.user.authenticated = false
      return router.go( '/iframe-external/go-passport' )
    }
  },

  logout() {
    return alert('No disponible en hito 1')
    ls.clean();
    // return location.href = PASSPORT_WEBSITE_LOGOUT_URL;
  },

  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem( 'token' )
    }
  }
}