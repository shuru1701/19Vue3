import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sex:"",
    checkboxdata:[],
    text:""
  },
  mutations: {
    SexSelect(state,sex){
         state.sex=sex;
    },
      checkHobby(state,checkboxdata){
         state.checkboxdata.push(checkboxdata);
      },
      Detailtext(state,text){
         state.text=text;
      }
  },
  actions: {
  },
  modules: {
  }
})
