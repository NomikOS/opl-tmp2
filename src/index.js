import Vue from 'vue'
import App from './components/App.vue'
import StandBy from './components/StandBy.vue'
import Setup from './components/Setup.vue'
import IframeExternal from './components/IframeExternal.vue'

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
import Redirecting from './components/Redirecting.vue'
import Available from './components/Available.vue'

import ScanSuccesful from './components/Partials/ScanSuccesful.vue'
import ScanFailed from './components/Partials/ScanFailed.vue'
import ScanFinished from './components/Partials/ScanFinished.vue'

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
  '/iframe-external/:url': {
    component: IframeExternal
  },  
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

router.start( App, '#app' )
director.init()