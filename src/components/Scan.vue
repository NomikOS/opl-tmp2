<template>
  <header-user-data></header-user-data>
  <modal-wait></modal-wait>

  <div class="ac25-content-global">
    <div class="ac25-content-inner-holder ac25-ptop15 ac25-no-padding-left ac25-no-padding-right">
      <ul class="ac25-scan-list">
        <li>
          <a class="waves-effect waves-light">
            <div class="ac25-scan-list-content">
              <img class="ac25-scanlist-scan-code" src="/html/images/barcode-big-2.png" />
              <div class="clearfix"></div>
              <span class="ac25-scanlist-scan-text">escanear</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="ac25-scan-list-content">
              <span class="ac25-sclanlist-scan-id">id {{item.id}}</span>
            </div>
          </a>
        </li>
      </ul><!-- end scan-list -->
      <div class="container">
        <p class="ac25-mid-page-paragraph">{{item.name}}</p>
      </div>
    </div><!-- end content-inner-holder -->
    <footer class="ac25-newfoot ac25-height-auto">
      <a @click="scan()" class="ac25-full-red-custom waves-effect waves-light" style="padding:100px 0">escanear item</a>
      <a onclick="window.history.back()" class="ac25-full-black waves-effect waves-light">volver</a>
    </footer><!-- end footer -->

  </div><!-- end content-global -->
</template>

<script>
  import HeaderUserData from './Partials/HeaderUserData.vue'
  import ModalWait from './Partials/ModalWait.vue'
  import { urls } from '../libs/common'
  import { showModal } from '../vuex/actions'

  const ORDER_URL = urls.micro_api + '/order'

  export default {
    name: 'Scan',
    components: {
      HeaderUserData,
      ModalWait,
    },
    vuex: {
      actions: {
        showModal: showModal
      }
    },    

    data() {
      return {
        item: [],
        qr_id: 0
      }
    },
    methods: {
      scan() {
        var that= this
        cordova.plugins.barcodeScanner.scan(
          function (result) {
            console.info("RESULT\n" +
              "Result: " + result.text + "\n" +
              "Format: " + result.format + "\n" +
              "Cancelled: " + result.cancelled)
            that.qr_id = result.text
            that.updateItem()
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
      requestItem() {
        var order_id = 137
        var item_id = 0
        var qr_id = 0

        this.showModal(true)
        this.$http.post( ORDER_URL + '/scan-item', {
          order_id : order_id,
          item_id : item_id,
          qr_id : qr_id
        } ).then( ( response ) => {
          console.info( response, 'success callback' );
          this.showModal(false)
          var item = response.data.item
          if (item.length) {
            this.item = item
          }
        }, ( response ) => {
          console.info( response, 'error callback' );
          this.showModal(false)
        } );
      },
      updateItem() {
        console.info('updateItem()...');
        var order_id = 137
        var item_id = this.item.id
        var qr_id = this.qr_id

        this.showModal(true)
        this.$http.post( ORDER_URL + '/scan-item', {
          order_id : order_id,
          item_id : item_id,
          qr_id : qr_id
        } ).then( ( response ) => {
          console.info( response, 'success callback' );
          this.showModal(false)

          this.requestItem()

          var user_message = response.data.user_message
          if (user_message.length) {
            alert(user_message)
          }
        }, ( response ) => {
          console.info( response, 'error callback' );
          this.showModal(false)
        } );
      }
    },
    ready() {
      console.info( 'Scan is ready ===================================' );
      this.requestItem()
    }
  }
</script>