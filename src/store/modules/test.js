import { ACTION_ASYNC_COMMIT } from '@/store/actionTypes'

const test = {
  state: {
    count: 1
  },
  getters: {
    count: state => state.count
  },
  mutations: {
    [ACTION_ASYNC_COMMIT](state, addNum) {
      state.count = state.count + addNum
    }
  },
  actions: {
    actionAsyncCommit({ commit }) {
      setTimeout(() => {
        commit(ACTION_ASYNC_COMMIT, 999)
      }, 1000)
    }
  }
}

export default test
