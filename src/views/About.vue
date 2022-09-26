<template>
	<div>
		<About_me> </About_me>
		<Presence> </Presence>
	</div>
	
</template>

<script lang="ts">
import Vue from 'vue'
import About_me from '../components/About_me.vue'
import Presence from '../components/Presence.vue'

export default Vue.extend({
  name: 'About-me',
  components: {
  About_me,
  Presence
  },
  })
</script>
<style lang="scss" scoped>

</style>
