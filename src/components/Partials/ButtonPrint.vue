<template>
	<a v-link="'print'" class="ac25-half-red ac25-half-border-right left waves-effect waves-light">
		<img src="/html/images/print-big.png" alt="" />
		<p class="ac25-no-margin">imprimir</p>
	</a>
</template>

<script>
export default {
	name: 'ButtonPrint',
	ready() {
		console.info( 'ButtonPrint is ready ===================================' );
	}
}
</script>