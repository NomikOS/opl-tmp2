<template>
	<a v-if="!grocer" v-link="'print'" class="ac25-half-red ac25-half-border-right left waves-effect waves-light">
		<img src="../html/images/print-big.png" alt="" />
		<p class="ac25-no-margin">imprimir</p>
	</a>
  <a v-if="grocer" v-link="'print'" class="ac25-half-red ac25-half-border-right left waves-effect waves-light">
    <img src="../html/images/print-big.png" alt="" />
    <p class="ac25-no-margin">imprimir</p>
  </a>
</template>

<script>
  import ls from '../../libs/ls'

	export default {
		name: 'ButtonPrint',
		ready() {},
    data: function() {
      return {
        grocer: false
      }
    },
    ready() {
      var grocer = ls.get( 'grocer' )
      this.grocer = grocer

      console.info( 'ButtonPrint is ready for ' + ( grocer ? 'Grocer' : 'OPL' ) + ' ===================================' );
    }
  }
</script>
