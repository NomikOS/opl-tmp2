<template>
  <ul class="ac25-main-menu">
    <li>
      <a href="#" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <img src="/html/images/print-big.png" alt="" />
          <p>imprimir</p>
        </div>
      </a>
    </li>
    <li>
      <a href="#" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p>factura</p>
        </div>
      </a>
    </li>
    <li>
    <a @click="print('img2')" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p>orden interna</p>
        </div>
      </a>
    </li>
    <li>
      <a @click="print('img3')" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p>orden cliente</p>
        </div>
      </a>
    </li>
    <li>
      <a @click="print('payments_history')" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p>historial de pago</p>
        </div>
      </a>
    </li>
    <li>
      <a @click="scan('special')" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p>especial</p>
        </div>
      </a>
    </li>
    <li>
      <a onclick="window.history.back()" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p>volver</p>
        </div>
      </a>
    </li>
  </ul><!-- end main-menu -->
</template>

<script>
  import { urls } from '../libs/common'
  const ORDER_URL = urls.micro_api + '/order'

  export default {

    name: 'Print',

    data() {
      return {
      // user: director.user
    }
  },

  methods: {

    // print() {
    //   cordova.plugins.zbtprinter.print("^XA^FO10,10^AFN,26,13^FDWelcome to the new world order, Pak!^FS^XZ",
    //     function(success) { 
    //       console.info("zbtprinter ok !!!!!!!!!"); 
    //     }, function(fail) { 
    //       console.info(fail, 'zbtprinter fail !!!!!!!!!'); 
    //     });
    // },
    // 
    // find() {
    //   cordova.plugins.zbtprinter.find( function( mac ) {
    //     alert( mac );
    //   }, function( fail ) {
    //     alert( fail );
    //   } )
    // },

    print(label) {
      console.info(label);

      // if ('customer_order' == label) {

      // }
      this.$http.get( ORDER_URL + '/' + label + '/opl-get-zpl' ).then( ( response ) => {
        console.info( response, 'success callback' );

        var mac = 'AC:3F:A4:56:66:EC';
        var text = response.data.text
        cordova.plugins.zbtprinter.print( mac, text,
          function( success ) {
          },
          function( fail ) {
            alert( fail );
          });

      }, ( response ) => {
        console.info( response, 'error callback' );
      } );      
    },

    scan() {
     cordova.plugins.barcodeScanner.scan(
      function (result) {
        console.info("RESULT\n" +
          "Result: " + result.text + "\n" +
          "Format: " + result.format + "\n" +
          "Cancelled: " + result.cancelled);        
        alert("ORDEN ID: " + result.text);
      }, 
      function (error) {
        alert("Scanning failed: " + error);
      },
      {
          "preferFrontCamera" : true, // iOS and Android
          "showFlipCameraButton" : true, // iOS and Android
          "prompt" : "Apuntar a codigo QR", // supported on Android only
          "formats" : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          "orientation" : "portrait" // Android only (portrait|landscape), default unset so it rotates with the device
        });
   },    

 },

 ready() {
  console.info( 'Print is ready ===================================' );
}
}
</script>