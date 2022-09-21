<template>
    <v-app-bar flat color="rgb(67,63,63)" dark>
		<span id="tho">
			<v-btn color="rgb(67,63,63)">Home</v-btn>
			<v-btn color="rgb(67,63,63)">Projects</v-btn>
			<v-btn color="rgb(67,63,63)">Blog</v-btn>
			<v-btn color="rgb(67,63,63)">About</v-btn>
			<v-btn color="rgb(67,63,63)">Contact</v-btn>
		</span>
    </v-app-bar>

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
	margin-left: 10em;
	width: auto;
	justify-content: center;

}
#tho{
	margin-top: 4em;
	margin-right: 5em;
	width: auto;
	display: flex;
}

.v-btn{
	background-color: rgb(67,63,63);
	margin:1em;
}

</style>
