<template>
  <a v-link="'print-trip'" class="ac25-half-red ac25-half-border-right left waves-effect waves-light">
    <img src="../html/images/print-big.png" alt="" />
    <div style="margin-top:100px">
      <p class="ac25-no-margin">imprimir</p>
    </div>
  </a>
</template>

<script>
  import ls from '../../libs/ls'

  export default {
    name: 'ButtonPrintTrip',
    data: function() {
      return {
        grocer: false
      }
    },
    ready() {
      var grocer = ls.get( 'grocer' )
      this.grocer = grocer

      console.info( 'ButtonPrintTrip is ready for ' + ( grocer ? 'Grocer' : 'OPL' ) + ' ===================================' );
    }
  }
</script>
