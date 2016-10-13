import Vue from 'vue' // modules are singletons!!!
import { urls } from '../libs/common' // import una variable
import utils from '../libs/utils' // import un objecto default
import ls from '../libs/ls'
import { pubnub } from '../libs/global'

const MICRO_API_URL = urls.micro_api
const ORDER_URL = urls.micro_api + '/order'

export default {
  position: {

  },

  start( order, addressType ) {

    if ( !navigator.geolocation ) {
      return alert( 'Geolocalización no disponible. Reinicie aplicación o informe a la central' )
    }

    var targetPos = {}
    var currPos = {}
    var that = this

    console.info( 'pickupAddress_lat', order.pickupAddress_lat );
    console.info( 'deliveryAddress_lat', order.deliveryAddress_lat );

    if ( addressType == 'pickup' ) {
      targetPos.latitude = order.pickupAddress_lat
      targetPos.longitude = order.pickupAddress_lon
    } else {
      targetPos.latitude = order.deliveryAddress_lat
      targetPos.longitude = order.deliveryAddress_lon
    }

    var idWatch = navigator.geolocation.watchPosition( function( position ) {

        currPos.latitude = position.coords.latitude
        currPos.longitude = position.coords.longitude

        console.info( targetPos.latitude, targetPos.longitude, currPos.latitude, currPos.longitude, 'K' );

        var d = utils.getDistance( targetPos.latitude, targetPos.longitude, currPos.latitude, currPos.longitude, 'K' )

        var meters = ( d - 0.01 ) * 1000
        console.info( 'Recorridos: ' + meters + ' mts.' )

        if ( meters < 100 ) {

          console.info('HELLO');
          that.helloShipment( order.id, addressType )

          // stop watch
          navigator.geolocation.clearWatch( idWatch )

        }
      },
      function( err ) {
        console.warn( 'geolocation error (' + err.code + '): ' + err.message )
      }, {
        enableHighAccuracy: true,
        // timeout: 1000,
        // maximumAge: Infinity
      } )
  },

  helloShipment( order_id, addressType ) {
    Vue.http.post( ORDER_URL + '/hello-shipment', {
      order_id: order_id,
      shipment_type: addressType,
      address_type: addressType

    } ).then( ( response ) => {
      console.info( response, 'success callback' );
    }, ( response ) => {
      console.info( response.data, 'error callback' );

    } )
  }
}
