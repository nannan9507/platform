import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import store from './store'
import routes from './helper/routes'

import 'less/bootstrap.less'

import FastClick from 'fastclick'
FastClick.attach(document.body)


Vue.use(VueRouter)
Vue.use(VueResource)


const router = new VueRouter({
  routes: routes
})

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');