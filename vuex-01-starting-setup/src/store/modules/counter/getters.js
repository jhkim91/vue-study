export default {
  finalCounter(state) {
    return state.counter * 2
  },
  normalizedCounter(state, getters) {
    const finalCounter = getters.finalCounter;
    return finalCounter < 0 ? 0 : finalCounter > 100 ? 100 : finalCounter
  },
}