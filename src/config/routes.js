export default [
	{
		path: '/',
		name: 'computer',
		component: () => {
			return import('../views/computer/computer.vue')
		}
	},
	{
		path: '/',
		name: 'tv',
		component: () => {
			return import('../views/tv/tv.vue')
		}
	}
]