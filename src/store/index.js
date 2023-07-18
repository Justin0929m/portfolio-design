import { createStore } from 'vuex'

const url = "https://justin0929m.github.io/portfolio-data/data.json";

export default createStore({
  state: {
    jsonData: [],
    workData: [],
    eduData: [],
    skills: []
  },
  getters: {
  },
  mutations: {
    setData(state, data){
      state.jsonData = data
    },
    setWork(state, data){
      state.workData = data
    },
    setEdu(state, data){
      state.eduData = data
    },
    setSkills(state, data){
      state.skills = data
    }
  },
  actions: {
    async getData({commit}){
      const fetchedData = await fetch(url)
      const {projects} = await fetchedData.json()
      commit('setData', projects) 
    },
    async getWork({commit}){
      const fetchedData = await fetch(url)
      const {work} = await fetchedData.json()
      commit('setWork', work)
    },
    async getEdu({commit}){
      const fetchedData = await fetch(url)
      const {education} = await fetchedData.json()
      commit('setEdu', education) 
    },
    async getSkills({commit}){
      const fetchedData = await fetch(url)
      const {skills} = await fetchedData.json()
      commit('setSkills', skills)
    }
  },
  modules: {
  }
})
