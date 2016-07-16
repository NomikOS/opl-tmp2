<template>
  <ul class="ac25-main-menu">
    <li>
      <a href="#" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <img src="/html/images/print-big.png" alt="" />
          <p>imprimir</p>
        </div>
      </a>
    </li>
    <li>
      <a href="#" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p>factura</p>
        </div>
      </a>
    </li>
    <li>
      <a href="#" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p>orden <br/> interna</p>
        </div>
      </a>
    </li>
    <li>
      <a href="#" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p>orden <br/> cliente</p>
        </div>
      </a>
    </li>
    <li>
      <a href="#" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p>comprobante <br/> de pago</p>
        </div>
      </a>
    </li>
    <li>
      <a href="#" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p>especial</p>
        </div>
      </a>
    </li>
    <li>
      <a onclick="window.history.back()" class="waves-effect waves-light">
        <div class="ac25-main-menu-content">
          <p> volver </p>
        </div>
      </a>
    </li>
  </ul><!-- end main-menu -->
</template>

<script>

export default {

  name: 'Print',

  data() {
    return {
      // user: director.user
    }
  },

  methods: {

    print() {
      // director.logout()
    }
  },

  ready(){
    console.info('Print is ready ===================================');
  }  
}
</script>