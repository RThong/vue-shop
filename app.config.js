const axios = require('axios')
const sha1 = require('sha1')

const appId = 'A6073734459826'
const	appKey = 'E19391E2-EC85-DE75-6369-51E455E791E0'

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
			return (await axios.post('https://d.apicloud.com/mcm/api/user/login',
										{
											username,
											password
										},
										{
											headers: getHeaders()
										})).data
		},
		findUser(userId, authorizationId) {
			return axios.get(`https://d.apicloud.com/mcm/api/user/${userId}`,
							{
								headers: {
									...getHeaders(),
									authorization: authorizationId
								}
							})
		}

	}
}
