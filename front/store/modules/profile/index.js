import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
  id: '',
  username: '',
  password: '',
  gender: '',
  phone: '',
  address: '',
  token: ''
}

export default{
  state,
  actions,
  getters,
  mutations
}