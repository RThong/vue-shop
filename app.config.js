const axios = require('axios')
const sha1 = require('sha1')

const appId = 'A6073734459826'
const	appKey = 'E19391E2-EC85-DE75-6369-51E455E791E0'

const baseURL = 'https://d.apicloud.com/mcm/api'

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

export default () => {
	const getHeaders = () =>{
		const now = Date.now()
		return {
			'X-APICloud-AppId': appId,
			'X-APICloud-AppKey': `${sha1(`${appId}UZ${appKey}UZ${now}`)}.${now}`			
		}
	}
	return {
		async login(username, password) {
			return handleRequest(await axios.post(`${baseURL}/user/login`,
										{
											username,
											password
										},
										{
											headers: getHeaders()
										}))
		},
		async findUser(userId, authorizationId) {
			return handleRequest(await axios.get(`${baseURL}/user/${userId}`,
							{
								headers: {
									...getHeaders(),
									authorization: authorizationId
								}
							}))
		},
		async logout(authorizationId) {
			return handleRequest(await axios.post(`${baseURL}/user/logout`,
							{
								token: authorizationId
							},
							{
								headers: {
									...getHeaders(),
									authorization: authorizationId
								}
							}))
		},
		async getProduct() {
			return handleRequest(await axios.get(`${baseURL}/product`,
			{
				headers: getHeaders()
			}))
		},
		async updateUser(value, userId, authorizationId) {
			return handleRequest(await axios.post(`${baseURL}/user/${userId}`,
				{
					cartList: value,
					_method: 'PUT'
				},
				{
					headers: {
						...getHeaders(),
						authorization: authorizationId
					}
				}))
		},
		async delCartList(value, userId, authorizationId) {
			return handleRequest(await axios.post(`${baseURL}/user/${userId}`,
				{
					$pull: {
						cartList: value,
					},
					_method: 'PUT'
				},
				{
					headers: {
						...getHeaders(),
						authorization: authorizationId
					}
				}))
		},
	}
}
