import Vue from 'vue'
import App from './components/App.vue'
import StandBy from './components/StandBy.vue'
import Setup from './components/Setup.vue'
import EventPickup from './components/EventPickup.vue'
import EventDelivery from './components/EventDelivery.vue'
import LoadVehicle from './components/LoadVehicle.vue'
import HubReception from './components/HubReception.vue'
import HubTransfer from './components/HubTransfer.vue'
import Print from './components/Print.vue'
import Scan from './components/Scan.vue'
import Payment from './components/Payment.vue'
import Call from './components/Call.vue'
import Logout from './components/Logout.vue'
import LoggedIn from './components/LoggedIn.vue'
import Redirecting from './components/Redirecting.vue'
import Available from './components/Available.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.config.debug = true

Vue.use( VueResource )
Vue.use( VueRouter )

import director from './services/director'

export var router = new VueRouter()

router.map( {
  '/setup': {
    component: Setup
  },
  '/stand-by': {
    component: StandBy
  },
  '/event-pickup': {
    component: EventPickup
  },
  '/event-delivery': {
    component: EventDelivery
  },
  '/load-vehicle': {
    component: LoadVehicle
  },
  '/hub-reception': {
    component: HubReception
  },
  '/hub-transfer': {
    component: HubTransfer
  },
  '/print': {
    component: Print
  },
  '/scan': {
    component: Scan
  },
  '/payment': {
    component: Payment
  },
  '/call': {
    component: Call
  },
  '/logged-in': {
    component: LoggedIn
  },
  '/redirecting': {
    component: Redirecting
  },
  '/logout': {
    component: Logout
  },
  '/available': {
    component: Available
  },
  // '*': {
  //   component: {
  //     template: '<div>' +
  //       '<center><p>Ruta no existe, Deje el trago.</p></center>' +
  //       '</div>'
  //   }
  '*': {
    component: EventPickup
  }
} )

router.start( App, '#app' )

// console.info('Vue.http.interceptors.push< ------------------');
// Vue.http.interceptors.push((request, next) => {

//     // modify request
//     request.method = 'POST';

//     // continue to next interceptor
//     next();
// });

/**
 * Set Authorization token
 */
import ls from './libs/ls'

// Vue.http.interceptors.push( {

//   request: function( request ) {

//     var access_token = ls.get( 'access_token' )    
//     console.info(access_token, 'access_token inside interceptor');

//     request.headers[ 'Authorization' ] = 'Bearer: ' + access_token
//     // request.headers[ 'Accept' ] = 'application/vnd.mob.v1+json'
//     // request.emulateJSON = true;
//     return request
//   },

//   response: function( response ) {

//     if ( response.headers( 'Auth-Token' ) ) {
//       auth.actions.setToken( response.headers( 'Auth-Token' ) );
//     }

//     if ( response.status == 500 ) {

//       if ( response.data.message == 'Token has expired, but is still valid.' ) {
//         console.log( 'RETRY', response );
//       } else {
//         alert( 'Whoops, an unknown error occured.' );
//       }

//     }

//     return response;
//   }

// } );

director.init()