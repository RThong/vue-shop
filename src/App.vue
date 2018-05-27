<template>
	<div id="app">
		<div class="app-view-wrapper">
			<transition :name="transitionName">
				<router-view></router-view>
			</transition>
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				// firstShow: false
				transitionName: ''
			}
		},
		mounted() {
			// setTimeout(() => {
			// 	this.firstShow = true
			// },400)	
		},
		components: {
			Footer: () => import('./components/footer/footer.vue')
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