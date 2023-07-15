import { createStore } from 'vuex'

const url = "https://lc1007.github.io/portfolio-json-data/data.json";

export default createStore({
  state: {
    jsonData: []
  },
  getters: {
  },
  mutations: {
    setData(state, data){
      state.jsonData = data
    }
  },
  actions: {
    async getData({commit}){
      const fetchedData = await fetch(url)
      const {projects} = await fetchedData.json()
      commit('setData', projects) 
    }
  },
  modules: {
  }
})
