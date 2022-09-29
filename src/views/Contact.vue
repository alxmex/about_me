
<template>
	<div>
	<ContactInformation></ContactInformation>
	</div>
	
</template>

<script lang="ts">
import Vue from 'vue'
import ContactInformation from '../components/ContactInformation.vue'

export default Vue.extend({
  name: 'About-me',
  components: {
  ContactInformation,
  },
  })
</script>
<style lang="scss" scoped>

</style>
