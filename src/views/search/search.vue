<template>
	<div class="app-view app-view-with-header">
		<Header @back="goBack" :isSearchPage="true"/>
	</div>
</template>
<script>
	import Header from '../../components/header/header.vue'
	export default {
		data(){
			return {
				
			}
		},
		mounted() {
		},
		components: {
			Header
		},
		methods: {
			goBack() {
				this.$store.commit('setPullPageSlide', -1)
				this.$router.push('/')
			}			
		}
	}
</script>
<style lang="scss" scoped>
	
</style>