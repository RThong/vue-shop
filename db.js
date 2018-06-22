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

	//正则
	var filter = 
	}
	axios.get(`https://d.apicloud.com/mcm/api/product?filter=${encodeURIComponent(JSON.stringify({
		where:{
			name:{
				like: '独显'
			},
		}
	}
	))}`,
	{
		headers: {
			...getHeaders()
		}
	}).then(res => console.log(res.data))
	//添加product
	// axios.post('https://d.apicloud.com/mcm/api/product',
	// {
	// 	name: '13.3"笔记本i5 独显',
	// 	cover: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg?thumb=1&w=360&h=360',
	// 	images: ['https://i8.mifile.cn/v1/a1/00766a98-2468-5cc0-ad4b-19b6a4b6c23d!720x792.webp',
	// 			],
	// 	price: '5199',
	// 	intro: '指纹解锁，全金属机身',
	// 	brief: '2G独显 / 8GB 内存 + 256GB SSD / 第七代 Intel 酷睿i5 处理器 / FHD 全贴合屏幕',
	// 	tag: '/static/0c55f13eefcb247d5a706ae91cff24c2.png'
	// },
	// {
	// 	headers: {
	// 		...getHeaders()
	// 	}
	// })

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
