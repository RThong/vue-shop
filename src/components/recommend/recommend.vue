<template>
	<div>
		<div class="page-list">
			<div class="swiper-container swiper-container-recommend">
				<div class="swiper-wrapper" v-lazy-container="{ selector: 'img'}">
					<router-link v-for="(item,index) in swiperUrl" tag="div" to="cart" class="swiper-slide" :key="index">
						<img :data-src="item" class="big-img" alt="" data-loading="src/assets/images/loading.svg">
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
				<img v-lazy="'/static/94f27f95-5aef-0d25-e9ca-b9c6777dd9c8!720x80.webp'" alt="">
			</div>
			
			<list-one src="/static/21647f78-b335-55c1-2a1d-83c273624436!720x360.webp" tag="/static/289039eb-c3ed-7c26-69c3-5b07b72a797d.webp?w=120&h=48">
				<span slot="l1-name">15.6"笔记本Pro i5 8GB</span>
				<span slot="l1-price">¥4999</span>
				<span slot="l2-name">更强悍的专业笔记本，全金属强化机身</span>
				<span slot="l2-price">¥5599</span>
			</list-one>
			<list-two v-for="item in 6" :key="item" src1="/static/9fbc4df86c8377ff7411c9942c003fff.jpg?thumb=1&w=360&h=360" src2="/static/9fbc4df86c8377ff7411c9942c003fff.jpg?thumb=1&w=360&h=360" tag1="/static/0c55f13eefcb247d5a706ae91cff24c2.png?w=180&h=48" tag2="/static/289039eb-c3ed-7c26-69c3-5b07b72a797d.webp?w=120&h=48">
				<span slot="l-name">小米净水器（厨下式）</span>
				<span slot="l-intro">400加仑大流量，隐藏安装</span>
				<span slot="l-price">¥1799</span>
				<span slot="l-price-old">¥1999</span>
				<span slot="r-name">小米净水器（厨下式）</span>
				<span slot="r-intro">400加仑大流量，隐藏安装</span>
				<span slot="r-price">¥1799</span>
			</list-two>
			<list-two src1="/static/a114635f9596f33b74632bb1ac3c12ac.jpg?thumb=1&w=360&h=360" src2="/static/28bf863f-1c2d-52b8-a2e5-186dfcbaad1e!360x360.webp" tag1="/static/0c55f13eefcb247d5a706ae91cff24c2.png?w=180&h=48" tag2="/static/289039eb-c3ed-7c26-69c3-5b07b72a797d.webp?w=120&h=48">
				<span slot="l-name">小米净水器（厨下式）</span>
				<span slot="l-intro">400加仑大流量，隐藏安装</span>
				<span slot="l-price">¥1799</span>
				<span slot="l-price-old">¥1999</span>
				<span slot="r-name">小米净水器（厨下式）</span>
				<span slot="r-intro">400加仑大流量，隐藏安装</span>
				<span slot="r-price">¥1799</span>
			</list-two>
		</div>		
	</div>
</template>
<script>
	import Swiper from '../../assets/js/Swiper'
	import ListOne from '../list-one/list-one.vue'
	import ListTwo from '../list-two/list-two.vue'
	export default {
		name: 'recommend',
		data() {
			return {
				swiperUrl: ['/static/a0ff3dc30027f3b615bfe03f1d306ee5.jpg?thumb=1&w=720&h=360',
				'/static/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360',
				'/static/7bf60972f79f94a4b69a0666a57121b2.jpg?thumb=1&w=720&h=360',
				'/static/70a33170b9d282f6e371bbeb83c90cd7.jpg?thumb=1&w=720&h=360'
				],
				cellUrl: ['/static/6d64ef02-bb5c-da49-45cb-7d6861885b29!144x152.webp',
				'/static/d29e748c-0177-5b4c-d2ab-401070713bac!144x152.webp',
				'/static/9173298cc0297ce1803c43485e525358.jpg?thumb=1&w=144&h=152',
				'/static/e560f98a-48bb-25a1-daa2-72bff8cc7c69!144x152.webp',
				'/static/938f75d98244629b0d29bfc9c4323f8d.png?thumb=1&w=144&h=152'
				]
			}
		},
		components: {
			ListOne,
			ListTwo
		},
		mounted() {
			const swiper = new Swiper('.swiper-container-recommend', {})
		},
		methods: {
			
		},

	}
</script>
<style lang="scss" scoped>
	.page-list{
	}
</style>
