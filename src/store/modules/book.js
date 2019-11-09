const book = {
  state: {
    book_test: 10
  },
  mutations: {
    'SET_BOOK_TEST': (state, newTest) => {
      state.book_test = newTest
    }
  },
  actions: {
    setBookTest: ({ commit, state }, newTest) => {
      commit('SET_BOOK_TEST', newTest)
    }
  }
}

export default book
