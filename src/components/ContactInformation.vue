<template>
	<div class="section">
		<em class="header1"><h2>Contact</h2></em>
		<p> Please use one of the methods below when contacting me, and please do contact me! I'm always up for a chat. I will get back to you as soon as possible. </p>
		<p> // Alex </p>

		<ul>
			<li> Email: <a href="mailto:erks1@protonmail.com"><span> erks1@protonmail.com  </span> </a></li>
			<li> Telegram: <a href="https://t.me/alneoo"><span> @alneoo </span> </a></li>
			<li> PGP: <a href="key.gpg"><span> Download Key </span> </a></li>
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

a{
	text-decoration: none;
	font-size: .9em;

}
span{
	color: #FF6F33;
}


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
	ul{	
		font-size: 1em;

	}
}

@media screen and (max-width: 662px) {
	ul{	
		font-size: 1em;

	}
}

</style>
