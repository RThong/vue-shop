<template>
	<div class="app-view">
		<Header :isSearchPage="true"/>
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
			// goBack() {
			// 	// this.$store.commit('setPullPageSlide', -1)
			// 	// this.$router.push('/')
			// 	this.$router.go(-1)
			// }			
		},
		beforeRouteLeave(to, from, next) {
			if(to.fullPath === "/"){
				this.$store.commit('setPullPageSlide', -1)
			}
			next()
		}
	}
</script>
<style lang="scss" scoped>
	
</style>