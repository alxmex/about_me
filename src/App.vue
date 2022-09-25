<template>
  <v-app>
    <v-main>
		<Navbar> </Navbar>
      <router-view/>
    </v-main>
		<Footer></Footer>
  </v-app>

</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'





export default Vue.extend({
  name: 'App',
  components: {
	Navbar,
	Footer
  },

  data: () => ({
    //
  }),
});
</script>

<style lang="scss" scoped>

.v-main{
	background-color: #141516;
	width: 100%;
    min-height: 200vh; // add this rule
	overflow: auto;
}

@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Zilla+Slab:wght@700&display=swap');
</style>
