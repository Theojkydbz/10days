import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuelidate from 'vuelidate'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(vuelidate)
Vue.use(VueMaterial)

new Vue({
  router,
  store,
  vuelidate,
  VueMaterial,
  render: h => h(App),
}).$mount('#app')
