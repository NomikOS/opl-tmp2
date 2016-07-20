// This getter is a function which just returns the count
// With ES6 you can also write it as:
// export const getCount = state => state.count
export function getOrder (state) {
  return state.order
}
export function getItem (state) {
  return state.item
}
export function getModalVisibility (state) {
  return state.modalVisible
}
export function getUrlIframe (state) {
  return state.urlIframe
}