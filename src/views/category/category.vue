<template>
	<div class="app-view app-view-with-footer app-view-with-header category-wrapper">
		<div class="list-navbar">
			<ul>
				<li>
					<a href="#phone" to="category">新品</a>
				</li>
				<li>
					<a to="category">手机</a>
				</li>
				<li>
					<a to="category">电视</a>
				</li>
				<li>
					<a to="category">电脑</a>
				</li>
				<li>
					<a to="category">家电</a>
				</li>
				<li>
					<a to="category">家装</a>
				</li>
				<li>
					<a to="category">路由</a>
				</li>
				<li>
					<a to="category">智能</a>
				</li>
				<li>
					<a to="category">儿童</a>
				</li>
				<li>
					<a to="category">灯具</a>
				</li>
				<li>
					<a to="category">电源</a>
				</li>
				<li>
					<a to="category">耳机</a>
				</li>
				<li>
					<a to="category">音箱</a>
				</li>
				<li>
					<a to="category">礼品</a>
				</li>
				<li>
					<a to="category">生活</a>
				</li>
				<li>
					<a to="category">服务</a>
				</li>
				<li>
					<a to="category">米粉卡</a>
				</li>
				<li>
					<a to="category">零售业</a>
				</li>
			</ul>
		</div>
		<div class="list-wrap" style="overflow-y:auto;position: absolute;left: 78px;top: 50px;bottom: 52px;right: 0;">
			<div class="a" style="height: 800px;background: yellow"></div>
			<div id="phone" style="height: 800px;"></div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				
			}
		},
		mounted() {
			console.log(this.$store.state.headerIsShow)
			this.$store.commit('setHeaderText', '分类')
			if(!this.$store.state.headerIsShow){
				this.$store.commit('setHeaderIsShow', true)
			}
			
		},
		methods: {
		},
		beforeRouteLeave(to, from, next) {
			if(to.fullPath !== "/category" && to.fullPath !== "/cart"){
				this.$store.commit('setHeaderIsShow', false)
			}
			next()
		}
	}
</script>
<style lang="scss" scoped>
	.category-wrapper{
		.list-navbar{
			position: fixed;
			left: 0;
			top: 50px;
			bottom: 52px;
			width: 78px;
			overflow: hidden;
			background: #fff;
			ul{
				overflow-y: auto;
				position: absolute;
				left: 0;
				top: 0;
				bottom: 0;
				width: 78px;
				li{
					a{
						display: block;
						border-right: 1px solid $bgColor; 
						height: 47px;
						text-align: center;
						line-height: 47px;
						color: #000;
						font-size: 14px;
					}
				}
			}
		}
	}


</style>