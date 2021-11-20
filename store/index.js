import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => {
      return {
        message: 'hogehoge',
      }
    },
    mutations: {
      updateMessage: (state) => {
        state.message = 'update!'
      },
    },
  })
}

export default createStore
