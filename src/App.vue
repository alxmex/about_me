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
.v-main{
background-color: #141516;
}
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans");

</style>
