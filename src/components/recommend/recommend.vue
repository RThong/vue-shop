<template>
	<div>
		<div class="page-list">
			<div class="swiper-container swiper-container-recommend">
				<div class="swiper-wrapper">
					<router-link v-for="(item,index) in swiperUrl" tag="div" to="cart" class="swiper-slide" :key="index">
						<img :data-src="item" class="big-img swiper-lazy">
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
			<div class="ad-title">
				<img v-lazy="'https://i8.mifile.cn/v1/a1/f2635080-3835-53f0-5f80-ac1e50e0784c!720x80.webp'" alt="">
			</div>
			
			<list-one src="https://i8.mifile.cn/v1/a1/21647f78-b335-55c1-2a1d-83c273624436!720x360.webp" tag="http://payyzo9fa.bkt.clouddn.com/static/time-limit.png">
				<span slot="l1-name">15.6"笔记本Pro i5 8GB</span>
				<span slot="l1-price">¥4999</span>
				<span slot="l2-name">更强悍的专业笔记本，全金属强化机身11111</span>
				<span slot="l2-price">¥5599</span>
			</list-one>
			<div class="card-list">
				<card v-for="(item,index) in productList" :id="item.id" :name="item.name" :price="item.price" :price-old="item.oldPrice" :intro="item.intro" :src="item.cover" :tag="item.tag" :key="index"></card>
			</div>
		</div>		
	</div>
</template>
<script>
	import 'swiper/dist/css/swiper.min.scss'
	import Swiper from 'swiper'
	import ListOne from '../list-one/list-one.vue'
	import Card from '../card/card.vue'
	import db from 'model'

	export default {
		name: 'recommend',
		data() {
			return {
				productList: [],
				swiperUrl: ['https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0ff3dc30027f3b615bfe03f1d306ee5.jpg?thumb=1&w=720&h=360',
				'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360',
				'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7bf60972f79f94a4b69a0666a57121b2.jpg?thumb=1&w=720&h=360',
				'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/70a33170b9d282f6e371bbeb83c90cd7.jpg?thumb=1&w=720&h=360'
				],
				cellUrl: ['http://payyzo9fa.bkt.clouddn.com/static/mifenka.webp',
				'http://payyzo9fa.bkt.clouddn.com/static/xinpinfabu.webp',
				'http://payyzo9fa.bkt.clouddn.com/static/xiaomishangou.jpg?thumb=1&w=144&h=152',
				'http://payyzo9fa.bkt.clouddn.com/static/yijiuhuanxin.webp',
				'http://payyzo9fa.bkt.clouddn.com/static/huodongpindao.png?thumb=1&w=144&h=152'
				]
			}
		},
		components: {
			ListOne,
			Card
		},
		mounted() {
			new Swiper('.swiper-container-recommend', {
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
