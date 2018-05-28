export default [
	{
		path: '/',
		name: 'index',
		components: {
			default: () => import('../views/index/index.vue'),
			footer: () => import('../components/footer/footer.vue')
		},
		meta: {
			navIndex: 0
		}
	},
	{
		path: '/category',
		name: 'category',
		components: {
			default: () => import('../views/category/category.vue'),
			footer: () => import('../components/footer/footer.vue')
		},
		meta: {
			navIndex: 1
		}
	},
	{
		path: '/cart',
		name: 'cart',
		components: {
			default: () => import('../views/cart/cart.vue'),
			footer: () => import('../components/footer/footer.vue')
		},
		meta: {
			navIndex: 2
		}
	},
	{
		path: '/user',
		name: 'user',
		components: {
			default: () => import('../views/user/user.vue'),
			footer: () => import('../components/footer/footer.vue')
		},
		meta: {
			navIndex: 3
		}
	},
	{
		path: '/search',
		name: 'search',
		component: () => import('../views/search/search.vue')
	},
]