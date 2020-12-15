import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Layout from '../views/layout/Layout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
  },
	{
		path: '/pms',
		name: 'pms',
		component: Layout,
		children:[
			{
				path: 'productCate',
				name: 'productCate',
				component: () => import('@/views/pms/productCat/index'),
			}
		]
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
