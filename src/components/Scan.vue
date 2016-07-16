<template>
  <header-user-data></header-user-data>

  <div class="ac25-content-global">
    <div class="ac25-content-inner-holder ac25-ptop15 ac25-no-padding-left ac25-no-padding-right">
      <ul class="ac25-scan-list">
        <li>
          <a href="#" class="waves-effect waves-light">
            <div class="ac25-scan-list-content">
              <img class="ac25-scanlist-scan-code" src="/html/images/barcode-big-2.png" alt="" />
              <div class="clearfix"></div>
              <span class="ac25-scanlist-scan-text">escanear</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="ac25-scan-list-content">
              <span class="ac25-sclanlist-scan-id">id 45889901</span>
            </div>
          </a>
        </li>
      </ul><!-- end scan-list -->
      <div class="container">
        <p class="ac25-mid-page-paragraph"> Sofa americano de 3 cuerpos  </p>
      </div>
    </div><!-- end content-inner-holder -->
    <footer class="ac25-newfoot ac25-height-auto">
      <img class="ac25-cam-image" src="/html/images/cam-img.png" alt="" />
      <a onclick="window.history.back()" class="ac25-full-black waves-effect waves-light">volver</a>
    </footer><!-- end footer -->

  </div><!-- end content-global -->
</template>

<script>
export default {
  name: 'Scan',
  data() {
    return {
      // user: director.user
    }
  },
  methods: {
    scan() {
      // director.logout()
    }
  },
  ready() {
    console.info( 'Scan is ready ===================================' );
  }
}
</script>