<template>
  <h3>{{ finalCounter }}</h3>
  <h3>{{ counter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    counter() {
      // return this.$store.state.counter;
      // return this.$store.getters.finalCounter;
      return this.$store.getters.normalizedCounter;
    },
    ...mapGetters(['finalCounter', 'normalizedCounter']),
  },
};
</script>
