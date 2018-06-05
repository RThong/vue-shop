<template>
	<div class="app-view app-view-with-footer app-view-with-header category-wrapper">
		<div class="list-navbar">
			<ul>
				<li v-for="(item,index) in navList">
					<a :href="`#${item.id}`" :class="{active: active===index}" @click="active=index">{{item.name}}</a>
				</li>			
			</ul>
		</div>
		<div class="list-wrap" ref="scrollTarget">
			<category-list :id="item.id" v-for="(item,index) in navList" :banner="item.banner" :productList="item.category" :key="index">
			</category-list>
		</div>
	</div>
</template>
<script>
	import categoryList from '../../components/navList/navList.vue'
	export default {
		data(){
			return {
				scrollTop: 0,
				active: 0,
				navList: [
					{
						id: 'new',
						name: '新品',
						banner: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/711275806886438be20e33ec943a904a.jpg?thumb=1&w=500&h=200',
						category: [
							{
								name: '手机',
								products: [
									{
										name: '小米8',
										img: 'https://i8.mifile.cn/b2c-mimall-media/cae1e9af28aebb1d0e065cbdc08d8f66!120x120.png'
									},
									{
										name: '小米8',
										img: 'https://i8.mifile.cn/b2c-mimall-media/cae1e9af28aebb1d0e065cbdc08d8f66!120x120.png'
									},
									{
										name: '小米8',
										img: 'https://i8.mifile.cn/b2c-mimall-media/cae1e9af28aebb1d0e065cbdc08d8f66!120x120.png'
									},
									{
										name: '小米8',
										img: 'https://i8.mifile.cn/b2c-mimall-media/cae1e9af28aebb1d0e065cbdc08d8f66!120x120.png'
									},
									{
										name: '小米8',
										img: 'https://i8.mifile.cn/b2c-mimall-media/cae1e9af28aebb1d0e065cbdc08d8f66!120x120.png'
									},
								]
							},
							{
								name: '电视',
								products: [
									{
										name: '75寸 电视4',
										img: 'https://i8.mifile.cn/b2c-mimall-media/bf2dc71cbf6fa8413b7ade09719155a0!120x120.jpg'
									},
									{
										name: '75寸 电视4',
										img: 'https://i8.mifile.cn/b2c-mimall-media/bf2dc71cbf6fa8413b7ade09719155a0!120x120.jpg'
									},
									{
										name: '75寸 电视4',
										img: 'https://i8.mifile.cn/b2c-mimall-media/bf2dc71cbf6fa8413b7ade09719155a0!120x120.jpg'
									},
									{
										name: '75寸 电视4',
										img: 'https://i8.mifile.cn/b2c-mimall-media/bf2dc71cbf6fa8413b7ade09719155a0!120x120.jpg'
									},
									{
										name: '75寸 电视4',
										img: 'https://i8.mifile.cn/b2c-mimall-media/bf2dc71cbf6fa8413b7ade09719155a0!120x120.jpg'
									},
								]
							},
						]
					},
					{
						id: 'phone',
						name: '手机',
						banner: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bb5cfaa54a1bf61c85539226f5049de1.jpg?thumb=1&w=500&h=200',
						category: [
							{
								name: '小米手机',
								products: [
									{
										name: '小米8',
										img: 'https://i8.mifile.cn/b2c-mimall-media/cae1e9af28aebb1d0e065cbdc08d8f66!120x120.png'
									},
									{
										name: '小米8',
										img: 'https://i8.mifile.cn/b2c-mimall-media/cae1e9af28aebb1d0e065cbdc08d8f66!120x120.png'
									},
									{
										name: '小米8',
										img: 'https://i8.mifile.cn/b2c-mimall-media/cae1e9af28aebb1d0e065cbdc08d8f66!120x120.png'
									},
									{
										name: '小米8',
										img: 'https://i8.mifile.cn/b2c-mimall-media/cae1e9af28aebb1d0e065cbdc08d8f66!120x120.png'
									},
									{
										name: '小米8',
										img: 'https://i8.mifile.cn/b2c-mimall-media/cae1e9af28aebb1d0e065cbdc08d8f66!120x120.png'
									},
								]
							},
							{
								name: '红米手机',
								products: [
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
								]
							},
						]
					},
					{
						id: 'tv',
						name: '电视',
						banner: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/01fb9a83027cb68f07e5318c49ccf79a.jpg?thumb=1&w=500&h=200',
						category: [
							{
								name: '电视',
								products: [
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
								]
							},
							{
								name: '红米手机',
								products: [
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
								]
							},
						]
					},
					{
						id: 'computer',
						name: '电脑',
						banner: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/01fb9a83027cb68f07e5318c49ccf79a.jpg?thumb=1&w=500&h=200',
						category: [
							{
								name: '电视',
								products: [
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
								]
							},
							{
								name: '红米手机',
								products: [
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
								]
							},
						]
					},
					{
						id: 'jiadian',
						name: '家电',
						banner: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/01fb9a83027cb68f07e5318c49ccf79a.jpg?thumb=1&w=500&h=200',
						category: [
							{
								name: '电视',
								products: [
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
								]
							},
							{
								name: '红米手机',
								products: [
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
								]
							},
						]
					},
					{
						id: 'jiazhuang',
						name: '家装',
						banner: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/01fb9a83027cb68f07e5318c49ccf79a.jpg?thumb=1&w=500&h=200',
						category: [
							{
								name: '电视',
								products: [
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
								]
							},
							{
								name: '红米手机',
								products: [
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
								]
							},
						]
					},
					{
						id: 'router',
						name: '路由',
						banner: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/01fb9a83027cb68f07e5318c49ccf79a.jpg?thumb=1&w=500&h=200',
						category: [
							{
								name: '电视',
								products: [
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
								]
							},
							{
								name: '红米手机',
								products: [
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
								]
							},
						]
					},
					{
						id: 'ai',
						name: '智能',
						banner: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/01fb9a83027cb68f07e5318c49ccf79a.jpg?thumb=1&w=500&h=200',
						category: [
							{
								name: '电视',
								products: [
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
								]
							},
							{
								name: '红米手机',
								products: [
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
								]
							},
						]
					},
					{
						id: 'children',
						name: '儿童',
						banner: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/01fb9a83027cb68f07e5318c49ccf79a.jpg?thumb=1&w=500&h=200',
						category: [
							{
								name: '电视',
								products: [
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
								]
							},
							{
								name: '红米手机',
								products: [
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
								]
							},
						]
					},
					{
						id: 'lantern',
						name: '灯具',
						banner: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/01fb9a83027cb68f07e5318c49ccf79a.jpg?thumb=1&w=500&h=200',
						category: [
							{
								name: '电视',
								products: [
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
								]
							},
							{
								name: '红米手机',
								products: [
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
								]
							},
						]
					},
					{
						id: 'power',
						name: '电源',
						banner: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/01fb9a83027cb68f07e5318c49ccf79a.jpg?thumb=1&w=500&h=200',
						category: [
							{
								name: '电视',
								products: [
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
								]
							},
							{
								name: '红米手机',
								products: [
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
								]
							},
						]
					},
					{
						id: 'headset',
						name: '耳机',
						banner: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/01fb9a83027cb68f07e5318c49ccf79a.jpg?thumb=1&w=500&h=200',
						category: [
							{
								name: '电视',
								products: [
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
								]
							},
							{
								name: '红米手机',
								products: [
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
								]
							},
						]
					},
					{
						id: 'yinxiangshang',
						name: '音箱',
						banner: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/01fb9a83027cb68f07e5318c49ccf79a.jpg?thumb=1&w=500&h=200',
						category: [
							{
								name: '电视',
								products: [
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
								]
							},
							{
								name: '红米手机',
								products: [
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
								]
							},
						]
					},
					{
						id: 'present',
						name: '礼品',
						banner: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/01fb9a83027cb68f07e5318c49ccf79a.jpg?thumb=1&w=500&h=200',
						category: [
							{
								name: '电视',
								products: [
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
								]
							},
							{
								name: '红米手机',
								products: [
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
								]
							},
						]
					},
					{
						id: 'life',
						name: '生活',
						banner: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/01fb9a83027cb68f07e5318c49ccf79a.jpg?thumb=1&w=500&h=200',
						category: [
							{
								name: '电视',
								products: [
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
								]
							},
							{
								name: '红米手机',
								products: [
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
								]
							},
						]
					},
					{
						id: 'service',
						name: '服务',
						banner: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/01fb9a83027cb68f07e5318c49ccf79a.jpg?thumb=1&w=500&h=200',
						category: [
							{
								name: '电视',
								products: [
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
								]
							},
							{
								name: '红米手机',
								products: [
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
								]
							},
						]
					},
					{
						id: 'mifenka',
						name: '米粉卡',
						banner: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/01fb9a83027cb68f07e5318c49ccf79a.jpg?thumb=1&w=500&h=200',
						category: [
							{
								name: '电视',
								products: [
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
								]
							},
							{
								name: '红米手机',
								products: [
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
								]
							},
						]
					},
					{
						id: 'lingshouye',
						name: '零售业',
						banner: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/01fb9a83027cb68f07e5318c49ccf79a.jpg?thumb=1&w=500&h=200',
						category: [
							{
								name: '电视',
								products: [
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
									{
										name: '32-40英寸',
										img: 'https://i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png'
									},
								]
							},
							{
								name: '红米手机',
								products: [
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
									{
										name: '红米Note5',
										img: 'https://i8.mifile.cn/b2c-mimall-media/dd74d7ab56d775fc95ab11497c2494e3!120x120.png'
									},
								]
							},
						]
					},
				],
			}
		},
		components: {
			categoryList
		},
		mounted() {
			this.$store.commit('setHeaderText', '分类')
			if(!this.$store.state.headerIsShow){
				this.$store.commit('setHeaderIsShow', true)
			}
		},
		activated() {
			this.$store.commit('setHeaderText', '分类')
			if(!this.$store.state.headerIsShow){
				this.$store.commit('setHeaderIsShow', true)
			}
			this.$refs.scrollTarget.scrollTop = this.scrollTop 	
		},
		deactivated() {
			this.scrollTop = this.$refs.scrollTarget.scrollTop
		},
		methods: {
		},
		beforeRouteLeave(to, from, next) {
			if(to.fullPath !== "/category" && to.fullPath !== "/cart"){
				this.$store.commit('setHeaderIsShow', false)
			}
			next()
		},
	}
</script>
<style lang="scss" scoped>
	.active{
		font-size: 18px !important;
		color: $mainColor !important;
	}
	.category-wrapper{
		.list-navbar{
			position: fixed;
			left: 0;
			top: 50px;
			bottom: 52px;
			width: 78px;
			overflow: hidden;
			background: #fff;
			ul{
				overflow-y: auto;
				position: absolute;
				left: 0;
				top: 0;
				bottom: 0;
				width: 78px;
				li{
					a{
						display: block;
						border-right: 1px solid $bgColor; 
						height: 47px;
						text-align: center;
						line-height: 47px;
						color: $navColor;
						font-size: 14px;
						transition: font-size .2s linear;
					}
				}
			}
		}
		.list-wrap{
			overflow-y:auto;
			overflow-x: hidden;
			position: absolute;
			left: 78px;
			top: 50px;
			bottom: 52px;
			right: 0;
    	padding: 2px 16px;
    	background: #fff;
		}
	}


</style>