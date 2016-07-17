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
      <a @click="find()" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p>find()</p>
        </div>
      </a>
    </li>
    <li>
      <a @click="print()" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p>print()</p>
        </div>
      </a>
    </li>
    <li>
      <a href="#" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p>comprobante <br/> de pago</p>
        </div>
      </a>
    </li>
    <li>
      <a href="#" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p>especial</p>
        </div>
      </a>
    </li>
    <li>
      <a onclick="window.history.back()" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p> volver </p>
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
    find() {
      cordova.plugins.zbtprinter.find( function( mac ) {
        alert( mac );
      }, function( fail ) {
        alert( fail );
      } )
    },

    print() {
      cordova.plugins.zbtprinter.print( "AC:3F:A4:56:66:EC", "! U1 setvar "
        device.languages " "
        line_print "\r\nTEXT ***Welcome to the new world order, Pak!***\r\nPRINT\r\n",
        function( success ) {
          alert( "Print ok" );
        },
        function( fail ) {
          alert( fail );
        }
      );
    },

  },

  ready() {
    console.info( 'Print is ready ===================================' );
  }
}
</script>