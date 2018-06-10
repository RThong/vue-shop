<template>
	<div class="app-view app-view-with-footer user-wrapper">
		<div v-if="username!==undefined" class="hd">
			<div class="user-img">
				<img src="https://s1.mi.com/m/images/m/default.png" alt="">
			</div>
			<div class="user-info">
				<p>{{username}}</p>
			</div>
		</div>
		<router-link v-else class="hd" to="login">
			<div class="user-img">
				<img src="https://s1.mi.com/m/images/m/default.png" alt="">
			</div>
			<div class="user-info">
				<p>登录</p>
			</div>
		</router-link>
		<div class="order">
			<span class="l">我的订单</span>
			<router-link to="" class="r arrow">全部订单</router-link>
		</div>
		<ul class="u2">
			<li class="u2-box">
				<router-link to="">
					<div class="image-icons icon-daifukuan"></div>
					<p>待付款</p>
				</router-link>
			</li>
			<li class="u2-box">
				<router-link to="">
					<div class="image-icons icon-daishouhuo"></div>
					<p>待收货</p>
				</router-link>
			</li>
			<li class="u2-box">
				<router-link to="">
					<div class="image-icons icon-tuihuanxiu"></div>
					<p>退换修</p>
				</router-link>
			</li>
		</ul>
		<ui-line v-for="(item,index) in lineList" :title="item.title" :className="item.class" :key="index"></ui-line>
		<line></line>
	</div>
</template>
<script>
	import UiLine from '../../components/line/line.vue'
	// import db from '../../../app.config'
	export default {
		data(){
			return {
				lineList: [
					{
						title: '会员中心',
						class: 'icon-vip',
					},
					{
						title: '我的优惠',
						class: 'icon-wallet',
					},
					{
						title: '服务中心',
						class: 'icon-service',
					},
					{
						title: '小米之家',
						class: 'icon-mihong',
					},
					{
						title: 'F码通道',
						class: 'icon-fcode',
					},
					{
						title: '设置',
						class: 'icon-setting',
					},
				]			
			}
		},
		components: {
			UiLine
		},
		mounted() {		
			if(sessionStorage['user']){
				this.$store.commit('setUser', JSON.parse(sessionStorage.getItem('user')))
			}	
		},
		computed: {
			username() {
				return this.$store.state.user === undefined? undefined : this.$store.state.user.username
			}
		},
		methods: {
			// login() {
			// 	const data = db().login('hong', '123456')
			// 	console.log(data)
			// }
		},
	}
</script>
<style lang="scss" scoped>
	.hd{
		background-color: #f37d0f;
		background-image: url(https://m.mi.com/static/img/bg.63c8e19851.png);
		background-size: auto 100%;
		background-position: center 0;
		height: 82px;
		padding: 16px 0;
		display: flex;
		align-items: center;
		.user-img{
			margin: 0 12px 0 25px;
			width: 50px;
			height: 50px;
			overflow: hidden;
			border-radius: 50%;
			border: 3px solid rgba(255, 255, 255, 0.4);
			text-align: center;
		}
		.user-info{
			color: #fff;
			font-size: 14px;
			text-align: left;
		}
	}
	.order{
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 40px 0 25px;
		height: 40px;
		font-size: 14px;
		.l{
			color: $navColor
		}
		.r{
			position: relative;
			color: $navColor;
		}
	}
	.u2{
		background: #fff;
		display: flex;
		margin-top: 2px;
		.u2-box{
			width: 33.3%;		
			a{
				display: flex;
				flex-direction: column;
				height: 88px;
				align-items: center;
				justify-content: center;
				color: $navColor;
				font-size: 12px;
				.image-icons{
					width: 25px;
					height: 25px;
					margin-bottom: 5px;
				}
				.icon-daifukuan{				
					background-image: url(../../assets/images/daifukuan.png);					
				}
				.icon-daishouhuo{
					background-image: url(../../assets/images/daishouhuo.png);		
				}
				.icon-tuihuanxiu{
					background-image: url(../../assets/images/tuihuanxiu.png);		
				}
			}
		}
	}
</style>