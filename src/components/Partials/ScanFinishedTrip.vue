<template>
	<div class="ac25-content-global">

		<div class="container">
			<div class="ac25-content-inner-holder ac25-min-height-200 center">
				<p class="ac25-mtop140">
					<img src="../html/images/green-check.png" />
					<div class="clearfix"></div>
					<span class="ac25-top-check-title"> escaneo terminado </span>
					<div class="clearfix"></div>
					<img src="../html/images/tasklist.png" />
					<div class="clearfix"></div>
				</p>
			</div><!-- end content-inner-holder -->
		</div><!-- end container -->

		<footer class="ac25-content-footer">
			<a @click="back()" class="ac25-full-black waves-effect waves-light">terminar</a>
		</footer><!-- end footer -->

	</div><!-- end content-global -->
</template>

<script>
  import ls from '../../libs/ls'

	export default {
		name: 'ScanFinishedTrip',
    data: function() {
      return {
        grocer: false
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
