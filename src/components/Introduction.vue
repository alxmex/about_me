<template>
	<span class="container">
		<div class="title">
			<em><h2>!Hey, I'm Alex</h2></em>
		</div>
		<div class="one"><em> I am a developer</em></div>
		<div class="one"><em> I like computers... </em></div>
		<div class="one"><em> and coffee!</em></div>
	</span>
</template>

<script>
export default {
  name: 'Introduction-m',
  props: { 
	msg: String

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container{
	display: flex;
	position: relative;
	margin: auto;
	height: 20em;
	width: 30em;
	top: 6em;
	flex-direction: column;
}
h2{
	font-family: 'Zilla Slab', serif;
	font-size: 2em;
}
.title{
	display: flex;
	justify-content: center;
	padding: 3em;
	color: #FF6F33;
}
.one{
	line-height: 2;
	text-align: center;
	justify-content: center;
	font-size: 3em;
	color: #a6a28c;
}

@media screen and (max-width: 430px) {
	.title{
		display: flex;
		justify-content: flex-start;
		padding: 3em;
		color: #FF6F33;
	}
	.one{
		font-size: 2em;
		text-align: center;
		margin-right: 3em;
	}

}
</style>
