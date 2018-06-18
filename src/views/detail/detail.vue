<template>
	<div class="app-view">
		<div class="header-left">
			<div class="header-item"  @click="goBack">
				<i class="image-icons icon-left-arrow"></i>
			</div>
		</div>
		<div class="swiper-container swiper-container-detail">
			<div class="swiper-wrapper">
				<a v-for="(item,index) in product.images" class="swiper-slide" :key="index">
					<img :data-src="item" class="big-img swiper-lazy" alt="">
					<div class="swiper-lazy-preloader"></div>
				</a>			
			</div>
			<div class="swiper-pagination">
			</div>
		</div>
		<div class="overview">
			<div class="product-name">{{product.name}}</div>
			<div class="product-intro">
				<font color="#ff4a00">{{product.redBrief}}</font>{{product.brief}}
			</div>
			<div class="product-price">
				<div class="new-price">{{product.price}}</div>
				<div class="old-price"><del>{{product.oldPrice}}</del></div>
			</div>
		</div>

		<div class="footer">
			<router-link class="index" to="/">
				<i class="image-icons icon-index"></i>
				<span>首页</span>
			</router-link>
			<router-link class="cart" to="/cart">
				<i class="image-icons icon-cart"></i>
				<span>购物车</span>
			</router-link>
			<div class="add-cart">
				加入购物车
			</div>
		</div>
	</div>
</template>
<script>
	import '../../../node_modules/swiper/dist/css/swiper.min.scss'
	import Swiper from 'swiper'
	import db from '../../../app.config'
	export default {
		name: 'detail',
		data() {
			return {
				// swiperUrl: ['https://i8.mifile.cn/v1/a1/7dc38112-bbf4-f3fa-db39-5f4674f9d0d4!720x792.webp',
				// 'https://i8.mifile.cn/v1/a1/7d040eee-5569-5074-864d-8c03f073e8c8!720x792.webp',
				// 'https://i8.mifile.cn/v1/a1/e3980743-9d5d-0a8a-9dab-0a37c8b98ef5!720x792.webp',
				// 'https://i8.mifile.cn/v1/a1/60acd23a-cd84-700d-a7fe-6bb31e5ff71b!720x792.webp',
				// 'https://i8.mifile.cn/v1/a1/dbed9798-2cab-1e5c-d28d-f83468567cec.webp'
				// ],
				product: {}
			}
		},
		mounted() {
			console.log('mounted')
			this.getData().then((res) => {
				this.product = res
				this.$nextTick(() => {
					new Swiper('.swiper-container-detail', {
						lazy: {
							loadPrevNext: true,
						},
						resistanceRatio: 0,
						pagination: {
							el: '.swiper-pagination'
						}
					})
				})
					
				
			})
			
		},
		methods: {
			goBack() {
				this.$store.commit('setPullPageSlide', -1)
				this.$router.go(-1)
			},
			getData() {
				return db().getProduct(this.$route.params.id)
			}
		}
	}
</script>
<style lang="scss" scoped>
.swiper-slide{
	height: 413px;
	/*img{
		height: 413px;
	}*/
}
.header-left{
	position: absolute;
	top: 0;
	left: 0;
	z-index: 99;
}

.image-icons{
	display: block;
	width: 31px;
	height: 31px;
}
.header-left{
	background: rgba(0,0,0,.7);
	width: 31px;
	height: 31px;
	border-radius: 50%;
	margin: 10px 0 0 10px;
	.icon-left-arrow{
		background-image: url(../../assets/images/left-arrow-white.png);
		width: 18;
    height: 18;
    transform: scale(.6);
	}
}
.overview{
	background: #fff;
	padding: 10px 16px;
	.product-name{
		font-size: 18px;
		color: $navColor;
		line-height: 1.5;
	}
	.product-intro{
		font-size: 13px;
		color: rgba(0,0,0,.54);
		line-height: 1.5;
	}
	.product-price{
		padding: 10px 0;
		display: flex;
		-ms-align-items: center;
		align-items: flex-end;
		.new-price{
			color: #ff6700;
			font-size: 24px;
			font-weight: 700;
		}
		.old-price{
			color: rgba(0,0,0,.54);
			font-size: 14px;
			margin-left: 10px;
		}
	}
}
.footer{
	position: fixed;
	bottom: 0;
	left: 0;
	height: 52px;
	display: flex;
	width: 100%;
	background: #fff;
	a{
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		font-size: 12px;
		color: #999;
		flex: 1;
		.image-icons{
			width: 21px;
			height: 21px;
			display: block;
			margin: 0 auto 5px;
		}
	}	
	.icon-index{
		background-image: url(../../assets/images/icon-index.png);
	}
	.icon-cart{
		background-image: url(../../assets/images/icon-cart.png);
	}
	.add-cart{
		flex: 3;
		text-align: center;
		line-height: 52px;
		background: #ff6700;
		color: #fff;
		font-size: 14px;
	}
	
}
</style>