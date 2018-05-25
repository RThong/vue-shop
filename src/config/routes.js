export default [
	{
		path: '/',
		name: 'index',
		component: () => import('../views/index/index.vue')
	},
	{
		path: '/category',
		name: 'category',
		component: () => import('../views/category/category.vue')
	},
	{
		path: '/cart',
		name: 'cart',
		component: () => import('../views/cart/cart.vue')
	},
	{
		path: '/user',
		name: 'user',
		component: () => import('../views/user/user.vue')
	},
]