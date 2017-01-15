import * as mutationTypes from './mutation-type'

const mutations = {
  [mutationTypes.SAVE_APPBAR_TITLE] (state, value) {
    state.title = value
  }
}

export default mutations