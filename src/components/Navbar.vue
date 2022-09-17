<template>
	<nav>
    <div class="nav-wrapper">
		<ul>
			<a class="waves-effect waves-light btn"> {{ msg }}</a>
		</ul>
    </div>
  </nav>
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
</style>
