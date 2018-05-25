<template>
	<footer>
		<ul>
			<li @click="curNavIndex=0">
				<router-link to="/">
					<i :class="curNavIndex===0?'image-icons icon-index active':'image-icons icon-index'"></i>
					<span>首页</span>
				</router-link>
			</li>
			<li @click="curNavIndex=1">
				<router-link to="/category">
					<i :class="curNavIndex===1?'image-icons icon-category active':'image-icons icon-category'"></i>
					<span>分类</span>
				</router-link>
			</li>
			<li @click="curNavIndex=2">
				<router-link to="/cart">
					<i :class="curNavIndex===2?'image-icons icon-cart active':'image-icons icon-cart'"></i>
					<span>购物车</span>
				</router-link>
			</li>
			<li @click="curNavIndex=3">
				<router-link to="/user">
					<i :class="curNavIndex===3?'image-icons icon-user active':'image-icons icon-user'"></i>
					<span>我的</span>
				</router-link>
			</li>
		</ul>
	</footer>
</template>
<script>
	export default {
		name: 'Footer',
		data() {
			return {
				curNavIndex: 0
			}
		},
		methods: {
			a(){
				console.log('!!!')
			}
		}
	}
</script>
<style lang="scss" scoped>
footer{
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
	ul{
		display: flex;
		li{
			width: 25%;
			height: 52px;
			display: flex;
			align-items: center;
			justify-content: center;
			a{
				font-size: 12px;
				color: #999;
				i{
					width: 21px;
					height: 21px;
					display: block;
					margin: 0 auto 5px;
					background-color: transparent;
					background-repeat: no-repeat;
					background-position: 50%;
					background-size: cover;
				}
				.icon-index{
					background-image: url(../../assets/images/icon-index.png);
				}
				.icon-index.active{
					background-image: url(../../assets/images/icon-index-active.png);
				}
				.icon-category{
					background-image: url(../../assets/images/icon-category.png);
				}
				.icon-category.active{
					background-image: url(../../assets/images/icon-category-active.png);
				}
				.icon-cart{
					background-image: url(../../assets/images/icon-cart.png);
				}
				.icon-cart.active{
					background-image: url(../../assets/images/icon-cart-active.png);
				}
				.icon-user{
					background-image: url(../../assets/images/icon-user.png);
				}
				.icon-user.active{
					background-image: url(../../assets/images/icon-user-active.png);
				}
			}
			
		}
	}
}
</style>