<template>
	<div class="app-view app-view-with-footer app-view-with-header">
		<div class="cart-wrapper">
			<div class="cart-container">
				购物车页面
			</div>
			
		</div>
		
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
			this.$store.commit('setHeaderText', '购物车')
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
	.cart-wrapper{
		position: absolute;
		left: 0;
		right: 0;
		top: 50px;
		bottom: 52px;
		overflow-y: auto;
		.cart-container{
			height: 7000px;
		}
	}
</style>