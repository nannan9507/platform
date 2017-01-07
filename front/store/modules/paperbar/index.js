import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

let barList = [
  {
    value: 'home',
    title: '首页',
    icon: 'home',
    href: '#/'
  },
  {
    value: 'account',
    title: '我',
    icon: 'account_box',
    href: '#/account'
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