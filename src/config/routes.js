export default [
	{
		path: '/',
		name: 'index',
		components: {
			default: () => import(/* webpackChunkName: "index" */ '../views/index/index.vue'),
			footer: () => import(/* webpackChunkName: "footer" */ '../components/footer/footer.vue'),
		},
		meta: {
			navIndex: 0,
			keepAlive: true
		}
	},
	{
		path: '/category',
		name: 'category',
		components: {
			default: () => import(/* webpackChunkName: "category" */ '../views/category/category.vue'),
			footer: () => import(/* webpackChunkName: "footer" */ '../components/footer/footer.vue')
		},
		meta: {
			navIndex: 1,
			keepAlive: true
		}
	},
	{
		path: '/cart',
		name: 'cart',
		components: {
			default: () => import(/* webpackChunkName: "cart" */ '../views/cart/cart.vue'),
			footer: () => import(/* webpackChunkName: "footer" */ '../components/footer/footer.vue')
		},
		meta: {
			navIndex: 2
		}
	},
	{
		path: '/user',
		name: 'user',
		components: {
			default: () => import(/* webpackChunkName: "user" */ '../views/user/user.vue'),
			footer: () => import(/* webpackChunkName: "footer" */ '../components/footer/footer.vue')
		},
		meta: {
			navIndex: 3
		}
	},
	{
		path: '/search',
		name: 'search',
		component: () => import(/* webpackChunkName: "search" */ '../views/search/search.vue'),
	},
	{
		path: '/login',
		name: 'login',
		component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue')
	},
	{
		path: '/commodity/detail/:id',
		name: 'detail',
		component: () => import(/* webpackChunkName: "detail" */ '../views/detail/detail.vue')
	},
	{
		path: '/search/list',
		name: 'result',
		component: () => import(/* webpackChunkName: "result" */ '../views/result/result.vue')	
	},
]