<template>
  <header-user-data></header-user-data>
  <ul class="ac25-main-menu">
    <li>
      <a class="waves-effect waves-light">
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
  import HeaderUserData from './Partials/HeaderUserData.vue'

  const ORDER_URL = urls.micro_api + '/order'

  export default {
    name: 'Print',
    components: {
      HeaderUserData,
    },    

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
 },

 ready() {
  console.info( 'Print is ready ===================================' );
}
}
</script>