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
      <a @click="print2()" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
        <input type="text" id="setzpl">
          <p>print2()</p>
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
      var mac = 'AC:3F:A4:56:66:EC';
      var text = ''

      // text = '! U1 setvar "device.languages" "zpl"\r\nline_print "\r\nTEXT ***Welcome to the new world order, Pak!***\r\nPRINT\r\n"'
      // text = '"\r\nTEXT ***Welcome to the new world order, Pak!***\r\nPRINT\r\n"'
      // text = '"^XA^FO10,10^AFN,26,13^Welcome to the new world order, Pak!^FS^XZ"'
      // 
      // cordova.plugins.zbtprinter.print("AC:3F:A4:1D:7A:5C", "! U1 setvar "device.languages" "line_print"\r\nTEXT ***Print test***\r\nPRINT\r\n",
       text = '! U1 setvar "device.languages" "zpl"\r\nTEXT ***Welcome to the new world order, Pak!***\r\nPRINT\r\n'
      cordova.plugins.zbtprinter.print( mac, text,
        function( success ) {
          alert( "Print ok?" );
        },
        function( fail ) {
          alert( fail );
        });
    },
    print2() {
      var mac = 'AC:3F:A4:56:66:EC';
      var text = ''

      // text = '! U1 setvar "device.languages" "zpl"\r\nline_print "\r\nTEXT ***Welcome to the new world order, Pak!***\r\nPRINT\r\n"'
      // text = '"\r\nTEXT ***Welcome to the new world order, Pak!***\r\nPRINT\r\n"'
      // text = '"^XA^FO10,10^AFN,26,13^Welcome to the new world order, Pak!^FS^XZ"'
      // 
      // cordova.plugins.zbtprinter.print("AC:3F:A4:1D:7A:5C", "! U1 setvar "device.languages" "line_print"\r\nTEXT ***Print test***\r\nPRINT\r\n",
       text = '! U1 setvar "device.languages" "hybrid_xml_zpl"\r\nTEXT ***Welcome to the new world order, Pak!***\r\nPRINT\r\n'
      cordova.plugins.zbtprinter.print( mac, text,
        function( success ) {
          alert( "Print ok2?" );
        },
        function( fail ) {
          alert( fail );
        });
    },

  },

  ready() {
    console.info( 'Print is ready ===================================' );
  }
}
</script>