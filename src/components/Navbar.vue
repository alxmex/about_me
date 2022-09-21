<template>
    <div class="nav-wrapper">
    <v-app-bar flat color="rgb(67,63,63)" dark>
		<span id="tho">
			<v-btn color="rgb(67,63,63)">Home</v-btn>
			<v-btn color="rgb(67,63,63)">Projects</v-btn>
			<v-btn color="rgb(67,63,63)">Blog</v-btn>
			<v-btn color="rgb(67,63,63)">About</v-btn>
			<v-btn color="rgb(67,63,63)">Contact</v-btn>
		</span>
    </v-app-bar>

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

.nav-wrapper{
	border: 1px solid red;
	margin-right: 5em;
	width: 75em;
	margin-top: 4em;
	background-color: rgb(67,63,63)
}

.v-app-bar{
	border: 1px solid green;
	display: flex;
	margin-left: 10em;
	width: auto;
	justify-content: center;

}
#tho{
	width: 60em;
	display: flex;
	justify-content: right;
}

.v-btn{
	background-color: rgb(67,63,63);
	margin:1em;
}

</style>
