<template>
	<router-view></router-view>
</template>

<script>
	import store from '../vuex/store'
	import { router } from '../index'
	import { pubnub } from '../libs/global'
	import { urls } from '../libs/common'
	import { loadData } from '../vuex/actions'
	import ls from '../libs/ls'

	const PASSPORT_API_URL = urls.passport_api

	export default {
		components: {},

		vuex: {
			actions: {
				loadData: loadData
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
		 		console.info( 'pubnub cargado y listo para disparar' );

		 		var that = this;
		 		pubnub.subscribe( {
		 			channel: 'notifications-opl',

		 			message: function( message ) {
		 				console.info( message, 'notifications-opl arrivando......................' );

		 				var type = message.type
		 				console.info( type );

		 				switch ( type ) {

		 					case 'order-pickup':
		 					that.loadData( {
		 						type: 'order',
		 						content: message.order
		 					} )
		 					break;

		 					case 'user-authenticated':

		 					var phonegapid_stored = ls.get( 'phonegapid' )

		 					var token = message.token
		 					var uid = message.uid
		 					var phonegapid = message.phonegapid

		 					if (phonegapid != phonegapid_stored) {
		 						console.info(phonegapid, phonegapid_stored, 'not equals!!!!!!!!!!!!!!!!!!!');
		 						// return // and destroy phone
		 					}

		 					ls.save( 'access_token', token );
		 					ls.save( 'user_id', uid );

		 					that.$http.get( PASSPORT_API_URL + '/user/' + uid + '/profile' ).then( ( response ) => {
		 						console.info( response, 'success callback' );

		 						var profile = response.data.data
		 						ls.save( 'profile', profile );

		 						console.info($('#opl_iframe'), '$(#opl_iframe)');

		 						that.$route.router.go( '/stand-by' )
		 						$('#opl_iframe').remove()

		 					}, ( response ) => {
		 						console.info( response, 'error callback' );
		 					} );

		 					break;

		 					case 'print-order':

		 					var setup = ls.get( 'setup' )
		 					var printerMAC = setup.printerMAC
		 					var mac = printerMAC
									// var text = message.order_zpl
									var text = '';

									cordova.plugins.zbtprinter.print( mac, text,
										function( success ) {},
										function( fail ) {
											alert( fail );
										} );
									break;

									case 'shipment-notification':
								// that.loadData( message.notification )
								break;
							}

						}
					} )

		 	},
		 }
		}
	</script>