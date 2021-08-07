import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入全局样式表
import '@/styles/global.css'
// 导入字体图标
import '@/assets/fonts/iconfont.css'

// 引入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入树形表格组件
import TreeTable from 'vue-table-with-tree-grid'

// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

// 导入NProgress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import axios from 'axios'

// 配置请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

// 通过拦截器挂载请求头
axios.interceptors.request.use(config => {
  // console.log(config)
  // 显示loading进度条
  NProgress.start()
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

// response拦截器
axios.interceptors.response.use(config => {
  // 隐藏loading进度条
  NProgress.done()
  return config
})

// 挂载到 vue 的原型对象上，可通过 this 直接访问 http 从而发送 axios 请求
Vue.prototype.$http = axios

Vue.use(ElementUI)

Vue.component('tree-table', TreeTable)

Vue.use(VueQuillEditor)

Vue.config.productionTip = false

// 时间格式过滤器
Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal * 1000)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
