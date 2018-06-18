const axios = require('axios')
const sha1 = require('sha1')

const appId = 'A6073734459826'
const	appKey = 'E19391E2-EC85-DE75-6369-51E455E791E0'

const createError = (code, resp) => {
  const err = new Error(resp.message)
  err.code = code
  return err
}

const handleRequest = ({ status, data, ...rest }) => {
  if (status === 200) {
    return data
  } else {
    throw createError(status, rest)
  }
}

// export default () => {
	const getHeaders = () =>{
		const now = Date.now()
		return {
			'X-APICloud-AppId': appId,
			'X-APICloud-AppKey': `${sha1(`${appId}UZ${appKey}UZ${now}`)}.${now}`			
		}
	}
// 	return {
// 		async login(username, password) {
// 			return handleRequest(await axios.post('https://d.apicloud.com/mcm/api/user/login',
// 										{
// 											username,
// 											password
// 										},
// 										{
// 											headers: getHeaders()
// 										}))
// 		},

		//修改carList
		// axios.post(`https://d.apicloud.com/mcm/api/user/5b1e984990f9f67a094dd194`,
		// {
		// 	'cartList': [{"productId":"5b1de5bd9511516765195b4c","name":"小米6X 6GB+128GB","price":"1999","img":"/static/cf8df89713342d51d01bff5ed1bced57.jpg","num":2,"checked":1}],
		// 	_method: 'PUT'
		// },
		// 					{
		// 						headers: {
		// 							...getHeaders(),
		// 							authorization: 'KM9oqNMfi1VJFrPiXNxgC98UlheKMpj9f9lhhVi3O5leJyxIflIhToeZw95ZmMuD'
		// 						}
		// 					}).then(res=>console.log(res))

// 		async logout(authorizationId) {
// 			return handleRequest(await axios.post(`https://d.apicloud.com/mcm/api/user/logout`,
// 							{
// 								token: authorizationId
// 							},
// 							{
// 								headers: {
// 									...getHeaders(),
// 									authorization: authorizationId
// 								}
// 							}))
// 		}
// 	}
// }


	// const getHeaders = () =>{
	// 	const now = Date.now()
	// 	return {
	// 		'X-APICloud-AppId': appId,
	// 		'X-APICloud-AppKey': `${sha1(`${appId}UZ${appKey}UZ${now}`)}.${now}`			
	// 	}
	// }

	//添加cartList
	// axios.post('https://d.apicloud.com/mcm/api/user/5b1e9bdd372592df27c30dba',
	// {
	// 	$push: {
	// 		cartList: {
	// 			productId:"5b1de5bd9511516765196888",
	// 			name:"小米6X 6GB+128GB","price":"1999",
	// 			img:"/static/cf8df89713342d51d01bff5ed1bced57.jpg",
	// 			num:4,
	// 			checked:1
	// 		}
	// 	},
	// 	_method:'PUT'
	// },
	// {
	// 	headers: {
	// 		...getHeaders(),
	// 		authorization: 'KpFru1om6EVGfurKzvOqsyVl4NbDED0QGh9vCVTVDoZgBC8oUqSXT9F3vJU3JpVw'
	// 	}
	// })

	//添加product
	axios.post('https://d.apicloud.com/mcm/api/product',
	{
		name: '红米5',
		cover: 'https://i8.mifile.cn/v1/a1/11a2b2b9-8deb-5177-ac51-eb9c07b03c31!360x360.webp',
		images: ['https://i8.mifile.cn/v1/a1/7dc38112-bbf4-f3fa-db39-5f4674f9d0d4!720x792.webp',
				'https://i8.mifile.cn/v1/a1/7d040eee-5569-5074-864d-8c03f073e8c8!720x792.webp',
				'https://i8.mifile.cn/v1/a1/e3980743-9d5d-0a8a-9dab-0a37c8b98ef5!720x792.webp',
				'https://i8.mifile.cn/v1/a1/60acd23a-cd84-700d-a7fe-6bb31e5ff71b!720x792.webp',
				'https://i8.mifile.cn/v1/a1/dbed9798-2cab-1e5c-d28d-f83468567cec.webp'],
		price: '699',
		oldPrice: '799',
		intro: '12MP旗舰相机，骁龙处理器',
		redBrief: '「“小米8周年618狂欢”，2GB+16GB/3GB+32GB立减100元，领券再减50元；4GB+32GB立减200元。更享小米、花呗分期免息」',
		brief: '搭载了玩游戏超给力的高通骁龙处理器，后置12MP旗舰相机，前置柔光自拍，配备5.7英寸全面屏。',
		tag: '/static/289039eb-c3ed-7c26-69c3-5b07b72a797d.webp?w=120&h=48'
	},
	{
		headers: {
			...getHeaders()
		}
	})

	//注册
	// axios.post(`https://d.apicloud.com/mcm/api/user`,
	// {
	// 	username: 'admin',
	// 	password: '123456'
	// },
	// {
	// 	headers: {
	// 		...getHeaders()
	// 	}
	// })

		// async login(username, password) {
		// 	return handleRequest(await axios.post('https://d.apicloud.com/mcm/api/user/login',
		// 								{
		// 									username,
		// 									password
		// 								},
		// 								{
		// 									headers: getHeaders()
		// 								}))
		// },
		// async findUser(userId, authorizationId) {
		// 	return handleRequest(await axios.get(`https://d.apicloud.com/mcm/api/user/${userId}`,
		// 					{
		// 						headers: {
		// 							...getHeaders(),
		// 							authorization: authorizationId
		// 						}
		// 					}))
		// },
		// async logout(authorizationId) {
		// 	return handleRequest(await axios.post(`https://d.apicloud.com/mcm/api/user/logout`,
		// 					{
		// 						token: authorizationId
		// 					},
		// 					{
		// 						headers: {
		// 							...getHeaders(),
		// 							authorization: authorizationId
		// 						}
		// 					}))
		// }
