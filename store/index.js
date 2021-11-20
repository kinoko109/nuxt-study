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
    actions: {
      updateMessageAction(context, payload) {
        context.commit('updateMessage', payload)
      },
    },
  })
}

export default createStore
