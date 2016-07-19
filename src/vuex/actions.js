// An action will receive the store as the first argument.
// Since we are only interested in the dispatch (and optionally the state)
// we can pull those two parameters using the ES6 destructuring feature
export const incrementCounter = function ({ dispatch, state }) {
  dispatch('INCREMENT', 10)
}
export const loadData = function ({ dispatch, state }, data) {
  dispatch('LOAD_DATA', data)
}
export const showModal = function ({ dispatch, state }, data) {
  dispatch('HIDE_MODAL', data)
}