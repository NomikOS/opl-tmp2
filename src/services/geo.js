import Vue from 'vue' // modules are singletons!!!
import {
  urls
} from '../libs/common' // import una variable
import utils from '../libs/utils' // import un objecto default
import ls from '../libs/ls'
import {
  pubnub
} from '../libs/global'

const MICRO_API_URL = urls.micro_api

export default {
  idWatch: 0,
  position: {},

  startGpsReporting() {

    if ( !navigator.geolocation ) {
      return alert( 'Geolocalización no disponible. Reinicie aplicación o informe a la central' )
    }

    var currPos = {}
    var that = this

    console.info( 'Geolocalización disponible: OK' );

    if ( this.idWatch ) {
      clearInterval( this.idWatch )
    }

    this.idWatch = setInterval( function() {
      var setup = ls.get( 'setup' )
      if ( !setup || !setup.vehicleSelected ) {
        /**
         * eventualmente vehicleSelected sera seteado
         * y en tal caso este loop ya estara corriendo
         */
        return;
      }
      var vehicleSelected = setup.vehicleSelected;

      navigator.geolocation.getCurrentPosition( function( position ) {
          currPos.latitude = position.coords.latitude
          currPos.longitude = position.coords.longitude
          console.info( 'currPos', currPos );

          /**
           * Send to backend
           */
          that.send( currPos, vehicleSelected )
        },
        function( err ) {
          console.warn( 'geolocation error (' + err.code + '): ' + err.message )
        }, {
          enableHighAccuracy: true,
          // timeout: 1000,
          // maximumAge: Infinity
        } )
    // }, 1000 * 60 * 3 ) // cada 3 minutos
    }, 1000 * 3 ) // cada 3 secs

    console.info( 'idWatch', this.idWatch );
  },

  send( currPos, vehicleSelected ) {
    var t = new Date()
    console.info( 'SENDING TO BACKEND NOW @' + t )
    Vue.http.post( MICRO_API_URL + '/vehicle/update-gps', {
      vehicle_id: vehicleSelected,
      lat: currPos.latitude,
      lon: currPos.longitude

    } ).then( ( response ) => {
      console.info( response, 'success callback' );
    }, ( response ) => {
      console.info( response.data, 'error callback' );

    } )
  }
}