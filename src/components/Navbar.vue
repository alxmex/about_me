<template>
		<div id="tho">
			<a href="/"><v-btn color="rgb(67,63,63)">Home</v-btn></a>
			<a href="/"><v-btn color="rgb(67,63,63)">Projects</v-btn></a>
			<a href="/"><v-btn color="rgb(67,63,63)">Blog</v-btn></a>
			<a href="/https:/youtube.com"><v-btn color="rgb(67,63,63)">About</v-btn></a>
			<a href="/"><v-btn color="rgb(67,63,63)">Contact</v-btn></a>
		</div>

</template>

<script>
export default {
  name: 'Navbar-m',
  props: { 
	msg: String

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
	margin-top: 4em;
	margin-right: 5em;
	width: auto;
	justify-content: center;
}

.v-btn{
	color: #a6a28c;
	margin:1em;
}

</style>
