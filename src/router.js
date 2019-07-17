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
      redirect: '/home/discovery',
      children: [
        {
          path: 'discovery',
          component: resolve =>
            require(['./views/page/discovery.vue'], resolve),
          meta: { title: '发现' }
        },
        {
          path: 'about',
          component: resolve =>
            require(['./views/About.vue'], resolve),
          meta: { title: '关于' }
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
