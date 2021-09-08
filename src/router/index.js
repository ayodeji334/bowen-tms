import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login
  },
  {
    path: '/staff',
    name: 'StaffLogin',
    component: () => import('../views/StaffLogin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
