<template>
	<a class="card" @click="goDetail">
		<div class="img">
			<img v-lazy="src" alt="">
		</div>
		<div class="info">
			<div class="name">{{name}}</div>
			<div class="intro">{{intro}}</div>
			<div class="price">
				<span class="mark">¥</span>{{price}}
				<span class="price-old" v-if="priceOld"><del><span class="mark">¥</span>{{priceOld}}</del></span>
			</div>
		</div>
		<div v-if="tag" class="tag">
			<img :src="tag" alt="">
		</div>
	</a>
</template>
<script>
	export default {
		props: {
			id: String,
			name: String,
			intro: String,
			price: String,
			priceOld: String,
 			src: String,
 			tag: {
 				type: String,
 				default: ''
 			}
 		},
 		methods: {
 			goDetail() {
 				this.$store.commit('setPullPageSlide', 1)
 				this.$router.push(`/commodity/detail/${this.id}`)				
 			}
 		}
	}
</script>
<style lang="scss" scoped>
	.mark{
		font-size: 12px;
	}
	.card{
		width: 186px;
		position: relative;
	}
	.img{
		width: 186px;
		height: 186px;
	}
	.info{
		padding: 10px 14px;
		.name{
			font-size: 14px;
			color: rgba(0, 0, 0, 0.87);
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.intro{
			font-size: 12px;
			color: rgba(0, 0, 0, 0.54);
		}
		.price{
			color: #ea625b;
			font-size: 14px;
		}
		.price-old{
			margin-left: 5px;
			font-size: 12px;
			color: rgba(0, 0, 0, 0.54);
		}
	}
	.tag{
		position: absolute;
		left: 0;
		top: 0;
		img{
			display: block;
			width: 30%;
			height: 30%;
		}	
	}
</style>