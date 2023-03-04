import Home from '@/pages/Home.vue'
import * as VueRouter  from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

export default router
