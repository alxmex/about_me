<template>
    <div class="nav-wrapper">
    <v-app-bar color="rgb(67,63,63)" dark>
		<span id="tho">
			<v-btn color="rgb(67,63,63)">A</v-btn>
			<v-btn color="rgb(67,63,63)">B</v-btn>
			<v-btn color="rgb(67,63,63)">C</v-btn>
			<v-btn color="rgb(67,63,63)">D</v-btn>
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
	margin-top: 10em;
	background-color: rgb(67,63,63)
}

.v-app-bar{
	display: flex;
	justify-content: center;

}
#tho{
	position: relative;
	width: 49em;
	display: flex;
	justify-content: space-between;
}

.v-btn{
background-color: rgb(67,63,63);
}

</style>
