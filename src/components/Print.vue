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
      <a @click="print('internal_order')" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p>orden interna</p>
        </div>
      </a>
    </li>
    <li>
      <a @click="print('customer_order')" class="waves-effect waves-light">
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
      var mac = 'AC:3F:A4:56:66:EC';
      var text = ''

      // text = '! U1 setvar "device.languages" "zpl"\r\nline_print "\r\nTEXT ***Welcome to the new world order, Pak!***\r\nPRINT\r\n"'
      // text = '"\r\nTEXT ***Welcome to the new world order, Pak!***\r\nPRINT\r\n"'
      // text = '"^XA^FO10,10^AFN,26,13^Welcome to the new world order, Pak!^FS^XZ"'
      // 
      // cordova.plugins.zbtprinter.print("AC:3F:A4:1D:7A:5C", "! U1 setvar "device.languages" "line_print"\r\nTEXT ***Print test***\r\nPRINT\r\n",
      // text = '! U1 setvar "device.languages" "zpl" TEXT ***Welcome to the new world order, Pak!***\r\nPRINT\r\n'
      
      // https://km.zebra.com/kb/index?page=content&id=SA315&actp=RSS codigos de barra
      text = '^XA^FO10,10^AFN,26,13^FDWelcome to the new world order, Pak!^FS^XZ' // ok

      var text = ''
      text =  "^XA";
      text += "^FO20,30^GB750,1100,4^FS";
      text += "^FO20,30^GB750,200,4^FS";
      text += "^FO20,30^GB750,400,4^FS";
      text += "^FO20,30^GB750,700,4^FS";
      text += "^FO20,226^GB325,204,4^FS";
      text += "^FO30,40^ADN,36,20^FDShip to:^FS";
      text += "^FO30,260^ADN,18,10^FDPart number #^FS";
      text += "^FO360,260^ADN,18,10^FDDescription:^FS";
      text += "^FO30,750^ADN,36,20^FDFrom:^FS";
      text += "^FO150,125^ADN,36,20^FDAcme Printing^FS";
      text += "^FO60,330^ADN,36,20^FD14042^FS";
      text += "^FO400,330^ADN,36,20^FDScrew^FS";
      text += "^FO70,480^BY4^B3N,,200^FD12345678^FS";
      text += "^FO150,800^ADN,36,20^FDEconocargo^FS";
      text += "^XZ";

      text = '^XA^LL400^FO10,10^AFN,26,13^FDNew world order now, 400dots^FS' // ok      
      text += '^FO400,100^BQN,2,10^FDnew world order, 400dots^FS^XZ'      

      cordova.plugins.zbtprinter.print( mac, text,
        function( success ) {
        },
        function( fail ) {
          alert( fail );
        });
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