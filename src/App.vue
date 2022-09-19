<template>
  <v-app>
    <v-app-bar
      app
      color="Black"
      dark>

    <v-btn color="grey darken-3">
      Primary
    </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
