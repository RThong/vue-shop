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
			return handleRequest(await axios.post('https://d.apicloud.com/mcm/api/user/login',
										{
											username,
											password
										},
										{
											headers: getHeaders()
										}))
		},
		async findUser(userId, authorizationId) {
			return handleRequest(await axios.get(`https://d.apicloud.com/mcm/api/user/${userId}`,
							{
								headers: {
									...getHeaders(),
									authorization: authorizationId
								}
							}))
		},
		async logout(authorizationId) {
			return handleRequest(await axios.post(`https://d.apicloud.com/mcm/api/user/logout`,
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
			return handleRequest(await axios.get('https://d.apicloud.com/mcm/api/product',
			{
				headers: getHeaders()
			}))
		}
	}
}
