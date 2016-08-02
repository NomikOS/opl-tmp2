<template>
	<a v-link="'scan'" class="ac25-half-black  right waves-effect waves-light">
		<img src="../html/images/barcode-big-2.png" />
		<p class="ac25-no-margin" v-if="counters.items_to_scan_remaining > 0">escanear ({{counters.items_to_scan_remaining}})</p>
		<p class="ac25-no-margin" v-if="counters.items_to_scan_remaining <= 0">escaneo listo</p>
	</a>
</template>

<script>
	import { getOrder, getCounters } from '../../vuex/getters'

	export default {
		name: 'ButtonScan',
		vuex: {
			getters: {
				order: getOrder,
				counters: getCounters
			}
		}
	}
</script>