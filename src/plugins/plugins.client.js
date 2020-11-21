import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import utilMixins from '~/mixins/utilMixins'

require('iron-common').explode()

Vue.use(function (Vue, options) {
  Vue.mixin({ mixins: [ utilMixins ] })
}, {})
Vue.use(VueClipboard)

export default async ({ store }, inject) => {
  store.subscribe((mutation, state) => {
    if (mutation.type === 'user/SET_USER')
      localStorage.setItem('user', JSON.stringify(store.getters.user))
  })
  let record = false
  try {
    record = localStorage.getItem('user') || false
    if (record)
      record = JSON.parse(record)
  } catch (err) {
    log({ err })
  }
  if (record)
    store.commit('user/SET_USER', record)
}
