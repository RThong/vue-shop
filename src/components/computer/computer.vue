<template>
	<div>
		<div class="page-list">
			<div class="swiper-container container1">
				<div class="swiper-wrapper" v-lazy-container="{ selector: 'img'}">
					<router-link tag="div" to="cart" class="swiper-slide slide1">
						<img data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9129d21aed81442ca895893ada045f6b.jpg?thumb=1&w=720&h=360" alt="">
					</router-link>
					<router-link tag="div" to="cart" class="swiper-slide slide2">
						<img data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7bf60972f79f94a4b69a0666a57121b2.jpg?thumb=1&w=720&h=360" alt="">
					</router-link>
					<router-link tag="div" to="cart" class="swiper-slide slide3">
						<img data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18d2dfa445d0086467a0236ed74013b3.jpg?thumb=1&w=720&h=360" alt="">
					</router-link>
					<router-link tag="div" to="cart" class="swiper-slide slide4">
						<img data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/70a33170b9d282f6e371bbeb83c90cd7.jpg?thumb=1&w=720&h=360" alt="">
					</router-link>
				</div>
				<div class="swiper-pagination">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import '../../assets/styles/Swiper.scss'
	import Swiper from '../../assets/js/Swiper'
	export default {
		name: 'computer',
		data() {
			return {
				// url: ['https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9129d21aed81442ca895893ada045f6b.jpg?thumb=1&w=720&h=360',
				// 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7bf60972f79f94a4b69a0666a57121b2.jpg?thumb=1&w=720&h=360',
				// 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18d2dfa445d0086467a0236ed74013b3.jpg?thumb=1&w=720&h=360',
				// 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/70a33170b9d282f6e371bbeb83c90cd7.jpg?thumb=1&w=720&h=360'
				// ]
			}
		},
		mounted(){
			const swiper1 = new Swiper('.container1', {})

		}
	}
</script>
<style lang="scss" scoped>
	.page-list{
		height: 7000px;
	}
	.swiper-slide{
		img{
			display: block;
			width: 100%
		}
	}
	.container1 .swiper-slide{
      width: 100%;
  }
</style>