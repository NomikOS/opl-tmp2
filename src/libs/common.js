﻿import utils from './utils'

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

export const urls = {
  app: 'http://localhost:8080/#!',
  passport_website: 'http://passport.testing.agente.cl/login2.html',
  passport_api: 'http://passport.api.testing.agente.cl',
  micro_api: utils.inDev() ? 'http://micro.api.testing.agente.dev' : 'http://ltl-micro.api.testing.agente.cl',
}