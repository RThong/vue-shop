<template>
	<div class="app-view app-view-with-footer app-view-with-header category-wrapper">
		分类页面
	</div>
</template>
<script>
	export default {
		data(){
			return {
				
			}
		},
		mounted() {
			console.log(this.$store.state.headerIsShow)
			this.$store.commit('setHeaderText', '分类')
			if(!this.$store.state.headerIsShow){
				this.$store.commit('setHeaderIsShow', true)
			}
			
		},
		methods: {
		},
		beforeRouteLeave(to, from, next) {
			if(to.fullPath !== "/category" && to.fullPath !== "/cart"){
				this.$store.commit('setHeaderIsShow', false)
			}
			next()
		}
	}
</script>
<style lang="scss" scoped>
	.category-wrapper{
		height: 7000px;
	}
</style>