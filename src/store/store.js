import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
      photos:[],
      pages:0,
      videos:[],
      vidPages:0
    },
    mutations: {
      init (state,payloads) {
        state[payloads.type]=payloads.value
      }
    }
  })