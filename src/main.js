// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 导入Vue实例
import Vue from 'vue'
// 导入App组件
import AppComponent from './App'
// 导入路由组件
import router from './router'
// // 导入网络请求三方组件
// import VueResource from 'vue-resource'
// // 告诉Vue使用这个网络组件
// Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
// Vue实例化
new Vue({
  // 定义根组件的选择器，需与index.html匹配
  el: '#appVue',
  // 传入Router实例
  router,
  // 声明根组件可以访问的组件
  components: {
    app: AppComponent
  },
  data: {
    eventHub: new Vue()
  },
  // 渲染函数，根组件将会被AppComponent的内容替代
  // 与template标签二选一
  render: (h) => h('app')
})
