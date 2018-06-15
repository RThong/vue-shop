<template>
	<div id="app">
		<!-- 跟/category和/cart不是一个动画  要单独组件 -->
		<transition name="slide-up">
			<Header v-show="headerIsShow" :isSearchPage="false">{{title}}</Header>
		</transition>
		<!-- 用于/search / 进行路由渲染 -->
		<div class="app-view-wrapper">
			<transition :name="transitionName">
				<keep-alive exclude="login">
					<router-view></router-view>
				</keep-alive>
			</transition>
			<transition name="slide-down">
				<router-view name="footer" v-show="footerIsShow" :mode="footerIsShow?'out-in':''"></router-view>
			</transition>
		</div>
		<div v-if="resultIsShow" class="result">
			<div class="result-box left-box">
				<p>总{{cartCount}}件 金额：</p>
				<p><span class="price">{{cartTotalPrice}}</span> 元</p>
			</div>
			<div class="result-box middle-box">
				<router-link to="category">继续购物</router-link>
			</div>
			<div class="result-box right-box">
				<router-link to="">去结算</router-link>
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
		},
		components: {
			Header: () => import('./components/header/header.vue')
		},
		computed: {
			transitionName() {
				return this.$store.state.pullPageSlide
			},
			title() {
				return this.$store.state.headerText
			},
			headerIsShow() {
				return this.$store.state.headerIsShow
			},
			resultIsShow() {
				return this.$store.state.resultIsShow
			},
			footerIsShow() {
				return this.$store.state.footerIsShow
			},
			cartCount() {
				return this.$store.getters.cartCount
			},
			cartTotalPrice() {
				return this.$store.getters.cartTotalPrice
			}
		},
		watch: {
			//匹配底部nav改变路由
			'$route' (to, from) {
				if(from.matched.length === 0 || from.meta.navIndex === undefined || to.meta.navIndex === undefined){
					return
				}
				const fromIndex = from.meta.navIndex
				const toIndex = to.meta.navIndex

				console.log(fromIndex,toIndex)

				this.$store.commit('setNavIndex', toIndex)

				if(toIndex < fromIndex)	{
					this.$store.commit('setPullPageSlide', -1)
				}
				else if(toIndex > fromIndex) {
					this.$store.commit('setPullPageSlide', 1)
				}
			}
		},
		methods: {
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
	.result{
		height: 52px;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999;
		background: #fff;
		display: flex;
		font-size: 14px;
		.result-box{
			flex: 1;
			a{
				display: block;
				height: 100%;
			}
		}
		.left-box{
			display: flex;
			color: #999;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: 12px;
			.price{
				font-size: 22px;
				color: $mainColor;
				font-weight: bolder;
			}
		}
		.middle-box{
			background: #f4f4f4;
			text-align: center;
			line-height: 52px;		
			a{				
				color: #333;
			}
		}
		.right-box{
			background: $mainColor;
			text-align: center;
			line-height: 52px;		
			a{				
				color: #fff;
			}
		}
	}
</style>