/*
路由器模块
 */
import VueRouter from 'vue-router'
import Vue from 'vue'
import About from '../views/about'
import Home from '../views/home'
import News from '../views/news'
import Messages from '../views/messages'
import MessageDetail from '../views/messageDetail'

Vue.use(VueRouter)

export default new VueRouter({
  //配置n个理由
  routes:[
    {
      path:'/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path:'/home/news',
          component:News,
        },
        {
          path:'messages',
          component:Messages,
          children:[
            {
              path:':id',
              component:MessageDetail,
            }
          ]
        },
        {
          path: '',
          redirect:'/home/news',
        }
      ]
    },
    {
      path: '/',
      redirect:'/about'
    }
  ]
})
