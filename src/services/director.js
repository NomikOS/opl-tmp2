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
  //  fixPaths() {
  //   if ( !utils.inDev() ) {
  //     $( 'img' ).each( function() {
  //       var src = $( this ).attr( 'src' )

  //       console.info(src, 'first images sources');

  //       if ( src.substr(0,  1 ) === '/' ) {
  //         src = src.substr( 1, src.length );
  //       }
  //       console.info(src, 'after images sources');

  //       $( this ).attr( 'src', src );
  //     } );
  //   }
  // },

  init() {

    // this.fixPaths()
    // 
    // 
    // 
    // 
    // 
    var access_token = ls.get( 'access_token' )

    console.info(access_token, 'access_token');

    /**
     * Access token is needed
     */
     if ( access_token ) {

      var setup = ls.get( 'setup' )

      console.info(setup, 'setup');

      /**
       * Setup is needed
       */
       if ( setup ) {

       } else {

        console.info( 'going to setup' );
        return router.go( '/setup' )
      }

      this.user.authenticated = true

      var profile = ls.get( 'profile' )
      if ( profile ) {
        this.user.profile = profile
      }

      /**
       *   initPubnub
       */
      // this.initPubnub()

    } else {

      this.user.authenticated = false
        // this.goPassport()
        return router.go( '/iframe-external/go-passport' )
        // 
        // 
        // 

      }
    },


  /**
   * Save access_token and user_id returned by passport website
   * Ex: http://localhost:8080/#!/logged-in/?token=6BIxefKZa8WWMmigflo6aexeUDRL1mwej7Du4j4X&uid=5
   */
   loggedIn( context ) {
    console.info( 'loggedIn:' );

    var token = utils.getUrlVariable( 'token' );
    var uid = utils.getUrlVariable( 'uid' );

    ls.save( 'access_token', token );
    ls.save( 'user_id', uid );

    context.$http.get( PASSPORT_API_URL + '/user/' + uid + '/profile' ).then( ( response ) => {
      console.info( response, 'success callback' );

      var profile = response.data.data
      ls.save( 'profile', profile );

      // router.go( '/stand-by' )

    }, ( response ) => {
      console.info( response, 'error callback' );
    } );
  },

  goPassport() {

    console.info('aqui goPassport()');
    // $('#opl_iframe').prop('src', PASSPORT_WEBSITE_LOGIN_URL)
    // return location.href = PASSPORT_WEBSITE_LOGIN_URL;
  },

  logout() {
    ls.clean();
    return location.href = PASSPORT_WEBSITE_LOGOUT_URL;
  },

  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem( 'token' )
    }
  }
}