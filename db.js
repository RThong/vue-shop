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
	axios.post('https://d.apicloud.com/mcm/api/user/5b1e9bdd372592df27c30dba',
	{
		$push: {
			cartList: {
				productId:"5b1de5bd9511516765196865",
				name:"小米6X 6GB+128GB","price":"1999",
				img:"/static/cf8df89713342d51d01bff5ed1bced57.jpg",
				num:37,
				checked:1
			}
		},
		_method:'PUT'
	},
	{
		headers: {
			...getHeaders(),
			authorization: 'DX1rxg2IdoQ0HGzdcoG20fRQlndWEU2NrJEZD5id4hSDtLB96yCr9egOEzLaZ6DY'
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
