import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => {
      return {
        message: 'hogehoge',
      }
    },
    mutations: {
      updateMessage: (state, payload) => {
        state.message = payload
      },
    },
  })
}

export default createStore
