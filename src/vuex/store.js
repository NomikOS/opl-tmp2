/*
 * @Author: Igor Parra
 * @Date:   2016-07-15 12:20:57
 * @Last Modified by:   Igor Parra
 * @Last Modified time: 2016-10-15 12:17:59
 */

import Vue from 'vue'
import Vuex from 'vuex'

// Make vue aware of Vuex
Vue.use( Vuex )

// Create an object to hold the initial state when
// the app starts up
const default_state = {
  order: { id: 0 },
  item: { id: 0 },
  counters: {
    items_to_scan_remaining: 0
  },
  addressType: '',
  shipmentNotification: {},
  modalVisible: true,
  urlIframe: '',

  trip: { id: 0 },
  operation_type: '',
  trip_items_remaining_counter : 0,
  show_acknowledge : false,
  show_in_position : false
}
const state = default_state

const mutations = {
  // A mutation receives the current state as the first argument
  // You can make any modifications you want inside this function
  LOAD_DATA( state, data ) {
    var type = data.type
    var content = data.content

    state[ type ] = content

    console.info('TYPE', type);

    if ( 'order' == type ) {
      console.info('CONTENT.ITEMS_TO_SCAN_REMAINING', content.items_to_scan_remaining);
      state.counters.items_to_scan_remaining = content.items_to_scan_remaining
    }
  },
  
  HIDE_MODAL( state, data ) {
    state.modalVisible = data
  },

  RESET_DATA( state ) {
    state.order = { id : 0 }
    state.item = { id : 0 }
    state.counters.items_to_scan_remaining = 0
    state.addressType = ''
    state.shipmentNotification = {}
    state.modalVisible = true
    state.urlIframe = ''
    state.trip.id = 0
    state.operation_type = ''
    state.trip_items_remaining_counter  = 0
    state.show_acknowledge = false
    state.show_in_position = false
  },

  SET_COUNTERS( state, data ) {
    // var type = data.type
    // var units = data.units
    // var x = state.counters[ type ];
    // state.counters[ type ] = +x + +units
    // console.info(state.counters);
    state.counters.items_to_scan_remaining--
  },
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store( {
  state,
  mutations
} )
