import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0
    }
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2
    },
    increase(state, payload) {
      console.log('payload', payload)
      state.counter = state.counter + payload.value;
    }
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 2000)
    },
    increase(context, payload) {
      context.commit('increase', payload)
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2
    },
    normalizedCounter(state, getters) {
      const finalCounter = getters.finalCounter;
      return finalCounter < 0 ? 0 : finalCounter > 100 ? 100 : finalCounter
    }
  }
})

const app = createApp(App);

app.use(store)

app.mount('#app');
