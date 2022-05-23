import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Orders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Coupons.vue')
      },
    ],
  },
  {
    path: '/product',
    component: () => import('../views/Userboard.vue'),
    children: [
      {
        path: 'cart',
        component: () => import('../views/UserCart.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/UserProduct.vue')
      },
    ],
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
})

export default router
