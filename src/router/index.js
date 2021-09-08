import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import StaffLogin from '@/views/StaffLogin.vue'

const routes = [
  {
    path: '/',
    name: 'student-login',
    component: Login,
  },
  {
    path: '/staff',
    name: 'staff-login',
    component: StaffLogin,
  }
  
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router