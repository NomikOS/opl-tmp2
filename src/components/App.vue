<template>
	<router-view></router-view>
</template>

<script>
  import director from '../services/director'
  import store from '../vuex/store'
  import { router } from '../index'
  import { pubnub } from '../libs/global'
  import { urls } from '../libs/common'
  import { storeData } from '../vuex/actions'
  import ls from '../libs/ls'

  const PASSPORT_API_URL = urls.passport_api
  const GATEWAY_API_URL = urls.gateway_api

  export default {
    components: {},

    vuex: {
     actions: {
      storeData: storeData
    }
  },

	/**
	 * Make this and all child components aware of the new store
	 */
	 store: store,

	 ready: function() {
	 	console.info( 'APP is ready ===================================' );
	 	this.initPubnub()
	 },

	 methods: {
	 	initPubnub: function() {
	 		console.info( 'pubnub cargado' );

	 		var that = this;
	 		pubnub.subscribe( {
	 			channel: 'notifications-opl',

	 			message: function( message ) {
	 				var type = message.type
	 				console.info( message, '=================================== NOTIFICATIONS-OPL arrivando con tipo: ' + type );

	 				switch ( type ) {

            /**
             * Operaciones de recepcion/transferencia de carga para OPL
             * --------------------------------------------------------
             */
            case 'reception-opl':
            case 'transfer-opl':

              var setup = ls.get( 'setup' )
              if ( !setup || !setup.vehicleSelected ) {
                return this.$route.router.go( '/setup' )
              }

              var vehicleSelected = setup.vehicleSelected
              var vehicle_id = message.vehicle_id

              if ( vehicleSelected != vehicle_id ) {

                // no es para este vehiculo
                console.info( 'Data for another OPL, bye' );
                return;
              }

              var trip = message.trip

              that.storeData( {
                type: 'trip',
                content: trip
              } )

              var operation_type = type

              that.storeData( {
                type: 'operation_type',
                content: operation_type
              } )

              /**
               * safeguards
               */
              ls.save( 'trip_id', trip.id );
              ls.save( 'operation_type', operation_type );

              that.$route.router.go( '/trip-reception' )
              break;

            /**
             * Operaciones de tenciona cliente en pickup/delivery para OPL
             * ------------------------------------------------------------
             */
	 					case 'order-pickup':
            case 'order-delivery':

							var setup = ls.get( 'setup' )
							if ( !setup || !setup.vehicleSelected ) {
								return this.$route.router.go( '/setup' )
							}

							var vehicleSelected = setup.vehicleSelected
							var vehicle_id = message.vehicle_id

							if ( vehicleSelected != vehicle_id ) {

								// no es para este vehiculo
								console.info( 'Data for another OPL, bye' );
								return;
							}

							var order = message.order

							that.storeData( {
								type: 'order',
								content: order
							} )

							var address_type = type.split( '-' )
							address_type = address_type[ 1 ]

							that.storeData( {
								type: 'addressType',
								content: address_type
							} )

              /**
               * safeguards
               */
              ls.save( 'order_id', order.id );
              ls.save( 'address_type', address_type );

							that.$route.router.go( '/event-' + address_type )
							break;

							case 'user-authenticated':
							//----------------
							var phonegapid_stored = ls.get( 'phonegapid' )

							var token = message.token
							var uid = message.uid
							var phonegapid = message.phonegapid

							if ( phonegapid != phonegapid_stored ) {
								console.info( phonegapid, phonegapid_stored, 'PHONEGAP-ID DO NOT MACTH !!!!!!!!!!!!!!!!!!! CHECK THIS ASAP' );
								return // and destroy phone
							}

							ls.save( 'access_token', token );
							ls.save( 'user_id', uid );

              console.info('DIRECTOR.INIT AFTER USER-AUTHENTICATED....');
              director.init()
              break;

              case 'shipment-notification':
							// that.storeData( message.notification )
							break;
						}

					}
				} )
	 	},
	 }
	}
</script>
