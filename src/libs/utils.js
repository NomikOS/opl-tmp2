﻿export default {
	objBtn: function( type ) {
		appECBase.loadingPage( false );
		$( '#landingErrorGeofencePickUp' ).hide();
		$( '#landingErrorGeofenceDropOff' ).hide();
		$( '#landingErrorGeofence' + type ).show();
		return $( "#microModalErrorGeoFEcnce" ).modal( "show" );
	},
	showMessages: function( user_messages ) {
		var msgErr = '';
		$.each( user_messages, function( k, v ) {
			msgErr += v + '<br />';
		} );
		return appECBase.showModal( msgErr );
	},
	showModal: function( msg, $srcObject ) {
		appECBase.loadingPage( false );
		appUtilidades.creamodal( 'modalErrorGeo', '', 'Información', msg, '', null, function() {
			if ( $srcObject ) {
				$srcObject.focus();
			}
		} );
	},
	showModalCoolTitle: function( idModal, title, cb ) {
		appECBase.loadingPage( false );
		var msg = '<div class="text-center" style="height: 185px; margin-top: 50px;">' +
			'<img src="assets/img/circle-loading.gif" style="height: 80%;">' +
			'</div>';
		appUtilidades.creamodal( idModal, '', title, msg, ' ', cb );
	},
	getUrl: function() {
		var urlTemplate = 'ltl-micro.api.testing.agente.cl';
		if ( /(agente\.dev)/.test( location.href ) ) {
			urlTemplate = 'micro.api.testing.agente.dev';
		}
		return urlTemplate;
	},

	inDev: function() {
		if ( /(agente\.dev)/.test( location.href ) ) {
			return true;
		}
		return false;
	},
	getDistance: function( lat1, lon1, lat2, lon2, unit ) {
		var radlat1 = Math.PI * lat1 / 180
		var radlat2 = Math.PI * lat2 / 180
		var radlon1 = Math.PI * lon1 / 180
		var radlon2 = Math.PI * lon2 / 180
		var theta = lon1 - lon2
		var radtheta = Math.PI * theta / 180
		var dist = Math.sin( radlat1 ) * Math.sin( radlat2 ) + Math.cos( radlat1 ) * Math.cos( radlat2 ) * Math.cos( radtheta );
		dist = Math.acos( dist )
		dist = dist * 180 / Math.PI
		dist = dist * 60 * 1.1515
		if ( unit == "K" ) {
			dist = dist * 1.609344
		}
		if ( unit == "N" ) {
			dist = dist * 0.8684
		}
		return dist
	},
	getUrlVariable: function( name ) {
		console.info(window.location.href, 'window.location.href -------------------');
		var results = new RegExp( '[\?&]' + name + '=([^&#]*)' ).exec( window.location.href );
		if (!results) {
			return '';
		}
		return results[ 1 ] || 0;

		// var query = window.location.search.substring( 1 );
		// var vars = query.split( "&" );
		// for ( var i = 0; i < vars.length; i++ ) {
		// 	var pair = vars[ i ].split( "=" );
		// 	if ( pair[ 0 ] == variable ) {
		// 		return pair[ 1 ];
		// 	}
		// }
		// return ( false );
	}
}