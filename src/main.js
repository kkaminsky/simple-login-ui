import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import Axios from "axios"

Vue.config.productionTip = false

Vue.prototype.$http = Axios

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
