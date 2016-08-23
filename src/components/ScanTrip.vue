<template>
  <header-user-data></header-user-data>
  <modal-wait></modal-wait>

  <div class="ac25-content-global">
    <div class="ac25-content-inner-holder ac25-ptop15 ac25-no-padding-left ac25-no-padding-right">
      <ul class="ac25-scan-list">
        <li>
          <a class="waves-effect waves-light">
            <div class="ac25-scan-list-content">
              <img class="ac25-scanlist-scan-code" src="html/images/barcode-big-2.png" />
              <div class="clearfix"></div>
              <span class="ac25-scanlist-scan-text">escanear</span>
            </div>
          </a>
        </li>
        <li>
          <a>
            <div class="ac25-scan-list-content">
              <p class="ac25-no-margin" v-if="trip_items_remaining_counter > 0">Quedan ({{trip_items_remaining_counter}}) bultos por escanear</p>
              <p class="ac25-no-margin" v-if="trip_items_remaining_counter <= 0">escaneo listo</p>
            </div>
          </a>
        </li>
      </ul><!-- end scan-list -->
      <div class="container">
        <p class="ac25-mid-page-paragraph">{{item_name_info}}</p>
      </div>
    </div><!-- end content-inner-holder -->

    <footer class="ac25-newfoot ac25-height-auto">
      <a @click="scan()" v-if="trip_items_remaining_counter > 0" class="ac25-full-red-custom-dev waves-effect waves-light" style="padding:100px 0;">presione para escanear item</a>
      <a @click="back()" class="ac25-full-black waves-effect waves-light">volver</a>
    </footer><!-- end footer -->

  </div><!-- end content-global -->
</template>

<script>
  import HeaderUserData from './Partials/HeaderUserData.vue'
  import ModalWait from './Partials/ModalWait.vue'

  import ls from '../libs/ls'
  import { urls } from '../libs/common'
  import { showModal, storeData } from '../vuex/actions'
  import { getTrip, getItem, getTripItemsRemainingCounter, getOperationType } from '../vuex/getters'

  const TRIP_URL = urls.micro_api + '/trip'

  const barcodeScannerOptions = {
    "preferFrontCamera": true, // iOS and Android
    "showFlipCameraButton": true, // iOS and Android
    "prompt": "Apuntar a codigo QR", // supported on Android only
    "formats": "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
    "orientation": "portrait" // Android only (portrait|landscape), default unset so it rotates with the device
  }

  export default {
    name: 'ScanTrip',
    components: {
      HeaderUserData,
      ModalWait,
    },
    vuex: {
      actions: {
        showModal: showModal,
        storeData: storeData
      },
      getters: {
        trip: getTrip,
        item: getItem,
        trip_items_remaining_counter: getTripItemsRemainingCounter,
        operation_type: getOperationType
      }
    },
    data() {
      return {
        item: [],
        qr_id: 0,
        grocer: false
      }
    },
    methods: {

      back() {
        var trip_id = this.trip.id

        if ( this.grocer ) {
          return this.$route.router.go( '/stand-by-grocer' )

        } else {

          var setup = ls.get( 'setup' )
          if ( !setup || !setup.vehicleSelected ) {
            return this.$route.router.go( '/setup' )
          }

          var vehicleSelected = setup.vehicleSelected

          this.$http.post( TRIP_URL + '/finish-transfer', {
            trip_id: trip_id,
            vehicle_id: vehicleSelected

          } ).then( ( response ) => {
            console.info( response, 'success callback' );
            this.$route.router.go( '/stand-by' )

          }, ( response ) => {
            console.info( response.data, 'error callback' );

          } );

        }
      },

      // REALLY SCAN
      // -----------
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

      /**
       * Parse QR Scan Result
       * --------------------
       */
       switherParseQrScanResult( error, result ) {
        if ( error ) {
          console.info( "Scanning failed: " + error );
          this.$route.router.go( '/scan-failed-trip' )

        } else {
          var qr_id = result.text
          this.qr_id = qr_id
          this.updateItem()
        }
      },

      /**
       * Get next item to scan
       * ---------------------
       */
       requestItem() {
        var trip_id = this.trip.id
        var operation_type = this.operation_type

        this.showModal( true )
        this.$http.get( TRIP_URL + '/' + trip_id + '/grocer-publish/' + operation_type + '/' + (this.grocer ? 'grocer' : 'opl')).then( ( response ) => {

          if (!response.data || ! response.data.trip) {
            return alert('Viaje no existe')
          }

          var trip = response.data.trip
          var items_remaining = response.data.items_remaining

          this.storeData( {
            type: 'trip',
            content: trip
          } )

          this.storeData( {
            type: 'trip_items_remaining_counter',
            content: items_remaining.length
          } )

        }, ( response ) => {
          this.switherParseItemRequest( response )

        } )

      },

      /**
       * Send QR and trip
       * ----------------
       */
       updateItem() {
        var trip_id = this.trip.id
        var qr_id = this.qr_id
        var operation_type = this.operation_type

        this.showModal( true )
        this.$http.post( TRIP_URL + '/scan-item', {

          trip_id: trip_id,
          qr_id: qr_id,
          operation_type: operation_type,
          operator_type: this.grocer ? 'grocer' : 'opl'

        } ).then( ( response ) => {

          var data = response.data
          var success = data.success
          var item = data.item

          var user_messages = data.user_messages
          if ( user_messages.length ) {
            alert( user_messages )
          }

          /**
           * Update item is store
           * to show in ScanSuccesfulTrip
           */
           this.item = item

           this.storeData( {
            type: 'item',
            content: item
          } )

           if ( success ) {
            return this.$route.router.go( '/scan-succesful-trip' )
          }

          return this.$route.router.go( '/scan-failed-trip' )

        }, ( response ) => {

          this.switherParseItemUpdated( response )
        } );
      }
    },

    /**
     * Ready
     * -----
     */
     ready() {

      var grocer = ls.get( 'grocer' )
      this.grocer = grocer

      console.info( 'Scan is ready for ' + ( grocer ? 'Grocer' : 'OPL' ) + ' ===================================' );
      console.info( 'trip', this.trip, 'counters', this.trip_items_remaining_counter );

      this.requestItem()
    }
  }
</script>
