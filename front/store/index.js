import Vue from 'vue'
import Vuex from 'vuex'

import profile from './modules/profile'
import paperbar from './modules/paperbar'
import appbar from './modules/appbar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appbar,
    paperbar,
    profile
  },
  strict: process.env.NODE_ENV !== 'production'
})