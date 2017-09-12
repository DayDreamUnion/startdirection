import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import GameRouter from '@/router/game'

import WelcomePage from '@/pages/Index.vue'

// 定义router
const routers = [
  {
    path: '/',
    name: 'Index',
    component: WelcomePage
  },
  GameRouter
]

// 创建Router，并返回实例
var router = new Router({
  // 防止URL中包含#
  mode: 'history',
  // 传入自定义路由
  routes: routers
})
// 防止路由保护
router.beforeEach((to, from, next) => {
  console.log('before router')
  // console.log(to.path)
  // console.log('from:')
  // console.log(from.path)
  next()
})
export default router
