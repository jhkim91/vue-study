<template>
  <button @click="login" v-if="!userIsAuthenticated">login</button>
  <button @click="logout" v-else>Logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['userIsAuthenticated']),
  },
  methods: {
    ...mapActions(['login', 'logout']),
  },
};
</script>
