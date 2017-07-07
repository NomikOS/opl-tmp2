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
    position: {

    },

    startGpsReporting() {

        if ( !navigator.geolocation ) {
            return alert( 'Geolocalización no disponible. Reinicie aplicación o informe a la central' )
        }

        var currPos = {}
        var lastPos = {}
        var that = this

        lastPos.latitude = 0
        lastPos.longitude = 0

        console.info('Geolocalización disponible.');

        setInterval( function() {
            navigator.geolocation.getCurrentPosition( function( position ) {
                    currPos.latitude = position.coords.latitude
                    currPos.longitude = position.coords.longitude
                    console.info('currPos', currPos);

                    var d = utils.getDistance( lastPos.latitude, lastPos.longitude, currPos.latitude, currPos.longitude, 'K' )
                    var meters = ( d - 0.01 ) * 1000

                    console.info('meters:', meters);

                    if ( meters > 100 ) {
                        var t = new Date()
                        console.info( 'SENDING TO BACKEND @' + t )

                        that.send( currPos )

                        lastPos.latitude = currPos.latitude
                        lastPos.longitude = currPos.longitude
                        console.info('lastPos:', lastPos);
                    }
                },
                function( err ) {
                    console.warn( 'geolocation error (' + err.code + '): ' + err.message )
                }, {
                    enableHighAccuracy: true,
                    // timeout: 1000,
                    // maximumAge: Infinity
                } )
        }, 3000 ) //cada 3 minutos
    },

    send( currPos ) {
        var vehicleSelected = setup.vehicleSelected;
        Vue.http.post( MICRO_API_URL + '/vehicle/', {
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