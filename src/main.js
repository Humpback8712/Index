import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.config.productionTip = false

Vue.use(VueObserveVisibility)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
