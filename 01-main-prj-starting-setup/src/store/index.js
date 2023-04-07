import { createStore } from 'vuex'

import coachesMoule from './modules/coaches'

const store = createStore({
  modules: {
    coaches: coachesMoule
  }
})

export default store;