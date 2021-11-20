import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => {
      return {
        message: 'hogehoge',
      }
    },
  })
}

export default createStore
