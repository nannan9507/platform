import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

import utils from '../../../service/utils.js'

let barList = [
  {
    value: 'home',
    title: '首页',
    icon: '',
    link: '/'
  },
  {
    value: 'account',
    title: '我',
    icon: '',
    link: '/account'
  },
]

const state = {
  barList: barList,
  value: barList[0].value || ''
}

export default{
  state,
  actions,
  getters,
  mutations
}