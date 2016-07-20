<template>
	<div class="ac25-content-global">

		<div class="container">
			<div class="ac25-content-inner-holder ac25-min-height-200 center">
				<p class="ac25-mtop140">
					<img src="../html/images/green-check.png" />
					<div class="clearfix"></div>
					<span class="ac25-top-check-title"> escaneo terminado </span>

					<div class="clearfix"></div>

					{falta icon}

					<div class="clearfix"></div>
				</p>
			</div><!-- end content-inner-holder -->
		</div><!-- end container -->

		<footer class="ac25-content-footer">
			<a v-link="'available'" class="ac25-full-black waves-effect waves-light">terminar</a>
		</footer><!-- end footer -->

	</div><!-- end content-global -->
</template>

<script>
	import { getOrder, getItem } from '../../vuex/getters'

	export default {
		name: 'ScanFinished',
        vuex: {
            getters: {
                order: getOrder,
                item: getItem
            }
        },		
	}
</script>