import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import * as user from '@/store/modules/user';
import * as task from '@/store/modules/task';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    task,
  },
  plugins: [createPersistedState()],
})
