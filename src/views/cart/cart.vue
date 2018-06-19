<template>
	<div class="app-view app-view-with-footer app-view-with-header cart-wrapper">
		<div class="cart-container">
			<div v-if="!isLogin" class="nologin">
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
				<cart-card v-for="(item,index) in cartList" :checked="item.checked" :id="item.id" :name="item.name" :price="item.price" :img="item.img" :num="item.num" @sub="inputSub(item)" @add="inputAdd(item)" @changeChecked="changeChecked(item)" @delCartList="delProduct(item)" :key="index"></cart-card>
			</div>
			<div class="recommend-contianer">
				<div class="recommend-top-img">
					<img v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg'" alt="">
				</div>
				<div class="card-list">
					<card v-for="(item,index) in productList" :id="item.id" :name="item.name" :price="item.price" :price-old="item.oldPrice" :intro="item.intro" :src="item.cover" :tag="item.tag" :key="index"></card>
				</div>
			</div>
		</div>

	</div>
</template>
<script>
	import cartCard from '../../components/cart-card/cart-card.vue'
	import Card from '../../components/card/card.vue'
	import db from '../../../app.config'

	export default {
		// mixins: [userMixin],
		data(){
			return {
				isLogin: false,
				// cartList: [],
				productList: [],
				btnLock: false
			}
		},
		components: {
			cartCard,
			Card
		},
		mounted() {
			
			this.getProductData()
		},
		computed: {
			cartList() {
				return this.$store.state.cartList
			}
		},
		activated() {
			//判断登录
			if(sessionStorage.getItem('userId')){
				this.isLogin = true
				this.getCartList().then(res => {
					this.$store.commit('setCartList', res.cartList)
				})
			}
			if(this.cartList.length > 0){
				// this.$store.commit('setFooterIsShow', false)
				this.$store.commit('setResultIsShow', true)
			}
			else{
				this.$store.commit('setResultIsShow', false)
			}
			this.$store.commit('setHeaderText', '购物车')
			if(!this.$store.state.headerIsShow){
				this.$store.commit('setHeaderIsShow', true)
			}
		},
		watch: {
			cartList(val) {
				if(val.length > 0){
					// this.$store.commit('setFooterIsShow', false)
					this.$store.commit('setResultIsShow', true)
				}
				else{
					this.$store.commit('setResultIsShow', false)
				}	
			}
		},
		methods: {
			//数量减小
			inputSub(item) {
				if(this.btnLock){
					return
				}
				this.btnLock = true
				if(item.num >1){					
					this.getCartList().then(res => {
						res.cartList.map(cart => {
							if(item.id === cart.id){
								cart.num--
								this.updateCartList(res.cartList).then(() => {
									this.$store.commit('setCartList', res.cartList)
									this.btnLock = false;
								})
							}
						})						
					})
				}
			},
			//数量增加
			inputAdd(item) {
				if(this.btnLock){
					return
				}
				this.btnLock = true
				this.getCartList().then(res => {
					res.cartList.map(cart => {
						if(item.id === cart.id){
							cart.num++
							this.updateCartList(res.cartList).then(() => {
								this.$store.commit('setCartList', res.cartList)
								this.btnLock = false;
							})
						}
					})
				})
			},
			//选中购物车
			changeChecked(item) {
				if(this.btnLock){
					return
				}
				this.btnLock = true			
				this.getCartList().then(res => {
					res.cartList.map(cart => {
						if(item.id === cart.id){
							cart.checked = cart.checked === 1 ? 0 : 1
							this.updateCartList(res.cartList).then(() => {
								this.$store.commit('setCartList', res.cartList)
								this.btnLock = false;
								return
							})
						}
					})			
				})
			},
			//删除购物车
			delProduct(item) {
				if(this.btnLock){
					return
				}
				this.btnLock = true			
				this.getCartList().then(res => {
					res.cartList.map((cart, index) => {
						if(item.id === cart.id){
							this.delCartList(item).then(() => {
								res.cartList.splice(index, 1)
								this.$store.commit('setCartList', res.cartList)
								this.btnLock = false;
							})
						}
					})			
				})
			},
			async getProductData() {
				this.productList = await db().getAllProduct()
			},
			async getCartList() {
				try{
					return db().findUser(sessionStorage.getItem('userId'), sessionStorage.getItem('id'))				
				}catch(err){
					console.log(err)
				}		
			},
			async updateCartList(value) {
				await db().updateCart(value, sessionStorage.getItem('userId'), sessionStorage.getItem('id'))
			},
			async delCartList(value) {
				await db().delCart(value, sessionStorage.getItem('userId'), sessionStorage.getItem('id'))
			}
		},
		beforeRouteLeave(to, from, next) {
			this.$store.commit('setResultIsShow', false)
			// this.$store.commit('setFooterIsShow', true)
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