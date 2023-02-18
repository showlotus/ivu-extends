// import "view-design/dist/styles/iview.css"
import '../src/styles/dist/iview.css'

import App from './App.vue'
import IvuExtends from '../src/index.js'
import ViewUI from 'view-design/dist/iview.min'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(ViewUI)
Vue.use(IvuExtends)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = []

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
