<template>
	<footer :class="className" v-show="isShow">
		<ul>
			<li @click="changeNav(0)" :class="curNavIndex===0?'active':''">
				<router-link to="/">
					<i class="image-icons icon-index"></i>
					<span>首页</span>
				</router-link>
			</li>
			<li @click="changeNav(1)" :class="curNavIndex===1?'active':''">
				<router-link to="/category">
					<i class="image-icons icon-category"></i>
					<span>分类</span>
				</router-link>
			</li>
			<li @click="changeNav(2)" :class="curNavIndex===2?'active':''">
				<router-link to="/cart">
					<i class="image-icons icon-cart"></i>
					<span>购物车</span>
				</router-link>
			</li>
			<li @click="changeNav(3)" :class="curNavIndex===3?'active':''">
				<router-link to="/user">
					<i class="image-icons icon-user"></i>
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
				// curNavIndex: 0
				className: '',
				isShow: true,
				timer: ''
			}
		},
		mounted() {
			this.firstEnter()
		},
		computed: {
			curNavIndex() {
				return this.$store.state.curNavIndex
			},
			show() {
				return this.$store.state.footerIsShow
			}
		},
		watch: {
			//footer动画
			show: function(newValue) {
				if(this.timer){
					clearTimeout(this.timer)
				}
				if(newValue){
					this.isShow = true
					this.timer = setTimeout(() => {
						this.className = ''
					},100)
					
				}
				else{
					this.className = 'slide-leave-to'
					this.timer = setTimeout(() => {
						this.isShow = false
					}, 200)
				}
			}
		},
		methods: {
			firstEnter() {
				if(this.$route.matched.length === 0){
					return
				}
				this.$store.commit('setNavIndex', this.$route.meta.navIndex)			
			},
			changeNav(index) {
				this.$store.commit('setNavIndex', index)
			}
		}
	}
</script>
<style lang="scss" scoped>
footer{
	transition: transform .2s ease-out;
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
			a{
				display: flex;
				height: 100%;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				font-size: 12px;
				color: #999;
				.image-icons{
					width: 21px;
					height: 21px;
					display: block;
					margin: 0 auto 5px;
				}
  		}
			
		}
		.active span{
			color: $mainColor;
		}
		.icon-index{
			background-image: url(../../assets/images/icon-index.png);
		}
		.active .icon-index{
			background-image: url(../../assets/images/icon-index-active.png);
		}
		.icon-category{
			background-image: url(../../assets/images/icon-category.png);
		}
		.active .icon-category{
			background-image: url(../../assets/images/icon-category-active.png);
		}
		.icon-cart{
			background-image: url(../../assets/images/icon-cart.png);
		}
		.active .icon-cart{
			background-image: url(../../assets/images/icon-cart-active.png);
		}
		.icon-user{
			background-image: url(../../assets/images/icon-user.png);
		}
		.active .icon-user{
			background-image: url(../../assets/images/icon-user-active.png);
		}

	}
}
</style>