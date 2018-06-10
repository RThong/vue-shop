<template>
	<div class="app-view">
		<div class="layout">
			<div class="logo-wrapper">
				<div class="logo">
				</div>
				<p class="text">帐号登录</p>
			</div>

			<div class="input">
				<input type="text" name="username" placeholder="帐号" v-model="username">
			</div>
			<div class="input">
				<input type="password" name="password" placeholder="密码" v-model="password">
			</div>

			<div class="login-btn" @click="login">登录</div>

			<div class="register-btn" @click="logout">注册</div>
		</div>
	</div>
</template>
<script>
	import db from '../../../app.config'
	import bus from '../../util/bus'

	export default {
		name: 'login',
		data() {
			return {
				username: '',
				password: '',
				id: undefined
			}
		},
		mounted() {		
		},
		methods: {
			async login() {
				try{
					const user = await db().login(this.username, this.password)
					const res = await db().findUser(user.userId, user.id)
					this.id = user.id
					if(res){
						sessionStorage.setItem('user', JSON.stringify(res))
						this.$store.commit('setUser', res)
						this.$toast('登录成功', {
							type: 'success',
						})
						bus.$on('toastClosed', () => {
							this.$router.push('/')
						})
					}
				}catch(err){					
					this.$toast('登录失败', {
						type: 'fail'
					})
				}
			},
			async logout() {
				const res = await db().logout(this.id)
				console.log(res)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.app-view{
		background: #fff;
	}
	.layout{
		padding: 0 28px;
		.logo-wrapper{
			padding: 30px 0 10px;
			text-align: center;
			.logo{
				background-image: url(../../assets/images/logo2.png);
				background-color: #ff6700;
				background-size: 34px 34px;
				background-repeat: no-repeat;
				background-position: center;
				width: 48px;
				height: 48px;
				margin: 0 auto;
			}
			.text{
				margin-top: 16px;
				font-size: 18px; 
			}
		}
		.input{
			input{
				font-size: 18px;
				display: block;
				width: 100%;
				height: 53px;
				padding: 0 16px;
				border-bottom: 2px solid #ddd;
				color: $navColor;
			}
		}
		.login-btn,.register-btn{
			height: 50px;
			line-height: 50px;
			text-align: center;
			border-radius: 5px;
			background: #ff6700;
			color: #fff;
			margin-top: 20px;
			font-size: 18px;
		}
		.register-btn{
			background: #fff;
			border: 1px solid #ddd;
			color: $navColor;
		}
	}
</style>