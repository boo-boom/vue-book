import { SET_FILE_NAME } from '@/store/actionTypes'

const book = {
  state: {
    fileName: ''
  },
  mutations: {
    [SET_FILE_NAME](state, fileName) {
      state.fileName = fileName
    }
  },
  actions: {
    setFileName: ({ commit }, fileName) => {
      return commit(SET_FILE_NAME, fileName)
    }
  }
}

export default book
