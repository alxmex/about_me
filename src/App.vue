<template>
  <div id="app">
    <LandingPage/>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'

export default {
  name: 'App',
  components: {
	LandingPage
    
  }
}
</script>

<style>
	body{
		background-color: rgb(60, 60, 60);
	}
</style>
