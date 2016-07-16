import { credentials } from './common'

export const pubnub = require( 'pubnub' )( {
  publish_key: credentials.pubnub.publishKey,
  subscribe_key: credentials.pubnub.subscribeKey
} )