import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: 'red',
  failedColor: 'red',
  thickness: '3px'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
