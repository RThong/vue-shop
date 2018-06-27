<template>
	<div class="item">
		<router-link :to="`/commodity/detail/${id}`">
			<div class="item-img">
				<img v-lazy="img" alt="">
			</div>
			<div class="item-info">
				<div class="item-name">{{name}}</div>
				<div class="item-intro"><span class="red-brief">{{redBrief}}</span>{{brief}}</div>
				<div class="item-price">¥<span>{{price}}</span></div>
			</div>
		</router-link>
	</div>	
</template>
<script>
	export default {
		props: ['id', 'name', 'img', 'brief', 'redBrief', 'price']
	}
</script>
<style lang=scss scoped>
	$mainColor: #ed5b00;
	.item{
		margin-bottom: 2px;
	}
	a{
		background: #fff;
		display: flex;
		align-items: center;
		.item-img{
			width: 156px;
			height: 156px;
		}
		.item-info{
			flex: 1;
			padding: 0 12px;
			.item-name{
				font-size: 16px;
				color: rgba(0,0,0,.87);
				margin-bottom: 10px;
			}
			.item-intro{
				font-size: 12px;
				color: rgba(0,0,0,.54);
				height: 32px;
				overflow: hidden;
				margin-bottom: 10px;
				.red-brief{
					color: $mainColor;
				}
			}
			.item-price{
				font-size: 12px;
				color: $mainColor;
				span{
					font-size: 16px;
					margin-left: 2px;
				}
			}
		}

	}
</style>