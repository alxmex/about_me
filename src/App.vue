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
html,
body{
width:100%;
height: 100%;
overflow-x:hidden;
}

.v-main{
	width: 100%;
	height: 100%;
	background-color: #141516;
	overflow-x: hidden;
	overflow-y: hidden;
}
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Zilla+Slab:wght@700&display=swap');
</style>
