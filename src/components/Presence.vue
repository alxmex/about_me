<template>
	<div class="section">
		<em class="header1"><h2>Links</h2></em>
		<ul>
			<li> <a href="https://github.com/alexandermehks">Github</a> </li>
			<li> <a href="https://stackoverflow.com/users/14231200/iiamalex">Stackoverflow</a> </li>
			<li> <a href="https://se.linkedin.com/in/alexander-mehks-09067797">Linkedin</a> </li>
		</ul>
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

ul{
	list-style-type: disclosure-closed;
	color: #a6a28c;
	font-family: 'Zilla Slab', serif;
	font-size: 1.3em;
	padding: .5em;
}

.header1{
	font-size: 1.2em;
	font-family: 'Zilla Slab', serif;
	color: #FF6F33;
}

p{
	color: #a6a28c;
	font-size:17px;
}

.section{
	/*border: 1px solid red;
	*/
	line-height: 2; 
	width: 45%;
	margin-top: 1em;
	margin-left: 25%;
	font-family: 'Lato', sans-serif;
}

@media screen and (max-width: 430px) {
	.section{
          width: 85%;
          margin-left: 10%;
         }
}

</style>
