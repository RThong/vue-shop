<template>
	<div id="app">
		<!-- <div class="app-view-wrapper">
			<transition :name="transitionName">
				<router-view></router-view>
			</transition>
		</div>
		<Footer></Footer> -->
		<Header :isSearchPage="false">分类</Header>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				transitionName: '',
			}
		},
		mounted() {	
		},
		components: {
			Footer: () => import('./components/footer/footer.vue'),
			Header: () => import('./components/header/header.vue'),
		},
		computed: {
			// show() {
			// 	return this.$store.state.footerIsShow
			// }
		},
		watch: {
			'$route' (to, from) {
				if(from.matched.length === 0){
					return
				}
				const fromIndex = from.meta.navIndex
				const toIndex = to.meta.navIndex				
				this.transitionName = toIndex < fromIndex ? 'slide-right' : 'slide-left'
			}
		}
	}
</script>
<style lang="scss" scoped>
	#app{
		height: 100%;
		width: 100%;
	}
	.app-view-wrapper{
		position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    max-width: 720px;
    margin: 0 auto;
	}
</style>