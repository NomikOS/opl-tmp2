<template>
  <a v-link="'scan'" class="ac25-half-black  right waves-effect waves-light">
    <img src="/html/images/barcode-big-2.png" alt="" />
    <p class="ac25-no-margin">escanear</p>
  </a>
</template>

<script>
export default {
  name: 'ButtonScan',
  ready() {
    console.info( 'ButtonScan is ready ===================================' );
  }
}
</script>