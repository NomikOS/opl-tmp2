import utils from './utils'

export const credentials = {
  pubnub: {
    // Default app
    publishKey: 'pub-48f85fda-4cd4-4244-a338-64a38f57d72a',
    subscribeKey: 'sub-ebe72647-c6ff-11e1-a088-c910d8f0175b'
  },
  transloaditKey: '7e50e630e52111e4a764cd08714b1a46',
  googleapisKey: 'AIzaSyACdlRVSbAHDFb9uK8oEvnPzmpxh4pQ-hg',
  gcmSenderId: '377894136771',
  raygunKey: 'NjZNi9vOWBj/wRF68NnQsg==',
  logglyKey: '7c87aa29-08f3-429f-9df7-a4c224bc9114'
}

// var APP_ENV = typeof window.plugins == 'undefined' ? 'testing' : 'production'
var APP_ENV = 'production'
//
//
//
//
//
//
//
//
//
//
//
console.info(APP_ENV);

var urls2 = {}
switch ( APP_ENV ) {
  default:
  case 'production':
    urls2 = {
      app: 'https://econocargo.cl/#!',
      passport_website: 'https://passport.agente.cl/#!',
      passport_api: 'https://api.agente.cl/passport',
      econocargo_website: 'https://econocargo.cl',
      gateway_api: 'https://api.agente.cl',
      micro_api: 'https://api.agente.cl/ltl',
      public_docs: 'https://docs-econocargo.agente.cl'
    }
    break;
  case 'testing':
    urls2 = {
      app: 'https://econocargo-testing.agente.cl/#!',
      passport_website: 'https://passport-testing.agente.cl/#!',
      passport_api: 'https://api-testing.agente.cl/passport',
      econocargo_website: 'https://econocargo-testing.agente.cl',
      gateway_api: 'https://api-testing.agente.cl',
      micro_api: 'https://api-testing.agente.cl/ltl',
      public_docs: 'https://docs-econocargo.agente.cl'
    }
    break;    
}

export const urls = urls2
