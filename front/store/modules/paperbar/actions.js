import * as mutationTypes from './mutation-type'

export const savePaperValue = ({ commit }, data) => {
  commit(mutationTypes.SAVE_PAPER_VALUE, data)
}