import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/iconfont.js'
import iconSvg from '@/components/icon-svg.vue'



Vue.config.productionTip = false
Vue.component('iconSvg', iconSvg)
Vue.prototype.$baseUrl = process.env.NODE_ENV

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./icons', false, /\.svg$/)
requireAll(req)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
