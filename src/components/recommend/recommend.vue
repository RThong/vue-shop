<template>
	<div>
		<div class="page-list">
			<div class="swiper-container swiper-container-recommend">
				<div class="swiper-wrapper" v-lazy-container="{ selector: 'img', loading: 'src/assets/images/loading.svg'}">
					<router-link v-for="(item,index) in swiperUrl" tag="div" to="cart" class="swiper-slide" :key="index">
						<img :data-src="item" class="big-img" alt="">
					</router-link>
				</div>
				<div class="swiper-pagination">
				</div>
			</div>
			<div class="cells">
				<router-link v-for="(item,index) in cellUrl" to="/" :key="index">
					<img v-lazy="item" alt="">
				</router-link>
			</div>
			<div class="img-fill">
				<router-link to="">
					<img style="width: 186.5px;" v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/13dd4f254d226ffde6b5e888c5bea508.jpg?thumb=1&w=358&h=508'" alt="">
				</router-link>
				<router-link to="">
					<img style="width: 186.5px;left: 188.54px;top: 0;" v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9fe4b70a8775dd0c3f1598900e07323f.jpg?thumb=1&w=358&h=252'" alt="">
				</router-link>
				<router-link to="">
					<img style="width: 186.5px;left: 188.54px;top: 133.33px;" v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8cea203a2644bd5cf2d1eecd73a3cf12.jpg?thumb=1&w=358&h=252'" alt="">
				</router-link>
			</div>
		</div>		
	</div>
</template>
<script>
	// import '../../assets/styles/Swiper.scss'
	import Swiper from '../../assets/js/Swiper'
	export default {
		name: 'recommend',
		data() {
			return {
				swiperUrl: ['https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0ff3dc30027f3b615bfe03f1d306ee5.jpg?thumb=1&w=720&h=360',
				'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360',
				'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7bf60972f79f94a4b69a0666a57121b2.jpg?thumb=1&w=720&h=360',
				'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/70a33170b9d282f6e371bbeb83c90cd7.jpg?thumb=1&w=720&h=360'
				],
				cellUrl: ['https://i8.mifile.cn/v1/a1/6d64ef02-bb5c-da49-45cb-7d6861885b29!144x152.webp',
				'https://i8.mifile.cn/v1/a1/d29e748c-0177-5b4c-d2ab-401070713bac!144x152.webp',
				'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9173298cc0297ce1803c43485e525358.jpg?thumb=1&w=144&h=152',
				'https://i8.mifile.cn/v1/a1/e560f98a-48bb-25a1-daa2-72bff8cc7c69!144x152.webp',
				'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/938f75d98244629b0d29bfc9c4323f8d.png?thumb=1&w=144&h=152'
				]
			}
		},
		mounted(){
			const swiper = new Swiper('.swiper-container-recommend', {})
		},
		methods: {
			
		}
	}
</script>
<style lang="scss" scoped>
	.page-list{
	}
	.img-fill{
		position: relative;
		width: 375px;
		height: 264px;
		a{
			display: block;
			width: 186.45px;
			position: absolute;
			height: auto!important;
			img{
				display: block;
				width: 186.45px;
				height: 264px;
			}
		}
	}
</style>
