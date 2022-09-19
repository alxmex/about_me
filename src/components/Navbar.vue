<template>
    <div class="nav-wrapper">
    <v-app-bar color="Grey" class="rounded-xl" dark>
		<span id="tho">
			<v-btn color="grey darken-3"> Primary </v-btn>
			<v-btn color="grey darken-3"> Primary </v-btn>
			<v-btn color="grey darken-3"> Primary </v-btn>
			<v-btn color="grey darken-3"> Primary </v-btn>
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
	margin-top: .5em;
}

.v-app-bar{
	display: flex;
	margin: 1em;
	justify-content: center;

}
#tho{
	position: relative;
	width: 49em;
	display: flex;
	justify-content: space-between;
}

</style>
