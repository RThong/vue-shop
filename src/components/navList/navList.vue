<template>
	<div>
		<router-link to="category" class="banner-img">
			<img v-lazy="banner" alt="">
		</router-link>
		<div v-for="item in productList">

			<div class="category-title">
				<span>{{item.name}}</span>
			</div>
			<div class="category-group">
				<div class="product" v-for="product in item.products">
					<router-link to="category">
						<div class="img">
							<img v-lazy="product.img" alt="">
						</div>
						<p class="info">{{product.name}}</p>
					</router-link>			
				</div>
			</div>
		</div>
	</div>

</template>
<script>
	export default {
		props: ['banner','productList'],
		data() {
			return {
			}
		},
	}
</script>
<style lang="scss" scoped>
	.banner-img{
		display: block;
		height: 104px;
		img{
			height: 104px;
		}
	}
	.category-title{
    font-size: 14px;
    text-align: center;
    font-weight: 400;
    margin-top: 10px;
    height: 66px;
    line-height: 66px;
    overflow: hidden;
    span{
    	color: $navColor;
    	position: relative;
    	&:before,&:after{
    		content: "";
    		position: absolute;
    		top: 50%;
    		left: 0;
    		width: 20px;
    		border-top: 1px solid #e0e0e0;
    		transform: translate3d(-150%,-50%,0);
    	}
    	&:after{
    		left: auto;
    		right: 0;
    		transform: translate3d(150%,-50%,0);
    	}
    }
	}
	.category-group{
		display: flex;
		flex-wrap: wrap;
		.product{
			width: 33.3%;
			text-align: center;
			padding: 10px 0;
			a{
				display: block;
				.img{
					width: 52px;
					height: 52px;
					margin: 0 auto;
					img{
						width: 52px;
						height: 52px;
						display: block;
					}
				}
				.info{
					font-size: 12px;
					margin-top: 14px;
					color: rgba(0,0,0,.54);
				}
			}
		}
	}
</style>