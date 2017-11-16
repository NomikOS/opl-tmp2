import Vue from 'vue' // modules are singletons!!!
import {
  urls
} from '../libs/common' // import una variable
import {
  credentials
} from '../libs/common'
import utils from '../libs/utils' // import un objecto default
import ls from '../libs/ls'
import {
  pubnub
} from '../libs/global'

const MICRO_API_URL = urls.micro_api

export default {
  max_size: 1048576 * 10,

  init() {
    $( '#ec_choose_transfer_camera' ).show()
    // $$( 'ec_choose_transfer_retry' ).setValue( 'Subir o fotografiar de nuevo' )

    console.info( '#ec_choose_transfer_camera', $( '#ec_choose_transfer_camera' ).length )

    var that = this

    $( '#ec_choose_transfer_camera' ).on( 'click', function() {

      console.info( navigator )
      console.info( navigator.camera )
      console.info( navigator.geolocation )

      if ( typeof navigator.device === 'undefined' ) {
        return alert( 'Camera device needed', 'No hay acceso a la cámara.' )
      }
      navigator.device.capture.captureImage(
        function( mediaFiles ) {
          var photo = mediaFiles[ 0 ]
          var imageURI = photo.fullPath
          var fileName = photo.name
          that.uploadPhotoByFileTransfer( imageURI, fileName )
        },
        function( e ) {
          console.info( e )
        }, {
          limit: 1
        } )
    } );

    $( '#ec_choose_transfer_file' ).on( 'click', function() {
      if ( typeof navigator.camera === 'undefined' ) {
        return alert( 'Camera device needed', 'No hay acceso a la cámara.' )
      }
      navigator.camera.getPicture(
        function( imageURI ) {
          var fileName = imageURI.substr( imageURI.lastIndexOf( '/' ) + 1 ) + '.jpeg'
          that.uploadPhotoByFileTransfer( imageURI, fileName )
        },
        function( message ) {
          console.info( message )
        }, {
          quality: 50,
          destinationType: navigator.camera.DestinationType.FILE_URI,
          sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
        }
      )
    } )
  },

  /**
   * Using FileTransfer/Camera Phonegap API
   * https://github.com/tim-kos/transloadit_xhr/blob/master/transloadit_xhr.js
   */
  uploadPhotoByFileTransfer( imageURI, fileName ) {
    var ft = new FileTransfer();
    var options = new FileUploadOptions();
    var url = 'http://api2.transloadit.com/assemblies';

    $( '#ec_choose_loading' ).show();

    options.fileKey = 'file';
    options.fileName = fileName;
    options.mimeType = 'image/jpeg';

    var paramsVariable = {
      auth: {
        key: credentials.transloaditKey,
        max_size: this.max_size
      },
      steps: {
        thumb: {
          use: ':original',
          robot: '/image/resize',
          width: 75,
          height: 75,
          resize_strategy: 'pad',
          background: '#000000'
        },
      }
    };

    var that = this
    var params = {};
    params.params = paramsVariable;
    options.params = params;

    ft.upload( imageURI, encodeURI( url ), function( r ) {
      var assembly = JSON.parse( r.response );
      that.weCool( assembly );
    }, function( error ) {
      $( '#ec_choose_loading' ).hide();
      console.info( error );
    }, options );
  },

  weCool( assembly ) {
    console.info('assembly', assembly)

    $( '#ec_choose_loading' ).hide();

    $( '#ec_receipt_upload_buttons' ).hide();
    $( '#ec_receipt_submit_buttons' ).show();

    var that = this

    try {

      if ( typeof assembly.uploads === 'undefined' ) {
        throw ( new Error( 'Image url missing from Transloadit' ) );
      }

      var receiptUrl = assembly.uploads[ 0 ].url;
      console.info( 'receiptUrl', receiptUrl )
      // form.receiptThumbUrl = assembly.results.thumb[ 0 ].url;

      $( '#ec_choose_transfer_verify' ).off( 'click' ).on( 'click', function() {

        $( '#ec_choose_image_verify' ).show();
        $( '#ec_image_verify_img' ).css( 'padding', '5px' );
        $( '#ec_image_verify_img' ).html( '' ).append( $( '<img>', {
          src: receiptUrl,
          width: '100%'
        } ) );
        $( '#ec_image_verify_button' ).click( function() {
          $( '#ec_choose_image_verify' ).hide();
        } );

      } );

      $( '#ec_choose_transfer_submit' ).off( 'click' ).on( 'click', function() {
        that.processForm( receiptUrl );
      } );

    } catch ( e ) {
      return alert( e.message, 'No se ha podido enviar su transferencia' );
    }
  },

  processForm( receiptUrl ) {

    /** Some validation */
    var errors = [];
    var form = {};

    form.receiptUrl = receiptUrl;
    form.amount = $( '#ec_choose_transfer_amount' ).val();
    // form.bankName = $$( 'ec_choose_transfer_bankName' ).getValue();
    form.accountName = $( '#ec_choose_transfer_accountName' ).val();
    form.accountNumber = $( '#ec_choose_transfer_accountNumber' ).val();
    form.comment = $( '#ec_choose_transfer_comment' ).val();
    console.info( form );

    if ( form.amount === '' || $.isNumeric( form.amount ) === false ) {
      errors.push( 'Ingrese un Monto numérico' );
    }
    if ( form.bankName === '' ) {
      errors.push( 'Ingrese Nombre del banco' );
    }
    if ( form.bankCountry === '' ) {
      errors.push( 'Ingrese País del banco' );
    }
    if ( form.accountName === '' ) {
      errors.push( 'Ingrese Nombre de la cuenta' );
    }
    if ( form.accountNumber === '' ) {
      errors.push( 'Ingrese Número de la cuenta' );
    }
    if ( !form.receiptUrl ) {
      errors.push( 'Ingrese Comprobante de pago' );
    }

    if ( errors.length ) {
      alert( "Por favor:<br /><br />" + errors.join( "<br />" ) );
      return;
    }

    // ds.PaymentRequest.create( form, EC.person.ID, {
    //   onSuccess: function( data ) {
    //     EC.lastPayment = data.result;
    //     EC.gotoPage( 'paymentSuccess' );
    //   },
    //   onError: function( data ) {
    //     EC.gotoPage( 'paymentError' );
    //   }
    // } );
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