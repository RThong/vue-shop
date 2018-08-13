<template>
	<div id="app">
		<!-- 每个路由对应的页面有多个组件组成，header footer是单独组件，有的路由不会显示footer和header -->
		<transition name="slide-up">
			<Header v-show="headerIsShow" :isSearchPage="false">{{title}}</Header>
		</transition>
		<!-- 主要view渲染区域 -->
		<div class="app-view-wrapper">			
			<transition :name="isFirstLoad ? '': transitionName ">
				<keep-alive :exclude="['login','detail', 'search', 'result']">
					<router-view></router-view>
				</keep-alive>
			</transition>
		</div>
		
		<transition name="slide-down">
			<router-view name="footer"></router-view>		
		</transition>

		<!-- 购物车footer -->
		<div v-if="resultIsShow" class="result">
			<div class="result-box left-box">
				<p>总{{cartCount}}件 金额：</p>
				<p><span class="price">{{cartTotalPrice}}</span> 元</p>
			</div>
			<div class="result-box middle-box">
				<router-link to="category">继续购物</router-link>
			</div>
			<div class="result-box right-box">
				<a @click="goBuy">去结算</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				isFirstLoad: true,
				a: ''
			}
		},
		mounted() {
		},
		components: {
			Header: () => import(/* webpackChunkName: "header" */ './components/header/header.vue')
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
			cartList() {
				return this.$store.state.cartList
			},
			cartCount() {
				return this.$store.getters.cartCount
			},
			cartTotalPrice() {
				return this.$store.getters.cartTotalPrice
			}
		},
		watch: {
			//底部nav切换,根据sessionstorage中存的urlhstory判断是否访问过这个路由，来进行不同的切换动画
			'$route' (to, from) {
				if(from.matched.length !== 0){
					this.isFirstLoad = false
				}

				//维护一个浏览记录栈来处理回退前进动画
				this.$store.commit('setUrlStack', to.path)

				//nav footer还是用index去区别不同动画效果
				if(to.meta.navIndex !== 'undefined') {
					this.$store.commit('setNavIndex', to.meta.navIndex)
				}


				
				// this.$store.commit('setUrlQueue', to.path)	
				// let urlHistory = sessionStorage.getItem('urlHistory')
				// if(to.meta.key) {

				// }
				// if (from.meta.key) {
				// 	if (to.meta.key() > from.meta.key()) {
				// 		this.$store.commit('setPullPageSlide', 1)
				// 	} else {
				// 		this.$store.commit('setPullPageSlide', -1)
				// 	}
				// }

				// if(from.meta.navIndex !== undefined && to.meta.navIndex !== undefined){
				// 	const fromIndex = from.meta.navIndex
				// 	const toIndex = to.meta.navIndex

				// 	// if(urlHistory.indexOf(to.path) === -1){
				// 	// 	urlHistory += to.path
				// 	// }
				// 	// sessionStorage.setItem('urlHistory', urlHistory)
				// 	// console.log(fromIndex,toIndex)

				// 	this.$store.commit('setNavIndex', toIndex)

				// 	if(toIndex < fromIndex)	{
				// 		this.$store.commit('setPullPageSlide', -1)
				// 	}
				// 	else if(toIndex > fromIndex) {
				// 		this.$store.commit('setPullPageSlide', 1)
				// 	}
				// 	return
				// }
				
			}
		},
		methods: {
			goBuy() {
				let checkedList = []
				this.cartList.map(item => {
					if(item.checked === 1){
						checkedList.push(item)
					}
				})
				if(checkedList.length === 0){
					this.$toast('请勾选需要结算的商品', {
						type: 'fail'
					})
				}
				else{
					//订单页
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	$mainColor: #ed5b00;
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