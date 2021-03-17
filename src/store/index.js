import { createStore } from 'vuex'

export default createStore({
  state: {
    isLight: true
  },
  mutations: {
  },
  actions: {
    changeLight(context, light) {
      context.state.isLight = light
    }
  },
  modules: {
  }
})
