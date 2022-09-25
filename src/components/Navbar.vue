<template>
	<span>
		<div id="tho">
			<router-link to="/"><v-btn color="rgb(67,63,63)">Home</v-btn></router-link>
			<router-link to="/"><v-btn color="rgb(67,63,63)">Projects</v-btn></router-link>
			<router-link to="/"><v-btn color="rgb(67,63,63)">Blog</v-btn></router-link>
			<router-link to="/about"><v-btn color="rgb(67,63,63)">About</v-btn></router-link>
			<router-link to="/"><v-btn color="rgb(67,63,63)">Contact</v-btn></router-link>
		</div>
	
		<Slide id="hamburger" right :closeOnNavigation="true">
			<router-link to="/"><v-btn color="rgb(67,63,63)">Home</v-btn></router-link>
			<router-link to="/"><v-btn color="rgb(67,63,63)">Projects</v-btn></router-link>
			<router-link to="/"><v-btn color="rgb(67,63,63)">Blog</v-btn></router-link>
			<router-link to="/about"><v-btn color="rgb(67,63,63)">About</v-btn></router-link>
			<router-link to="/"><v-btn color="rgb(67,63,63)">Contact</v-btn></router-link>
		</Slide>



	</span>

</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
  name: 'Navbar-m',
  props: { 
	msg: String

  },
  components: {
Slide
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


.v-app-bar{
	display: flex;
	width: auto;

}
#tho{
	display: flex;
	margin-left: 10em;
	margin-top: 2em;
	margin-right: 5em;
	width: auto;
	justify-content: center;
}

.v-btn{
	color: #a6a28c;
	margin:1em;
}

Slide{
	background-color: red;
}

@media screen and (max-width: 753px) {
	#tho{
		display: none;
	}
	#hamburger{
		display: inline;
		position: static;
		margin-left: 42em;
		padding: 2em;
	}
}

@media screen and (min-width: 754px) {
	#tho{
		display: inline;
	}
	#hamburger{
		display: none;
	}

}

</style>
