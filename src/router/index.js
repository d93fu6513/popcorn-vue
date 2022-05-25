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
        component: () => import('../views/BkProducts.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/BkOrders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/BkCoupons.vue')
      },
    ],
  },
  {
    path: '/product',
    component: () => import('../views/ProductBoard.vue'),
    children: [
      {
        path: 'index',
        component: () => import('../views/ProductIndex.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/ProductItem.vue')
      },
    ],
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/final',
    component: () => import('../views/FinalBoard.vue'),
    children: [
      {
        path: 'cart',
        component: () => import('../views/FinalCart.vue')
      },
      {
        path: 'check',
        component: () => import('../views/FinalCheck.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/FinalCheckOut.vue')
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
})

export default router
