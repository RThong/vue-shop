<template>
	<div class="app-view app-view-with-footer app-view-with-header cart-wrapper">
		<div class="cart-container">
			<div class="nologin">
				<router-link to="">
					<span>登录后享受更多优惠</span>
					<span class="login-btn arrow">去登录</span>
				</router-link>				
			</div>
			<div class="noitems">
				<router-link to="/">
					<span class="noitems-text">购物车还是空的</span>
					<span class="go-btn">去逛逛</span>
				</router-link>
			</div>
			<div class="recommend-contianer">
				<div class="recommend-top-img">
					<img v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg'" alt="">
				</div>
				<list-two v-for="item in 6" :key="item" src1="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9fbc4df86c8377ff7411c9942c003fff.jpg?thumb=1&w=360&h=360" src2="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9fbc4df86c8377ff7411c9942c003fff.jpg?thumb=1&w=360&h=360">
				<span slot="l-name">小米净水器（厨下式）</span>
				<!-- <span slot="l-intro">400加仑大流量，隐藏安装</span> -->
				<span slot="l-price">¥1799</span>
				<span slot="l-price-old">¥1999</span>
				<span slot="r-name">小米净水器（厨下式）</span>
				<!-- <span slot="r-intro">400加仑大流量，隐藏安装</span> -->
				<span slot="r-price">¥1799</span>
				<span slot="r-price-old">¥1999</span>
			</list-two>
			<list-two src1="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a114635f9596f33b74632bb1ac3c12ac.jpg?thumb=1&w=360&h=360" src2="https://i8.mifile.cn/v1/a1/28bf863f-1c2d-52b8-a2e5-186dfcbaad1e!360x360.webp">
				<span slot="l-name">小米净水器（厨下式）</span>
				<span slot="l-intro">400加仑大流量，隐藏安装</span>
				<span slot="l-price">¥1799</span>
				<span slot="l-price-old">¥1999</span>
				<span slot="r-name">小米净水器（厨下式）</span>
				<span slot="r-intro">400加仑大流量，隐藏安装</span>
				<span slot="r-price">¥1799</span>
				<span slot="r-price-old">¥1999</span>
			</list-two>
			</div>
		</div>	
	</div>
</template>
<script>
	import ListTwo from '../../components/list-two/list-two.vue'
	export default {
		data(){
			return {
				
			}
		},
		components: {
			ListTwo
		},
		mounted() {
			console.log(this.$store.state.headerIsShow)
			this.$store.commit('setHeaderText', '购物车')
			if(!this.$store.state.headerIsShow){
				this.$store.commit('setHeaderIsShow', true)
			}
		},
		activated() {
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
		overflow-y: auto;
	}
	.cart-container{
		.nologin{		
			padding: 0 30px 0 17px;
			background: #fff;
			a{
				height: 70px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #000;
				position: relative;
				.login-btn{
					color: #666;
					font-size: 12px;
					
				}
			}
		}
		.noitems{
			background: #ebebeb;
			padding: 0 17px;
			text-align: center;
			a{
				display: block;
				padding: 10px;
				font-size: 12px;
				.noitems-text{
					display: inline-block;
					background-image: url(../../assets/images/empty-cart.png);
					background-size: auto 100%;
					background-repeat: no-repeat;
					line-height: 41px;
					padding-left: 50px;
					padding-right: 10px;
					color: #aaa;
				}
				.go-btn{
					display: inline-block;
					border: 1px solid rgba(0,0,0,.15);
					height: 24px;
					line-height: 24px;
					padding: 0 12px;
					color: rgba(0,0,0,.87);					
				}
			}
		}
	}
</style>