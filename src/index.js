import Vue from 'vue'
import App from './components/App.vue'
import StandBy from './components/StandBy.vue'
import StandByGrocer from './components/StandByGrocer.vue'
import Setup from './components/Setup.vue'
import IframeExternal from './components/IframeExternal.vue'

import EventPickup from './components/EventPickup.vue'
import EventDelivery from './components/EventDelivery.vue'
import LoadVehicle from './components/LoadVehicle.vue'

import HubReception from './components/HubReception.vue'
import HubTransfer from './components/HubTransfer.vue'
import TripReception from './components/TripReception.vue'
import TripTransfer from './components/TripTransfer.vue'

import Print from './components/Print.vue'
import Scan from './components/Scan.vue'
import PrintTrip from './components/PrintTrip.vue'
import ScanTrip from './components/ScanTrip.vue'

import Payment from './components/Payment.vue'
import Call from './components/Call.vue'
import Logout from './components/Logout.vue'
import Redirecting from './components/Redirecting.vue'
import Available from './components/Available.vue'

import ScanSuccesful from './components/Partials/ScanSuccesful.vue'
import ScanFailed from './components/Partials/ScanFailed.vue'
import ScanFinished from './components/Partials/ScanFinished.vue'

import ScanSuccesfulTrip from './components/Partials/ScanSuccesfulTrip.vue'
import ScanFailedTrip from './components/Partials/ScanFailedTrip.vue'
import ScanFinishedTrip from './components/Partials/ScanFinishedTrip.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.config.debug = true

Vue.use( VueResource )
Vue.use( VueRouter )

import director from './services/director'

export var router = new VueRouter()

router.map( {
  '/scan-succesful': {
    component: ScanSuccesful
  },
  '/scan-failed': {
    component: ScanFailed
  },
  '/scan-finished': {
    component: ScanFinished
  },

  '/scan-succesful-trip': {
    component: ScanSuccesfulTrip
  },
  '/scan-failed-trip': {
    component: ScanFailedTrip
  },
  '/scan-finished-trip': {
    component: ScanFinishedTrip
  },

  '/iframe-external/:url': {
    component: IframeExternal
  },
  '/setup': {
    component: Setup
  },

  '/trip-reception': {
    component: TripReception
  },
  '/trip-transfer': {
    component: TripTransfer
  },

  '/stand-by': {
    component: StandBy
  },
  '/stand-by-grocer': {
    component: StandByGrocer
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
  '/event-reception': {
    component: HubReception
  },
  '/event-transfer': {
    component: HubTransfer
  },

  '/print': {
    component: Print
  },
  '/scan': {
    component: Scan
  },
  '/print-trip': {
    component: PrintTrip
  },
  '/scan-trip': {
    component: ScanTrip
  },

  '/payment': {
    component: Payment
  },
  '/call': {
    component: Call
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
  '*': {
    component: Available
  }
} )

console.info( 'DIRECTOR.INIT....' );
director.init()

console.info( 'START APP....' );
router.start( App, '#app' )
