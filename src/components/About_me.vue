<template>
	<div class="aboutme">
		<em class="header1"><h2> About me </h2></em>
		<em> <p> Hey I am Alex! A Swedish based developer who enjoys creating fast, secure and robust software.</p></em>
		
		<em> <p> I have always believed in open-source, and community driver software development. Thus, all of my software is open-source and forever will be. Both for personal development, and to contribute to creating great software and making everyday easier for people using it.</p></em>
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
	
.aboutme{
	#border: 1px solid red;
	line-height: 2;
	width: 45%;
	margin-left: 25%;
	font-family: 'Fira Sans', sans-serif;
}

.header1{
	color: #FF6F33;
}

p{
color: #a6a28c;
}



</style>
