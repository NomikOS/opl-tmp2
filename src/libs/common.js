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

// export const urls = {
//   passport_website: 'http://passport.testing.agente.cl',
//   passport_api: 'http://passport.api.testing.agente.cl',
//   gateway_api: 'http://api.testing.agente.cl',
//   micro_api: 'http://api.testing.agente.cl/ltl-micro',
// }

var APP_ENV = ( function() {
  if ( /(econocargo\-testing\.agente\.cl)/.test( location.href ) ) {
    return 'testing'
  }
  if ( /(econocargo\-staging\.agente\.cl)/.test( location.href ) ) {
    return 'staging'
  }
  if ( /(econocargo\-hotfix\.agente\.cl)/.test( location.href ) ) {
    return 'hotfix'
  }
  if ( /(econocargo\.cl)/.test( location.href ) ) {
    return 'production'
  }
} )()

var urls2 = {}
switch ( APP_ENV ) {
  case 'testing':
    urls2 = {
      passport_website: 'https://passport-testing.agente.cl/#!',
      passport_api: 'https://api-testing.agente.cl/passport',
      econocargo_website: 'https://econocargo-testing.agente.cl',
      gateway_api: 'https://api-testing.agente.cl',
      micro_api: 'https://api-testing.agente.cl/ltl',
      public_docs: 'http://docs-econocargo.agente.cl'
    }
    break;
  case 'staging':
    urls2 = {
      passport_website: 'https://passport-staging.agente.cl/#!',
      passport_api: 'https://api-staging.agente.cl/passport',
      econocargo_website: 'https://econocargo-staging.agente.cl',
      gateway_api: 'https://api-staging.agente.cl',
      micro_api: 'https://api-staging.agente.cl/ltl',
      public_docs: 'http://docs-econocargo.agente.cl'
    }
    break;
  case 'hotfix':
    urls2 = {
      passport_website: 'https://passport-hotfix.agente.cl/#!',
      passport_api: 'https://api-hotfix.agente.cl/passport',
      econocargo_website: 'https://econocargo-hotfix.agente.cl',
      gateway_api: 'https://api-hotfix.agente.cl',
      micro_api: 'https://api-hotfix.agente.cl/ltl',
      public_docs: 'http://docs-econocargo.agente.cl'
    }
    break;

  default:
  case 'production':
    urls2 = {
      app: 'https://econocargo.cl/#!',
      passport_website: 'https://passport.agente.cl/#!',
      passport_api: 'https://api.agente.cl/passport',
      econocargo_website: 'https://econocargo.cl',
      gateway_api: 'https://api.agente.cl',
      micro_api: 'https://api.agente.cl/ltl',
      public_docs: 'http://docs-econocargo.agente.cl'
    }
    break;
}

export const urls = urls2

console.info( 'APP_ENV', APP_ENV );
console.info( 'urls', urls );
