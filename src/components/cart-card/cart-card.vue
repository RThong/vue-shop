<template>
	<div class="item">
		<div class="choose" :class="checked === 1? 'checked':'unchecked'" @click="changeChecked"></div>
		<router-link to="" class="item-img">
			<img v-lazy="img" alt="">
		</router-link>
		<div class="item-info">
			<p class="item-name">
				{{name}}
			</p>
			<div class="item-price">
				<span>售价:</span>
				<span>{{price}}元</span>
			</div>
			<div class="item-action">
				<div class="input-number">
					<div class="image-icons input-sub" :class="{'active': subActive}" @click="inputSub"></div>
					<div class="input-num">
						<span>{{num}}</span>
					</div>
					<div class="image-icons input-add" :class="{'active': addActive}" @click="inputAdd"></div>
				</div>
				<div class="image-icons icon-delete" @click="delCartList"></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['name', 'img', 'price', 'num', 'checked'],
		data() {
			return {
				subActive: true,
				addActive: true
			}
		},
		mounted() {
			if(this.num <= 1){
				this.subActive = false
			}
		},
		watch: {
			num(val) {
				if(val <= 1){
					this.subActive = false
				}
				else{
					this.subActive = true
				}
			}
		},
		methods: {
			inputSub() {
				this.$emit('sub')
			},
			inputAdd() {
				this.$emit('add')
			},
			changeChecked() {
				this.$emit('changeChecked')
			},
			delCartList() {
				this.$emit('delCartList')
			}
		}
	}
</script>
<style lang="scss" scoped>
	.active{
		background-color: #f4f4f4 !important;
	}
	.unchecked{
		background: url(//s1.mi.com/m/images/m/check_normal.png) 50% 50% no-repeat;
    background-size: 25px 25px;
	}
	.checked{
		background: url(https://s1.mi.com/m/images/m/check_press.png) 50% 50% no-repeat;
    background-size: 25px 25px;
	}
	.item{
		border-bottom: 1px solid #f6f6f6;
		background: #fff;
		display: flex;
		padding: 12px 0;
		.choose{
			width: 30px;
			padding: 0 20px;
		}
		.item-img{
			display: block;
			width: 92px;
			height: 92px;
			border: 1px solid #eee;
			margin-right: 10px;
			img{
		    display: block;
		    width: 90px;
		    height: 90px;
			}
		}
		.item-info{
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-right: 15px;
			color: #666;
			font-size: 14px;
			.item-price{
				font-size: 12px;
				color: #aaa;
			}
			.item-action{
				display: flex;
				justify-content: space-between;
				.input-number{
					display: flex;
					text-align: center;
					border: 1px solid #eee;
					justify-content: space-between;
					.input-sub,.input-add,.input-num{
						width: 31px;
						height: 31px;
						line-height: 31px;
					}
					.input-sub{
						background-image: url(../../assets/images/icon-sub.png);
						background-size: 50% 50%;
						background-color: #fafafa;
					}
					.input-add{
						background-image: url(../../assets/images/icon-add.png);
						background-size: 50% 50%;
						background-color: #fafafa;
					}
				}
				.icon-delete{
					width: 31px;
					height: 31px;
					background-image: url(../../assets/images/icon-delete.png);
				}
			}
		}
	}
</style>