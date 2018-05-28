<template>
	<div id="app">
		<!-- <div class="app-view-wrapper">
			<transition :name="transitionName">
				<router-view></router-view>
			</transition>
		</div>
		<Footer></Footer> -->
		<!-- <Header :isSearchPage="false">分类</Header> -->
		<div class="app-view-wrapper">
			<transition :name="transitionName">
				<router-view></router-view>			
			</transition>
			<router-view name="footer"></router-view>
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
		},
		components: {
			Footer: () => import('./components/footer/footer.vue'),
			Header: () => import('./components/header/header.vue'),
		},
		computed: {
			transitionName() {
				return this.$store.state.pullPageSlide
			}
		},
		watch: {
			'$route' (to, from) {
				if(from.matched.length === 0){
					return
				}
				const fromIndex = from.meta.navIndex
				const toIndex = to.meta.navIndex
				console.log(fromIndex,toIndex)	
				if(toIndex < fromIndex)	{
					this.$store.commit('setPullPageSlide', -1)
				}
				else if(toIndex > fromIndex) {
					this.$store.commit('setPullPageSlide', 1)
				}
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