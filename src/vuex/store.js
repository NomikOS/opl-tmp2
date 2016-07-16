/*
 * @Author: Igor Parra
 * @Date:   2016-07-15 12:20:57
 * @Last Modified by:   Igor Parra
 * @Last Modified time: 2016-07-15 16:55:49
 */

import Vue from 'vue'
import Vuex from 'vuex'

// Make vue aware of Vuex
Vue.use( Vuex )

// Create an object to hold the initial state when
// the app starts up
const state = {
  // When the app starts, count is set to 0
  count: 0,
  order: { id: 0 },
  shipmentNotification: {}
}

const mutations = {
  // A mutation receives the current state as the first argument
  // You can make any modifications you want inside this function
  INCREMENT( state, amount ) {
    state.count = state.count + amount
  },
  LOAD_DATA( state, data ) {
    var type = data.type
    var content = data.content
    state[ type ] = content
  }
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store( {
  state,
  mutations
} )