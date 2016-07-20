<template>
	<div class="ac25-red-loading-section" style="z-index:10;position:absolute" v-show="modalVisible" transition="modal">
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
		}
	}
</script>

<style type="text/css">
.modal-enter, .modal-leave {
  opacity:0;
}

.modal-enter .container,
.modal-leave .container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
	
</style>