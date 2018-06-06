const axios = require('axios')
const sha1 = require('sha1')

const appId = 'A6073734459826'
const	appKey = 'E19391E2-EC85-DE75-6369-51E455E791E0'

const getHeaders = () =>{
	const now = Date.now()
	return {
		'X-APICloud-AppId': appId,
		'X-APICloud-AppKey': `${sha1(`${appId}UZ${appKey}UZ${now}`)}.${now}`
	}
}

//注册
// axios.post('https://d.apicloud.com/mcm/api/user',
// 	{
// 		username: 'hong',
// 		password: '123456'
// 	},
// 	{
// 		headers: getHeaders()
// 	}).then(res => {
// 			console.log(res)
// 		})

//登录
// console.dir(axios.post('https://d.apicloud.com/mcm/api/user/login',
// 	{
// 		username: 'hong',
// 		password: '123456'
// 	},
// 	{
// 		headers: getHeaders()
// 	}))

	const fn = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					x: 1,
					y: 2
				})
			}, 2000)
		})
		
	}
	const a = ({x,y}) => {
		console.log(x+y)
	}

	async function out() {
		a(await fn())
	}
	console.log(fn())
	out()