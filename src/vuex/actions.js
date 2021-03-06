// An action will receive the store as the first argument.
// Since we are only interested in the dispatch (and optionally the state)
// we can pull those two parameters using the ES6 destructuring feature
export const storeData = function ({ dispatch, state }, data) {
  dispatch('LOAD_DATA', data)
}
export const resetData = function ({ dispatch, state }) {
  dispatch('RESET_DATA')
}
export const showModal = function ({ dispatch, state }, data) {
  dispatch('HIDE_MODAL', data)
}
export const setCounters = function ({ dispatch, state }, data) {
  dispatch('SET_COUNTERS', data)
}