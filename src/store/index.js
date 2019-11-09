import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/store/getters'
import book from '@/store/modules/book'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: 1
  },
  mutations: {
    'SET_TEST': (state, newTest) => {
      state.test = newTest
    }
  },
  actions: {
    setTest: ({ commit, state }, newTest) => {
      commit('SET_TEST', newTest)
    }
  },
  modules: {
    book
  },
  getters
})
