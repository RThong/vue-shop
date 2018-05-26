export default [
	{
		path: '/',
		name: 'index',
		component: () => import('../views/index/index.vue'),
		meta: {
			navIndex: 0
		}
	},
	{
		path: '/category',
		name: 'category',
		component: () => import('../views/category/category.vue'),
		meta: {
			navIndex: 1
		}
	},
	{
		path: '/cart',
		name: 'cart',
		component: () => import('../views/cart/cart.vue'),
		meta: {
			navIndex: 2
		}
	},
	{
		path: '/user',
		name: 'user',
		component: () => import('../views/user/user.vue'),
		meta: {
			navIndex: 3
		}
	},
]