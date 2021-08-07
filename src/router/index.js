import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/index.vue'),
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          name: 'Welcome',
          component: () => import('@/views/home/Welcome.vue')
        },
        {
          path: '/users',
          component: () => import('@/views/user/Users.vue')
        },
        {
          path: '/rights',
          component: () => import('@/views/power/Rights.vue')
        },
        {
          path: '/roles',
          component: () => import('@/views/power/Roles.vue')
        },
        {
          path: '/categories',
          component: () => import('@/views/goods/Cate.vue')
        },
        {
          path: '/params',
          component: () => import('@/views/goods/Params.vue')
        },
        {
          path: '/goods',
          component: () => import('@/views/goods/List.vue')
        },
        {
          path: '/goods/add',
          component: () => import('@/views/goods/Add.vue')
        },
        {
          path: '/orders',
          component: () => import('@/views/order/Order.vue')
        },
        {
          path: '/reports',
          component: () => import('@/views/report/Report.vue')
        }
      ]
    }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
