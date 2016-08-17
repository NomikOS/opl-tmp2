export default {
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
    if ( /(localhost\:8080)/.test( location.href ) ) {
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
  getUrlVariable: function( name, theurl ) {

    var url = ''

    if ( theurl ) {
      url = theurl
    } else {
      url = window.location.href
    }

    console.info( url, 'window.location.href -------------------' );
    var results = new RegExp( '[\?&]' + name + '=([^&#]*)' ).exec( url );
    if ( !results ) {
      return '';
    }
    return results[ 1 ] || 0
  },
  randomCode: function( length ) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = '';
    for ( var i = length; i > 0; --i ) result += chars[ Math.round( Math.random() * ( chars.length - 1 ) ) ];
    return result;
  }
}
