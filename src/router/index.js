import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/companies',
    name: 'Companies',
    component: () => import('../views/Companies')
  },

]
const router = new VueRouter({routes})

export default router