<template>
	<div>
		<div class="page-list">
			<div class="swiper-container swiper-container-phone">
				<div class="swiper-wrapper">
					<router-link tag="div" to="cart" class="swiper-slide">
						<img data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f6503426aa32ed960b51475585013208.jpg?thumb=1&w=720&h=360" class="big-img swiper-lazy">
						<div class="swiper-lazy-preloader"></div>
					</router-link>
					<router-link tag="div" to="cart" class="swiper-slide">
						<img data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3e550008e0de8f1c5cb56ce555f2193e.jpg?thumb=1&w=720&h=360" class="big-img swiper-lazy">
						<div class="swiper-lazy-preloader"></div>
					</router-link>
				</div>
				<div class="swiper-pagination">
				</div>
			</div>
			<div class="divider-line"></div>
			<div class="cells">
				<router-link v-for="(item,index) in cellUrl" to="/" :key="index">
					<img v-lazy="item" alt="">
				</router-link>
			</div>
			<div class="card-list">
				<card v-for="(item,index) in productList" :id="item.id" :name="item.name" :price="item.price" :price-old="item.oldPrice" :intro="item.intro" :src="item.cover" :tag="item.tag" :key="index"></card>
			</div>
		</div>
	</div>
</template>
<script>
	import 'swiper/dist/css/swiper.min.scss'
	import Swiper from 'swiper'
	import Card from '../card/card.vue'
	import db from 'model'

	export default {
		name: 'phone',
		data() {
			return {
				productList: [],
				cellUrl: ['http://payyzo9fa.bkt.clouddn.com/static/mifenka.webp',
				'http://payyzo9fa.bkt.clouddn.com/static/xinpinfabu.webp',
				'http://payyzo9fa.bkt.clouddn.com/static/xiaomishangou.jpg?thumb=1&w=144&h=152',
				'http://payyzo9fa.bkt.clouddn.com/static/yijiuhuanxin.webp',
				'http://payyzo9fa.bkt.clouddn.com/static/huodongpindao.png?thumb=1&w=144&h=152'
				]
			}
		},
		components: {
			Card
		},
		mounted(){
			new Swiper('.swiper-container-phone', {
				lazy: {
					loadPrevNext: true,
				},
				resistanceRatio: 0,
				pagination: {
					el: '.swiper-pagination'
				}
			})
			this.getData()
		},
		methods: {
			async getData() {
				this.productList = await db.getAllProduct()
			}
		},
	}
</script>
<style lang="scss" scoped>
	.swiper-container{
		height: 187px;
	}
</style>