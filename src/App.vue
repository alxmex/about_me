<template>
  <v-app>
    <v-main>
		<Navbar> </Navbar>
      <router-view/>
    </v-main>
  </v-app>

</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from './components/Navbar.vue'





export default Vue.extend({
  name: 'App',
  components: {
	Navbar
  },

  data: () => ({
    //
  }),
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Crimson+Pro");

.v-main{
background-color: rgb(67,63,63)

}

</style>
