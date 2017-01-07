import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import App from './App.vue'
import store from './store'
import routes from './helper/routes'

import 'less/bootstrap.less'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.use(MuseUI)


const router = new VueRouter({
  routes: routes
})

sync(store, router)

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');