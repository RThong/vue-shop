<template>
	<div class="list-two">
		<router-link to="/">
			<div class="big">
				<img v-lazy="src1" alt="">
			</div>
			<div class="info">
				<div class="name"><slot name="l-name"></slot></div>
				<div class="intro"><slot name="l-intro"></slot></div>
				<div class="price">
					<slot name="l-price"></slot>
					<span class="price-old"><del><slot name="l-price-old"></slot></del></span>
				</div>
			</div>
			<div class="tag">
				<img :src="tag1" alt="">
			</div>
		</router-link>
		<router-link to="/">
			<div class="big">
				<img v-lazy="src2" alt="">
			</div>
			<div class="info">
				<div class="name"><slot name="r-name"></slot></div>
				<div class="intro"><slot name="r-intro"></slot></div>
				<div class="price">
					<slot name="r-price"></slot>
					<span class="price-old"><del><slot name="r-price-old"></slot></del></span>
				</div>
			</div>
			<div class="tag">
				<img :src="tag2" alt="">
			</div>
		</router-link>
	</div>
</template>
<script>
 	export default {
 		props: {
 			src1: String,
 			src2: String,
 			tag1: {
 				type: String,
 				default: ''
 			},
 			tag2: {
 				type: String,
 				default: ''
 			}
 		},
 		data() {
 			return {

 			}
 		},
 		mounted() {
 		}
 	}
</script>
<style lang="scss" scoped>
	.list-two{
		background: #fff;
		display: flex;
		justify-content: space-between;
		a{
			width: 186px;
			position: relative;
			.big{
				height: 186px;
				img{
					display: block;
					width: 100%;
				}
			}
			.info{
				padding: 10px 14px;
				.name{
					font-size: 14px;
					color: rgba(0, 0, 0, 0.87);
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
		}
	}
</style>