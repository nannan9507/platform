import * as mutationTypes from './mutation-type'

const mutations = {
  [mutationTypes.SAVE_PAPER_VALUE] (state, value) {
    state.value = value
  }
}

export default mutations