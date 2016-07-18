<template>
	<router-view></router-view>
</template>

<script>
	import store from '../vuex/store'
	import { pubnub } from '../libs/global'

	import { loadData } from '../vuex/actions'

	export default {
		components: {
		},

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

		 		console.info('pubnub cargado y listo para disparar');

		 		var that = this;
		 		pubnub.subscribe( {
		 			channel: 'notifications-opl',
		 			
		 			message: function( message ) {
		 				console.info( message );

		 				var type = message.type
		 				console.info(type);

		 				switch ( type ) {
		 					case 'order-pickup':
		 					that.loadData({
		 						type: 'order',
		 						content: message.order
		 					} )
		 					break;
		 					case 'print-order':
		 					var mac = 'AC:3F:A4:56:66:EC'
		 					var text = message.order_zpl

		 					cordova.plugins.zbtprinter.print( mac, text,
		 						function( success ) {
		 						},
		 						function( fail ) {
		 							alert( fail );
		 						});
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