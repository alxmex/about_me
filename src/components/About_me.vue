<template>
	<div class="aboutme">
		<em class="header1"><h2> About me </h2></em>
		<em> <p> Hey I am Alex! Swedish based developer who 
		enjoys creating fast, secure and robust software.</p></em>
		<em> <p> I have always believed in open-source, 
		and community driven software development. 
		I want to contribute in creating great software 
		and making everyday easier, for everyone. 
		I believe it's important to allow other developers 
		to inspect your code, modify, and together improve 
		it to the better.</p></em>
		<figure>
		<v-img max-height="300" 
		max-width="250" 
		src="/images/me_restaurant_tapas.JPG"></v-img>
		</figure>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'About-me',
  components: {
  },
  })
</script>
<style lang="scss" scoped>
	

.header1{
	font-size: 1.2em;
	font-family: 'Zilla Slab', serif;
	color: #FF6F33;
}

p{
	color: #a6a28c;
	font-size:16px;
}
.aboutme{
	/*border: 1px solid red;
	*/
	line-height: 2; 
	width: 45%;
	margin-top: 1em;
	margin-left: 25%;
	font-family: 'Lato', sans-serif;
}



</style>
