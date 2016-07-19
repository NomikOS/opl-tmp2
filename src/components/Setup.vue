<template>
  <div class="ac25-content-global">
    <div class="container">
      <div class="ac25-content-inner-holder ac25-min-height-200">
        <h4 class="ac25-top-red-text">CONFIGURACIÓN</h4>

        <ul class="ac25-red-list clearfix ac25-fleft ac25-mtop60">
          <form>
            <p>
              <label>Vehículo</label>
              <select v-model="db.vehicleSelected">
                <option v-for="option in vehicleOptions" v-bind:value="option.id">
                  {{ option.name }}
                </option>
              </select>
            </p>
            <p>
              <label>MAC impresora portátil</label>
              <input type="text" v-model="db.printerMAC">
            </p>            
            <p>
              <label>Teléfono móvil</label>
              <input type="text" v-model="db.phoneMobile">
            </p>
            <p>
              <label>Teléfono central</label>
              <input type="text" v-model="db.phoneCentral">
            </p>            
          </form>
        </ul>

        <div class="clearfix"></div>
      </div><!-- end content-inner-holder -->
    </div><!-- end container -->

    <footer class="ac25-content-footer">
      <a @click="cancel()" class="ac25-half-black left waves-effect waves-light">cancelar</a>
      <a @click="save()" class="ac25-half-red right waves-effect waves-light">guardar</a>
    </footer><!-- end footer -->

  </div><!-- end content-global -->
</template>

<script>
  import { urls } from '../libs/common'
  import ls from '../libs/ls'

  const ORDER_URL = urls.micro_api + '/order'

  export default {
    name: 'Setup',
    components: {
    },
    data: function() {
      return {
        vehicleOptions: [],
        db: {
          vehicleSelected: '',
          printerMAC: '',
          phoneMobile: '',
          phoneCentral: ''
        }
      };
    },
    ready: function() {
      console.info( 'Setup is ready ===================================' );
      this.load();
    },
    methods: {
      load: function() {

        var setup = ls.get( 'setup' )
        console.info(setup, 'setup')

        if ( setup ) {
          this.db = setup
        }

        var that = this       

        this.$http.get( ORDER_URL + '/get-setup-data' ).then( ( response ) => {
          console.info( response, 'success callback' )

          that.vehicleOptions = response.data.vehicles
          $( 'select' ).show()

        }, ( response ) => {
          console.info( response, 'error callback' );
        } );
      },    
      save: function() {

        var setup = this.db
        ls.save( 'setup', setup )

        this.$route.router.go( 'available' )

      },
      cancel: function() {
      }    
    }
  }
</script>