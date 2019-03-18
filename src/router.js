import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HuoDong from './views/HuoDong'
import Find1 from './views/find/find1'
import Find2 from './views/find/find2'
import Find3 from './views/find/find3'
import FindVuex from './views/find/vuex'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/huodong',
      name:'huodong',
      redirect:'/huodong/find1',
      component:HuoDong,
      children:[
        {
          path:'/huodong/find1',
          name:'find1',
          component:Find1,
        },
        {
          path:'/huodong/find2',
          name:'find2',
          component:Find2,
        },
        {
          path:'/huodong/find3',
          name:'find3',
          component:Find3,
        },
        {
          path:'/huodong/findVuex',
          name:'findVuex',
          component:FindVuex,
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) { //页面切换回到顶部
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
