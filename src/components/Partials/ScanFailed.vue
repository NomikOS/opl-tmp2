<template>
	<div class="ac25-content-global">

		<div class="container">
			<div class="ac25-content-inner-holder ac25-min-height-200 center">
				<p class="ac25-mtop140">
					<img src="../html/images/info.png" />
					<div class="clearfix"></div>
					<span class="ac25-top-check-title"> Lectura fallida </span>

					<div class="clearfix"></div>

					<img class="ac25-no-margin" src="../html/images/barcode-big-2.png" />
					<p class="ac25-mid-page-paragraph ac25-no-margin"> {{item.name}}  </p>

					<div class="clearfix"></div>

					<p class="ac25-red-id-text ac25-no-margin">item id #{{item.id}}</p>
				</p>
			</div><!-- end content-inner-holder -->
		</div><!-- end container -->

		<footer class="ac25-content-footer">
			<a v-link="'available'" class="ac25-half-black left waves-effect waves-light">cancelar</a>
			<a v-link="'scan'" class="ac25-half-red right waves-effect waves-light">reintentar</a>
		</footer><!-- end footer -->

	</div><!-- end content-global -->
</template>

<script>
	import { getOrder, getItem } from '../../vuex/getters'

	export default {
		name: 'ScanFailed',
        vuex: {
            getters: {
                order: getOrder,
                item: getItem
            }
        },
	}
</script>
