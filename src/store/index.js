import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showList: false,
  },
  mutations: {
    changeList(state) {
      state.showList = !state.showList
      console.log(state.showList);
    }
  },
  getters: {
    showListState(state) {
      return state.showList
    }
  }

})
