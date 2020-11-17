import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dash-board',
    name: 'DashBoard',
    component: () => import('@/views/DashBoard.vue')
  },
  {
    path: '/404/:lack',
    name: 'page404',
    component: () => import('@/views/Bad404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

// 设置跳转前后
router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next({ path: `/404/${to.name || to.path}` })
  } else if (to === from) {
    next(false)
  } else {
    next()
  }
})
