<template>
	<div class="list-one">
		<router-link to="/">
			<div class="img">
				<img v-lazy="src" alt="">
			</div>
			<div class="info">
				<!-- <div class="line l1">
					<div class="name">15.6"笔记本Pro i5 8GB</div>
					<div class="price">¥4999</div>
				</div>
				<div class="line l2">
					<div class="name">更强悍的专业笔记本，全金属强化机身</div>
					<del class="price">¥5599</del>
				</div> -->
				<div class="line l1">
					<div class="name"><slot name="l1-name"></slot></div>
					<div class="price"><slot name="l1-price"></slot></div>
				</div>
				<div class="line l2">
					<div class="name"><slot name="l2-name"></slot></div>
					<del class="price"><slot name="l2-price"></slot></del>
				</div>
			</div>
			<div class="tag">
				<img :src="tag" alt="">
			</div>
		</router-link>
	</div>
</template>
<script>
 	export default {
 		props: ['src','tag'],
 		data() {
 			return {

 			}
 		},

 	}
</script>
<style lang="scss" scoped>
	.list-one{
		a{
			position: relative;
			display: block;
			.img{
				height: 188px;
			}
			.info{
				padding: 10px 14px;
				.line{
					display: flex;
					justify-content: space-between;
					align-items: center;
					line-height: 1.5;
				}
				.l1{
					.name{
						color: rgba(0, 0, 0, 0.87);
					}
					.price{
						color: #ea625b;
						font-size: 14px;
					}
				}
				.l2{
					font-size: 12px;
					.name{
						color: rgba(0, 0, 0, 0.54);
					}
					.price{
						color: rgba(0, 0, 0, 0.54);
					}
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