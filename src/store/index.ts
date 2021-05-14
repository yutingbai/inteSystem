/* eslint-disable */
import Vue from 'vue';
import VueCookie from 'vue-cookies';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(VueCookie);
export default new Vuex.Store({
  state: {
        userName:VueCookie.get('username'),
        userHead: VueCookie.get('userPic'),
        userId: VueCookie.get('userid')
        // userName: '',
        // userHead: '',
        // userId: '',
  },
  getters: {
    userName: (state) => state.userName,
    userHead: (state) => state.userHead,
    userId: (state) => state.userId,
},
  mutations: {
    SET_USERMSG(state, data) {
      state.userName = data.userName;
      state.userHead = data.userHead;
      state.userId = data.userId;
  },
  LOGOUT(state, data) {
      state.userName = '';
      state.userHead = '';
      state.userId = '';
  },
  },
  actions: {
  },
  modules: {
  },
});
