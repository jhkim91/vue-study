<template>
  <button @click="increment">Add increment 1</button>
  <button @click="increase({ value: 10 })">Add increase 1</button>
  <button @click="addOne">Add addOne 1</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    addOne() {
      // this.$store.commit('increment');
      this.$store.dispatch('numbers/increment');
    },
    ...mapActions('numbers', ['increment', 'increase']),
  },
};
</script>
