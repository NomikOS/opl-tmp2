<template>
	<router-view></router-view>
</template>

<script>
  import director from '../services/director'
  import geo from '../services/geo'
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
      this.startGpsReporting()
    },

    methods: {
      startGpsReporting: function() {
         console.info( 'GEO.startGpsReporting....' );
         geo.startGpsReporting()
      },

      initPubnub: function() {
        console.info( 'pubnub cargado' );

        var that = this;
        pubnub.subscribe( {
          channel: 'notifications-opl',

          message: function( message ) {
            var type = message.type
            var t = new Date()
            console.info( message, '=================================== NOTIFICATIONS-OPL arrivando con tipo: ' + type + ' a las ' + t);

            switch ( type ) {

                /**
                 * Operacion para interceptar viaje
                 * Rechazar para grocer
                 * --------------------------------------------------------
                 */
                 case 'autoping':

                 var grocer = ls.get( 'grocer' )
                 if ( grocer ) {
                  return;
                }

                var setup = ls.get( 'setup' )
                if ( !setup || !setup.vehicleSelected ) {
                  return that.$route.router.go( '/setup' )
                }

                var vehicleSelected = setup.vehicleSelected
                var vehicle_id = message.vehicle_id

                if ( vehicleSelected != vehicle_id ) {

                  // No es para este vehiculo
                  console.info( 'Data for another OPL, bye' )
                  return;
                }

                return that.$route.router.go( '/available' )
                break

                /**
                 * Operaciones de recepcion/transferencia de carga para OPL
                 * Rechazar para grocer
                 * --------------------------------------------------------
                 */
                 case 'trip-transfer':
                 case 'trip-reception':

                 var grocer = ls.get( 'grocer' )
                 if ( grocer ) {
                  return;
                }

                var setup = ls.get( 'setup' )
                if ( !setup || !setup.vehicleSelected ) {
                  return that.$route.router.go( '/setup' )
                }

                var vehicleSelected = setup.vehicleSelected
                var vehicle_id = message.vehicle_id

                if ( vehicleSelected != vehicle_id ) {

                  // No es para este vehiculo
                  console.info( 'Data for another OPL, bye' );
                  return;
                }

                var operation_type = type
                var trip = message.trip
                var items_remaining = message.items_remaining

                that.storeData( {
                  type: 'trip',
                  content: trip
                } )

                that.storeData( {
                  type: 'trip_items_remaining_counter',
                  content: items_remaining.length
                } )

                that.storeData( {
                  type: 'operation_type',
                  content: operation_type
                } )

                /**
                 * safeguards
                 */
                 ls.save( 'trip_id', trip.id );
                 ls.save( 'operation_type', operation_type );

                 return that.$route.router.go( '/' + operation_type )
                 break

                /**
                 * Operaciones de atencion a cliente en pickup/delivery para OPL
                 * -------------------------------------------------------------
                 */
                 case 'order-pickup':
                 case 'order-delivery':

                 var grocer = ls.get( 'grocer' )
                 if ( grocer ) {
                  return;
                }

                var setup = ls.get( 'setup' )
                if ( !setup || !setup.vehicleSelected ) {
                  return that.$route.router.go( '/setup' )
                }

                var vehicleSelected = setup.vehicleSelected
                var vehicle_id = message.vehicle_id

                if ( vehicleSelected != vehicle_id ) {

                  // no es para este vehiculo
                  console.info( 'Data for another OPL, bye' )
                  return;
                }

                var order = message.order
                var load = message.load

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

                console.info("order[address_type + _acknowledge_time]", order[address_type + '_acknowledge_time']);
                var show_acknowledge = order[address_type + '_acknowledge_time'] ? false : true

                that.storeData( {
                  type: 'show_acknowledge',
                  content: show_acknowledge
                } )

                var show_in_position = false

                console.info(order[address_type + '_acknowledge_time'] && ! order[address_type + '_hello_time']);

                if (order[address_type + '_acknowledge_time'] && ! order[address_type + '_hello_time']) {
                  show_in_position = true
                }

                that.storeData( {
                  type: 'show_in_position',
                  content: show_in_position
                } )

                /**
                 * safeguards
                 */
                 ls.save( 'order_id', order.id );
                 ls.save( 'address_type', address_type )

                 if (load != '') {

                  switch ( load ) {
                    case 'refresh_order' :
                      console.info('order updated');

                     /**
                      * Still needs to be fully paid
                      */
                      if (order.paymentStatus_id < 4) {
                        console.info('Still needs to be fully paid')
                        return that.$route.router.go( '/payment' )
                      }
                      return
                    break;
                  }
                 }

                 /**
                  * Still needs to be acepted or arrive to pickcup
                  */
                 if (show_acknowledge || show_in_position) {
                  console.info('Still needs to be acepted or arrive to pickcup')
                  return that.$route.router.go( '/stand-by' )
                 }

                 /**
                  * Still needs to be fully paid
                  */
                  if (order.paymentStatus_id < 4) {
                    console.info('Still needs to be fully paid')
                    return that.$route.router.go( '/payment' )
                  }

                 return that.$route.router.go( '/event-' + address_type )
                 break

                 case 'user-authenticated':

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

                console.info( 'DIRECTOR.INIT AFTER USER-AUTHENTICATED....' );
                director.init()
                break

                case 'shipment-notification':
                // that.storeData( message.notification )
                break
              }

            }
          } )
},
}
}
</script>
