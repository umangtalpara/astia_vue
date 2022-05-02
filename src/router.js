import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('./views/Services.vue')
    },
    {
      path: '/hire',
      name: 'hire',
      component: () => import('./views/Hire.vue')
    },
    {
      path: '/hire-details',
      name: 'hire-details',
      component: () => import('./views/hire-details.vue')
    },
    {
      path: '/services-details',
      name: 'services-details',
      component: () => import('./views/services-details.vue')
    }
  ]
})
