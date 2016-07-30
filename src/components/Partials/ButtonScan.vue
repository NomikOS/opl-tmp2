<template>
	<a v-link="'scan'" class="ac25-half-black  right waves-effect waves-light">
		<img src="../html/images/barcode-big-2.png" />
		<p class="ac25-no-margin">escanear ({{counters.items_to_scan_remaining}})</p>
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