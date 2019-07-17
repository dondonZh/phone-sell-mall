import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: resolve => require(['./views/Home.vue'], resolve),
      redirect: '/home/sousuo',
      children: [
        {
          path: 'sousuo',
          component: resolve =>
            require(['./views/page/discovery.vue'], resolve),
          meta: { title: '发现' }
        },
        {
          path: 'about',
          component: resolve =>
            require(['./views/About.vue'], resolve),
          meta: { title: '关于' }
        },
        {
          path: 'add',
          component: resolve =>
            require(['./views/page/add.vue'], resolve),
          meta: { title: '添加' }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      name: '404',
      path: '/404',
      component: () => import('@/views/notFound.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
