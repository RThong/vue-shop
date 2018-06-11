<template>
	<div class="app-view app-view-with-footer app-view-with-header cart-wrapper">
		<div class="cart-container">
			<div v-if="!user" class="nologin">
				<router-link to="login">
					<span>登录后享受更多优惠</span>
					<span class="login-btn arrow">去登录</span>
				</router-link>				
			</div>
			<div v-if="cartList.length === 0" class="noitems">
				<router-link to="/">
					<span class="noitems-text">购物车还是空的</span>
					<span class="go-btn">去逛逛</span>
				</router-link>
			</div>
			<div v-else class="items">
				<cart-card v-for="(item,index) in cartList" :name="item.name" :price="item.price" :img="item.img" :num="item.num" @sub="inputSub(item)" @add="inputAdd(item)" :key="index"></cart-card>
			</div>
			<div class="recommend-contianer">
				<div class="recommend-top-img">
					<img v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg'" alt="">
				</div>
				<div class="card-list">
					<card v-for="(item,index) in productList" :name="item.name" :price="item.price" :price-old="item.oldPrice" :intro="item.intro" :src="item.img" :tag="item.tag" :key="index"></card>
				</div>
			</div>
		</div>	
	</div>
</template>
<script>
	import cartCard from '../../components/cart-card/cart-card.vue'
	import Card from '../../components/card/card.vue'
	import db from '../../../app.config'
	import userMixin from '../../mixin/userMixin'
	export default {
		mixins: [userMixin],
		data(){
			return {
				cartList: [],
				// cartList: [
					// {
					// 	name: '小米6X 全网通版 4GB内存 64GB 冰川蓝',
					// 	price: 1599,
					// 	img: 'https://i1.mifile.cn/a1/pms_1524621078.90015819!180x1800.jpg',
					// 	num: 2
					// }
				// ],
				productList: [],
			}
		},
		components: {
			cartCard,
			Card
		},
		mounted() {
			// if(sessionStorage['user']){
			// 	this.$store.commit('setUser', JSON.parse(sessionStorage.getItem('user')))
			// }

			console.log(this.$store.state.headerIsShow)
			this.$store.commit('setHeaderText', '购物车')
			if(!this.$store.state.headerIsShow){
				this.$store.commit('setHeaderIsShow', true)
			}
			this.getProductData()
		},
		activated() {
			this.$store.commit('setHeaderText', '购物车')
			if(!this.$store.state.headerIsShow){
				this.$store.commit('setHeaderIsShow', true)
			}
		},
		computed: {
			user() {
				if(this.$store.state.user !== undefined){
					this.cartList = this.$store.state.user.cartList
					return this.$store.state.user
				}
				else{
					return undefined
				}
			}
		},
		methods: {
			inputSub(item) {
				if(item.num >1){
					// item.num--
				}
			},
			inputAdd(item) {
				item.num++
				// console.log(item)
			},
			async getProductData() {
				this.productList = await db().getProduct()
			}
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
			padding: 0 20px 0 17px;
			background: #fff;
			a{
				height: 54px;
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