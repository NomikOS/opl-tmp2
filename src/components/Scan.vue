<template>
  <header-user-data></header-user-data>
  <modal-wait></modal-wait>

  <div class="ac25-content-global">
    <div class="ac25-content-inner-holder ac25-ptop15 ac25-no-padding-left ac25-no-padding-right">

      <div class="container">
        <table class="standard-table version2 margin-top-20">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>QR</th>
            </tr>
          </thead>
            <tr v-for="item in item_list" class="border-solid aling-bottom click" @click="scanItem(item.id)">
              <td><p class="border-red-bottom">{{ item.id }}</p></td>
              <td><p class="border-red-bottom">{{ item.name }}</p></td>
              <td><p class="border-red-bottom">{{ item.qr_id ? item.qr_id : 'NO ESCANEADO' }}</p></td>
            </tr>
        </table>

        <p class="ac25-mid-page-paragraph">{{item_name_info}}</p>
      </div>
    </div><!-- end content-inner-holder -->

    <footer class="ac25-newfoot ac25-height-auto">
      <a @click="back()" class="ac25-full-black waves-effect waves-light">volver</a>
    </footer><!-- end footer -->

  </div><!-- end content-global -->
</template>

<script>
  import HeaderUserData from './Partials/HeaderUserData.vue'
  import ModalWait from './Partials/ModalWait.vue'

  import ls from '../libs/ls'
  import { urls } from '../libs/common'
  import { showModal, storeData, setCounters } from '../vuex/actions'
  import { getOrder, getItem, getCounters, getAddressType } from '../vuex/getters'

  const ORDER_URL = urls.micro_api + '/order'
  const barcodeScannerOptions = {
    "preferFrontCamera": false, // iOS and Android
    "showFlipCameraButton": true, // iOS and Android
    "prompt": "Apuntar a codigo QR", // supported on Android only
    "formats": "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
    "orientation": "portrait" // Android only (portrait|landscape), default unset so it rotates with the device
  }

  export default {
    name: 'Scan',
    components: {
      HeaderUserData,
      ModalWait,
    },
    vuex: {
      actions: {
        showModal: showModal,
        storeData: storeData,
        setCounters: setCounters
      },
      getters: {
        order: getOrder,
        item: getItem,
        counters: getCounters,
        addressType: getAddressType
      }
    },
    data() {
      return {
        item: [],
        qr_id: 0,
        item_id_info: '',
        item_name_info: '',
        // v02
        item_list :[],
        item_id: 0
      }
    },
    methods: {

      back() {
        var addressType = ls.get( 'addressType' )

        if ( 'pickup' == this.addressType ) {
          return this.$route.router.go( '/event-pickup' )

        } if ( 'delivery' == this.addressType ) {
          return this.$route.router.go( '/event-delivery' )

        } else {
          return this.$route.router.go( '/available' )
        }
      },

      // really scan
      // -----------
      scanItem(item_id){
        var that = this

        if (typeof this.item_list[item_id] != 'undefined') {

          var item = this.item_list[item_id]
          this.item = item

          this.storeData( {
            type: 'item',
            content: item
          } )

        }
        else {
          this.item_name_info = 'No hay más items que escanear para la orden ' + this.order.special_id
          return
        }

        cordova.plugins.barcodeScanner.scan(
          function( result ) {
            console.info( "RESULT\n" +
              "Result: " + result.text + "\n" +
              "Format: " + result.format + "\n" +
              "Cancelled: " + result.cancelled )

            if (result.cancelled) {
              that.switherParseQrScanResult( 'Scan cancelled >:' )
            } else {
              that.switherParseQrScanResult( null, result, item_id )
            }
          },
          function( error ) {
            that.switherParseQrScanResult( error )

          }, barcodeScannerOptions );
      },
      scan() {
        var that = this

        cordova.plugins.barcodeScanner.scan(
          function( result ) {
            console.info( "RESULT\n" +
              "Result: " + result.text + "\n" +
              "Format: " + result.format + "\n" +
              "Cancelled: " + result.cancelled )

            if (result.cancelled) {
              that.switherParseQrScanResult( 'Scan cancelled >:' )
            } else {
              that.switherParseQrScanResult( null, result )
            }
          },
          function( error ) {
            that.switherParseQrScanResult( error )

          }, barcodeScannerOptions );
      },
      switherParseQrScanResult( error, result, item_id ) {
        if ( error ) {
          console.info( "Scanning failed: " + error );
          this.$route.router.go( '/scan-failed' )

        } else {
          var qr_id = result.text

          if (item_id) {
            this.item_id = item_id
            this.item.qr_id = qr_id
            this.qr_id = qr_id
            this.updateItem()
          } else {
            this.item.qr_id = qr_id
            this.qr_id = qr_id
            this.updateItem()
          }
        }
      },

      // get next item to scan
      // ---------------------
      requestItem() {
        var order_id = this.order.id
        var item_id = 0
        var qr_id = 0
        var addressType = this.addressType

        ModalWait.showIt( true, 'scan-item' )
        this.$http.post( ORDER_URL + '/scan-item', {
          order_id: order_id,
          item_id: item_id,
          qr_id: qr_id,
          address_type: addressType
        } ).then( ( response ) => {
          ModalWait.showIt( false )

          var data = response.data
          this.switherParseItemRequest( null, data )

        }, ( response ) => {
          ModalWait.showIt( false )

          this.switherParseItemRequest( response )
        } );
      },
      switherParseItemRequest( error, data ) {
        this.showModal( false )
        console.info( '(requestItem) data from ' + ORDER_URL + '/scan-item', data );

        if ( error ) {

          console.info( error, 'error callback' )
          this.$route.router.go( '/scan-failed' )

        } else {

          var item = data.item
          var user_messages = data.user_messages

          /**
           * update item
           * and placeholders
           */
          this.item = item // esto esta bien

          this.storeData( {
            type: 'item',
            content: item
          } )

          if ( !item.length ) {
            this.item_id_info = ''
            this.item_name_info = 'No hay más items que escanear para la orden ' + this.order.special_id
            return
          }

          if (item.qr_id && item.qr_id > 0) {
            this.item_id_info = 'item id #' + item.id + '<br />QR #' + item.qr_id
          } else {
            this.item_id_info = 'item id #' + item.id
          }

          this.item_name_info = item.name

          /**
           * all ok here, waiting for user click scan button
           */
         }
       },

      // update item in db, call api
      // --------------------------
      updateItem(item_id) {
        var order_id = this.order.id
        var qr_id = this.qr_id
        var addressType = this.addressType

        if ( ! item_id) {
          item_id = this.item.id
        }

        ModalWait.showIt( true, 'scan-item' )
        this.$http.post( ORDER_URL + '/scan-item', {
          // ------------------------------------------
          order_id: order_id,
          item_id: item_id,
          qr_id: qr_id,
          address_type: addressType

        } ).then( ( response ) => {
          ModalWait.showIt( false )

          var data = response.data
          this.switherParseItemUpdated( null, data )

        }, ( response ) => {
          ModalWait.showIt( false )

          this.switherParseItemUpdated( response )
        } );
      },
      switherParseItemUpdated( error, data ) {
        this.showModal( false )
        console.info( '(updateItem) data from ' + ORDER_URL + '/scan-item', data );

        if ( error ) {

          console.info( error, 'error callback' )
          this.$route.router.go( '/scan-failed' )

        } else {

          console.info( data, 'success callback' );

          // centralizar estos mensajes?
          var user_messages = data.user_messages
          if ( user_messages.length ) {
            alert( user_messages )
          }

          if ( data.OK ) {

            // update items to scan
            console.info( 'update items to scan < ----------------------------------------------------------------' );
            this.setCounters( {
              type: 'items_to_scan_remaining',
              content: -1
            } )

            console.info( 'counters.items_to_scan_remaining: ', this.counters.items_to_scan_remaining );

            if ( !this.counters.items_to_scan_remaining ) {
              return this.$route.router.go( '/scan-finished' )
            }
            return this.$route.router.go( '/scan-succesful' )

          } else {

            console.info( error, 'error callback' )
            this.$route.router.go( '/scan-failed' )
          }
        }
      },

      requestItemList() {
        var order_id = this.order.id
        var addressType = this.addressType

        ModalWait.showIt( true, 'scan-item' )
        this.$http.post( ORDER_URL + '/scan-item-list', {
          order_id: order_id,
          address_type: addressType

        } ).then( ( response ) => {
          ModalWait.showIt( false )

          var data = response.data

          if (data.success) {
            console.info(data.items);
            this.item_list = data.items
          }

        }, ( response ) => {
          ModalWait.showIt( false )

          this.switherParseItemRequest( response )
        } );
      }      
    },
    ready() {
      console.info( '=================================== Scan is ready with this order: ', this.order.id );
      this.requestItemList()
    }
  }
</script>
