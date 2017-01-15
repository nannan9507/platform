import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'

import App from './App.vue'
import store from './store'
import routes from './helper/routes'

import FastClick from 'fastclick'
FastClick.attach(document.body)

import 'less/bootstrap.less'


Vue.use(VueRouter)
Vue.use(VueResource)


const router = new VueRouter({
  routes: routes
})

sync(store, router)

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');