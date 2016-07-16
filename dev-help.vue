 <script type="text/javascript">
 import HeaderUserData from './Partials/HeaderUserData.vue'
 onclick="window.history.back()"
 https://forum.vuejs.org/topic/442/vue-router-redirect-back/2

  '/stand-by': {
    component: StandBy
    // component: LoggedIn esto prueba que  LoggedIn ready se corre cada vez que llamo el compo
  },

   '/logged-in': {
    // component: auth.loggedIn // no es un compoenente! por eso no importa routes o this.user is not defined en auth
    component: LoggedIn
  },

  // '/item/:id': {
  //   component: ItemView
  // }   




  /**
   *
   * // src/components/Login.vue
   * 
    import auth from '../auth'
    export default {
      data() {
        return {
          // We need to initialize the component with any
          // properties that will be used in it


          credentials: {
            username: '',
            password: ''
          },
          error: ''
        }
      },

      methods: {
        submit() {
          var credentials = {
            username: this.credentials.username,
            password: this.credentials.password
          }
          // We need to pass the component's this context
          // to properly make use of http in the auth service
          auth.login(this, credentials, 'secretquote')
        }
      }

   */
  
  init() {
    // console.info( 'init:' );
    // console.info( this.user, 'this.user <------------------------' );
    var access_token = ls.get( 'access_token' )
      // console.info( access_token, 'access_token ************************' );
    if ( access_token ) {
      this.user.authenticated = true

      var profile = ls.get( 'profile' )
      // console.info(profile, 'profile');
      // console.info(profile.name);
      if ( profile ) {
        this.user.profile = profile
      }

    } else {
      this.user.authenticated = false
      this.goPassport()
    }
  },
  


  /**
  _.warn('The `success` method has been deprecated. Use the `then` method instead.');
  _.warn('The `error` method has been deprecated. Use the `catch` method instead.');
  _.warn('The `always` method has been deprecated. Use the `finally` method instead.');
   */  

</script>