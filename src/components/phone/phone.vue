<template>
	<div>
		<div class="page-list">
			<div class="swiper-container swiper-container-phone">
				<div class="swiper-wrapper" v-lazy-container="{ selector: 'img'}">
					<router-link tag="div" to="cart" class="swiper-slide">
						<img data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f6503426aa32ed960b51475585013208.jpg?thumb=1&w=720&h=360" alt="">
					</router-link>
					<router-link tag="div" to="cart" class="swiper-slide">
						<img data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9129d21aed81442ca895893ada045f6b.jpg?thumb=1&w=720&h=360" alt="">
					</router-link>
				</div>
				<div class="swiper-pagination">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	// import '../../assets/styles/Swiper.scss'
	import Swiper from '../../assets/js/Swiper'
	export default {
		name: 'phone',
		data() {
			return {
			}
		},
		mounted(){
			const swiper = new Swiper('.swiper-container-phone', {})
			
		}
	}
</script>
<style lang="scss" scoped>
	.page-list{
		height: 7000px;
	}
</style>