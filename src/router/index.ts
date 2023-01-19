// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/charts',
    name: 'Charts',
    component: () => import('@/views/charts/index.vue'),
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import('@/views/posts/index.vue'),
  },
  {
    path: '/pages',
    name: 'Pages',
    component: () => import('@/views/pages/index.vue'),
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('@/views/users/index.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/settings/index.vue'),
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('@/views/orders/index.vue'),
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: () => import('@/views/tickets/index.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
