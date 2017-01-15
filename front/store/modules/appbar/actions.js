import * as mutationTypes from './mutation-type'

export const saveAppbarTitle = ({ commit }, data) => {
  commit(mutationTypes.SAVE_APPBAR_TITLE, data)
}