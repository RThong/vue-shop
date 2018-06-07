const axios = require('axios')
const sha1 = require('sha1')

const appId = 'A6073734459826'
const	appKey = 'E19391E2-EC85-DE75-6369-51E455E791E0'

// export default () => {
	const getHeaders = () =>{
		const now = Date.now()
		return {
			'X-APICloud-AppId': appId,
			'X-APICloud-AppKey': `${sha1(`${appId}UZ${appKey}UZ${now}`)}.${now}`
		}
	}
	// return {
		// login(username, password) {
		// 	return axios.post('https://d.apicloud.com/mcm/api/user/login',
		// 					{
		// 						username,
		// 						password
		// 					},
		// 					{
		// 						headers: getHeaders()
		// 					})
		// },
		// findUser(id) {
		// 	return axios.get(`https://d.apicloud.com/mcm/api/user/5b17e5ef3633cd2b35912ebd`,
		// 					{
		// 						headers: getHeaders()
		// 					})
		// }

	// }
// }
axios.get(`https://d.apicloud.com/mcm/api/user/5b17e5ef3633cd2b35912ebd`,
							{
								headers: getHeaders(),
								authorization: 'xhN18xf9PpG58XpmEMhJSH2vADnKkkVeucin2eYf2uswg8uXERaA04EY2CciZ8qe'
							}).then(res=>{
								console.log(res)
							})
