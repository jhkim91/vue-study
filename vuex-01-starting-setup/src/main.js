import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    }
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 2000)
    },
    increase(context, payload) {
      context.commit('increase', payload)
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2
    },
    normalizedCounter(state, getters) {
      const finalCounter = getters.finalCounter;
      return finalCounter < 0 ? 0 : finalCounter > 100 ? 100 : finalCounter
    },
  }
}

const store = createStore({
  modules: {
    numbers: counterModule
  },
  state() {
    return {
      isLoggedIn: false
    }
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth
    },
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true })
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false })
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn
    }
  }
})

const app = createApp(App);

app.use(store)

app.mount('#app');
