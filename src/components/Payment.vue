<template>
    <div class="ac25-red-loading-section">
        <div class="container">
            <div class="ac25-loading-content">
               <h5>No disponible en esta versión</h5>
            </div>
        </div>
    </div><!-- end red-loading-section -->
    <footer class="ac25-newfoot">
        <a onclick="window.history.back()" class="ac25-full-black waves-effect waves-light">volver</a>
    </footer><!-- end footer -->
</template>

<script>
export default {
	name: 'Payment',
	ready() {
		console.info( 'Payment is ready ===================================' );
	}
}
</script>