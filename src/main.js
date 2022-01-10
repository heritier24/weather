import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueProgressBar from 'vue-progressbar'
import 'vuejs-noty/dist/vuejs-noty.css'

import VueNoty from 'vuejs-noty'

Vue.use(VueNoty, {
  timeout: 4000,
  progressBar: true,
  layout: 'topRight'
})

Vue.use(VueProgressBar, {
  color: 'pink',
  failedColor: 'red',
  thickness: '5px'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
