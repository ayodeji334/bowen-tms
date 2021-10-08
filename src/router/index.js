import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/staff',
    name: 'StaffLogin',
    component: () => import('../views/StaffLogin.vue')
  },
  {
    path: '/booking',
    name: 'Booking',
    component: () => import('../views/Booking.vue')
  },
  {
    path: '/booking-detail',
    name: 'BookingDetail',
    component: () => import('../views/BookingDetail.vue')
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: () => import('../views/Dashboard.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
