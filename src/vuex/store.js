/*
 * @Author: Igor Parra
 * @Date:   2016-07-15 12:20:57
 * @Last Modified by:   Igor Parra
 * @Last Modified time: 2016-07-30 23:33:54
 */

import Vue from 'vue'
import Vuex from 'vuex'

// Make vue aware of Vuex
Vue.use( Vuex )

// Create an object to hold the initial state when
// the app starts up
const state = {
  order: { id: 0 },
  item: { id: 0 },
  counters: {
    items_to_scan_remaining: 0
  },
  shipmentNotification: {},
  modalVisible: true,
  urlIframe: ''
}

const mutations = {
  // A mutation receives the current state as the first argument
  // You can make any modifications you want inside this function
  LOAD_DATA( state, data ) {
    var type = data.type
    var content = data.content
    state[ type ] = content

    if ( 'order' == type ) {
      state.counters.items_to_scan_remaining = content.items_to_scan_remaining
    }
  },
  HIDE_MODAL( state, data ) {
    state.modalVisible = data
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