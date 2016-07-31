<template>
  <header-user-data></header-user-data>
  <div class="ac25-content-global">
    <div class="container">
      <div class="ac25-content-inner-holder">

        <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />

        <img class="ac25-page-top-logo" src="html/images/pickup.png" /> (icono delivery)
        <p class="ac25-order-number-info">
          <span>orden {{order.special_id}}</span>
          <notification-icon></notification-icon>
        </p>

        <ul class="ac25-info-list ac25-w100">
          <li>
            <p class="ac25-info-list-title"> nombre </p>
            <p class="ac25-info-list-content"> {{order.deliveryAddress_person_name}}  </p>
          </li>
          <li>
            <p class="ac25-info-list-title"> telefono </p>
            <p class="ac25-info-list-content"> {{order.deliveryAddress_person_phone}} </p>
          </li>
          <li>
            <p class="ac25-info-list-title"> direccion </p>
            <p class="ac25-info-list-content"> {{order.deliveryAddress_name}} </p>
          </li>
        </ul><!-- end info-list -->

        <ul class="ac25-info-list ac25-w100 ac25-steps2">
          <li>
            <p class="ac25-info-list-title"> Deparmento </p>
            <p class="ac25-info-list-content"> {{order.deliveryAddress_apt}} </p>
          </li>
          <li>
            <p class="ac25-info-list-title"> Comuna </p>
            <p class="ac25-info-list-content"> {{order.deliveryAddress_county}} </p>
          </li>
        </ul><!-- end steps2 -->

        <ul class="ac25-info-list ac25-w100 ac25-steps3">
          <li>
            <p class="ac25-info-list-title"> MTS3 </p>
            <p class="ac25-info-list-content">{{order.items_volume}}</p>
          </li>
          <li>
            <p class="ac25-info-list-title"> bultos </p>
            <p class="ac25-info-list-content">{{order.items_amount}}</p>
          </li>
          <li>
            <p class="ac25-info-list-title"> peso </p>
            <p class="ac25-info-list-content">{{order.items_weight}}</p>
          </li>
        </ul><!-- end steps3 -->
      </div><!-- end content-inner-holder -->
    </div><!-- end container -->
    <footer class="ac25-content-footer">
      <button-print></button-print>
      <button-scan></button-scan>
      <div class="clearfix"></div>
      <a class="ac25-half-black ac25-half-border-right left waves-effect waves-light" v-if="counters.items_to_scan_remaining > 0">&nbsp;</a>
      <a v-link="'load-vehicle'" class="ac25-half-black ac25-half-border-right left waves-effect waves-light" v-if="counters.items_to_scan_remaining == 0">descargar</a>
      <a v-link="'payment'" class="ac25-half-red right waves-effect waves-light">pagos</a>
    </footer><!-- end footer -->
  </div><!-- end content-global -->
</template>

<script>
  import { urls } from '../libs/common'
  import HeaderUserData from './Partials/HeaderUserData.vue'
  import NotificationIcon from './Partials/NotificationIcon.vue'
  import ButtonPrint from './Partials/ButtonPrint.vue'
  import ButtonScan from './Partials/ButtonScan.vue'
  import { getOrder, getCounters } from '../vuex/getters'

  const ORDER_URL = urls.micro_api + '/order'

  export default {
    name: 'EventDelivery',
    components: {
      HeaderUserData,
      NotificationIcon,
      ButtonPrint,
      ButtonScan
    },
    vuex: {
      getters: {
        order: getOrder,
        counters: getCounters
      }
    },
    data: function() {
      return {}
    },
    methods: {},
    ready: function() {
      console.info( '=================================== EventDelivery is ready with this order: ', this.order.id )
      console.info('order', this.order, 'counters', this.counters.items_to_scan_remaining);
    },
  }
</script>