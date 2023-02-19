// import "view-design/dist/styles/iview.css"
import '../src/styles/iview.css'

import App from './App.vue'
import IvuExtends from '../src/index.js'
import ViewUI from 'view-design/dist/iview.min'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(ViewUI)
Vue.use(IvuExtends)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/gen-theme-color',
      component: () => import('./views/gen-theme-color/index.vue')
    },
    {
      path: '/form-label-suffix',
      component: () => import('./views/form-label-suffix.vue')
    },
    {
      path: '/input-number-unit',
      component: () => import('./views/input-number-unit.vue')
    },
    {
      path: '/select-union',
      component: () => import('./views/select-union.vue')
    },
    {
      path: '/table-column-key-chain',
      component: () => import('./views/table-column-key-chain.vue')
    },
    {
      path: '/tooltip-text',
      component: () => import('./views/tooltip-text.vue')
    },
    {
      path: '/v-modify-opacity',
      component: () => import('./views/v-modify-opacity.vue')
    },
    {
      path: '/v-resize',
      component: () => import('./views/v-resize.vue')
    },
    {
      path: '/v-scroll-to',
      component: () => import('./views/v-scroll-to.vue')
    },
    {
      path: '/v-set-title-attr',
      component: () => import('./views/v-set-title-attr.vue')
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
