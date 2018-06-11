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
// 	const getHeaders = () =>{
// 		const now = Date.now()
// 		return {
// 			'X-APICloud-AppId': appId,
// 			'X-APICloud-AppKey': `${sha1(`${appId}UZ${appKey}UZ${now}`)}.${now}`			
// 		}
// 	}
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
// 		async findUser(userId, authorizationId) {
// 			return handleRequest(await axios.get(`https://d.apicloud.com/mcm/api/user/${userId}`,
// 							{
// 								headers: {
// 									...getHeaders(),
// 									authorization: authorizationId
// 								}
// 							}))
// 		},
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


	const getHeaders = () =>{
		const now = Date.now()
		return {
			'X-APICloud-AppId': appId,
			'X-APICloud-AppKey': `${sha1(`${appId}UZ${appKey}UZ${now}`)}.${now}`			
		}
	}

	// axios.post('https://d.apicloud.com/mcm/api/user/5b1e2633184c022a6a87a217',
	// {
	// 	$push: {
	// 		cartList: {
	// 			productId: '5b1de5bd9511516765195b4c',
	// 			name: '小米6X 6GB+128GB',
	// 			price: '1999',
	// 			img: '/static/cf8df89713342d51d01bff5ed1bced57.jpg',
	// 			num: 2
	// 		}
	// 	},
	// 	_method:'PUT'
	// },
	// {
	// 	headers: {
	// 		...getHeaders(),
	// 		authorization: 'E4SHaTDDdoAnHF8l29ODAfah1e4Z9tnR5crIBCVAREduyB1763JRMclLAlf2PpP1'
	// 	}
	// })

	//修改cartList的num
	axios.get(`https://d.apicloud.com/mcm/api/user/5b1e2633184c022a6a87a217`,
	{
		headers: {
			...getHeaders(),
			authorization: 'E4SHaTDDdoAnHF8l29ODAfah1e4Z9tnR5crIBCVAREduyB1763JRMclLAlf2PpP1'
		}
	}).then(res=>console.log(res.data.cartList))

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
