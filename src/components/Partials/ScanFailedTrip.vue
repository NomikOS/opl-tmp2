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
			<a @click="back()" class="ac25-half-black left waves-effect waves-light">cancelar</a>
			<a v-link="'scan-trip'" class="ac25-half-red right waves-effect waves-light">reintentar</a>
		</footer><!-- end footer -->

	</div><!-- end content-global -->
</template>

<script>
	import { getItem } from '../../vuex/getters'
  import ls from '../../libs/ls'

	export default {
		name: 'ScanFailedTrip',
    data: function() {
      return {
        grocer: false
      }
    },
    vuex: {
      getters: {
        item: getItem,
      }
    },
    ready() {
      var grocer = ls.get( 'grocer' )
      this.grocer = grocer
      console.info( 'ScanFinishedTrip is ready for ' + ( grocer ? 'Grocer' : 'OPL' ) + ' ===================================' );
    },
    methods: {

      back() {
        if ( this.grocer ) {
          return this.$route.router.go( '/stand-by-grocer' )

        } else {
          return this.$route.router.go( '/stand-by' )

        }
      }
    }
  }
</script>
