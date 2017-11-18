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
    var that = this

    $( '#ec_choose_transfer_camera' ).on( 'click', function() {
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
    var that = this
    var params = {}

    $( '#ec_receipt_upload_buttons' ).hide()
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
    }

    params.params = paramsVariable
    options.params = params

    ft.upload( imageURI, encodeURI( url ), function( r ) {
      var assembly = JSON.parse( r.response )
      that.weCool( assembly )
    }, function( error ) {
      $( '#ec_choose_loading' ).hide()
      $( '#ec_receipt_upload_buttons' ).show()
      console.info( error )
    }, options );
  },

  weCool( assembly ) {
    $( '#ec_choose_loading' ).hide()
    $( '#ec_receipt_upload_buttons' ).show()
    var that = this

    try {

      if ( typeof assembly.uploads === 'undefined' ) {
        throw ( new Error( 'Image url missing from Transloadit' ) );
      }

      var receiptUrl = assembly.uploads[ 0 ].url;
      console.info( 'receiptUrl', receiptUrl )
      $( '#ingreso_pago_voucher_url' ).val( receiptUrl )
      $( '#ec_choose_transfer_verify' ).show()
    } catch ( e ) {
      return alert( e.message, 'No se ha podido enviar pago' );
    }
  },

  verifyVoucher() {
    var that = this
    var receiptUrl = $( '#ingreso_pago_voucher_url' ).val()
    $( '#ec_choose_image_verify' ).show();
    $( '#ec_image_verify_img' ).css( 'padding', '5px' );
    $( '#ec_image_verify_img' ).html( '' ).append( $( '<img>', {
      src: receiptUrl,
      height: '100%'
    } ) );
    $( '#ec_image_verify_button' ).click( function() {
      $( '#ec_choose_image_verify' ).hide();
    } )
  },

  processForm( order_id ) {

    /** Some validation */
    var errors = [];
    var form = {};
    form.order_id = order_id

    form.payment_gateway = $( 'input[name="ingreso_payment_gateway"]:checked' ).val()
    form.voucher_url = $( '#ingreso_pago_voucher_url' ).val()
    form.amount = $( '#ingreso_pago_amount' ).val()
    form.authorization_code = $( '#ingreso_pago_authorization_code' ).val()

    if ( !form.payment_gateway ) {
      errors.push( 'Ingrese tipo de pago' );
    }
    if ( form.amount === '' || $.isNumeric( form.amount ) === false ) {
      errors.push( 'Ingrese un Monto numérico' );
    }
    if ( form.authorization_code === '' || $.isNumeric( form.authorization_code ) === false ) {
      errors.push( 'Ingrese un Código de autorización numérico' );
    }
    if ( !form.voucher_url ) {
      errors.push( 'Ingrese Voucher' );
    }

    console.info( 'datos de pago:', form );
    if ( errors.length ) {
      alert( "Por favor:\n" + errors.join( "\n" ) );
      return;
    }

    this.send( form )
  },

  send( form ) {
    $( '#ec_receipt_upload_buttons' ).hide()
    $( '#ec_choose_loading' ).show();
    Vue.http.post( MICRO_API_URL + '/payment/mobile-store', {
      order_id: form.order_id,
      amount: form.amount,
      payment_gateway: form.payment_gateway,
      payment_type: 'opl',
      authorization_code: form.authorization_code,
      voucher_url: form.voucher_url
    } ).then( ( response ) => {
      $( '#ec_receipt_upload_buttons' ).show()
      $( '#ec_choose_loading' ).hide();
      $( '#ec_choose_transfer_verify' ).hide()

      if ( !response.data || !response.data.success ) {
        alert( 'Pago no procesado' )
      }
    }, ( response ) => {
      $( '#ec_receipt_upload_buttons' ).show()
      $( '#ec_choose_loading' ).hide();

      alert( 'Pago no procesado' )
    } )
  }
}