import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/companies',
    name: 'Companies',
    component: () => import('../views/Companies.vue')
  },
  {
    path: '/master',
    name: 'Master',
    component: () => import('../views/Master.vue')
  },
  {
    path: '/login',
    name: 'Log in',
    component: () => import('../views/Login.vue')
  }

]
const router = new VueRouter({routes})

export default router