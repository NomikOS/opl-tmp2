<template>
	<div class="ac25-red-loading-section modal-custom-dev" style="z-index:10;position:absolute" id="modalCustomDev">
		<div class="container">
			<div class="ac25-loading-content">
				<h5>Comunicando con central...</h5>
				<img src="../html/images/loading.gif" />
			</div>
		</div>
	</div>	
</template>

<script>
	import { getModalVisibility } from '../../vuex/getters'
	export default {
		name: 'ModalWait',
		vuex: {
			getters: {
				modalVisible: getModalVisibility
			}
		},
		showIt(visible) {
			console.info(visible, 'visible w jquery');
			$('#modalCustomDev').toggle(visible)
		},		
		methods: {
			// showIt(visible) {
			// 	console.info(visible, 'visible');
			// 	$('#modalCustomDev').toggle(visible)
			// }
		},
		ready: function() {
			console.info(this.modalVisible, 'modalVisible')
		}		
	}
</script> 