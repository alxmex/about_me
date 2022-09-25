<template>
	<div class="container">
		<div class="footer">
			<p>Created by Alexander Mehks</p>
			<p>Copyright © Alexander Mehks 2022.</p>
		</div>
			
	</div>
</template>

<script>
export default {
  name: 'footer-m',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.container{
	background-color: #141516;
	position: relative;
	width: 100%;
	height: 11em;
}
.footer{
	flex-direction: column;
	display: flex;
	position: relative;
	width: 50%;
	margin: auto;
	margin-top: .5em;
	height: 5em;
}

p{
	color: #a6a28c;
}

</style>

