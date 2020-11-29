import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import login from '@/components/login.vue'
import regi from '@/components/regi'
import messenger from '@/components/messenger'
import profile from '@/components/profile'
import timeline from '@/components/timeline'
import pricing from '@/components/pricing'
import emailTemplate from '@/components/emailTemplate'
import invoice from '@/components/invoice'
import register from '@/components/register'
import resetPassword from '@/components/resetPassword'
import forgetPassword from '@/components/forgetPassword'
import about from '@/components/about'
import friend from '@/pages/profile/friend'
import photo from '@/pages/profile/photo'
import newsFeed from '@/pages/newsFeed'
import cahtjs from '@/components/cahtjs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/regi',
      name: 'regi',
      component: regi
    },
    {
      path: '/messenger',
      name: 'messenger',
      component: messenger
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: timeline
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: pricing
    },
    {
      path: '/emailTemplate',
      name: 'emailTemplate',
      component: emailTemplate
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: invoice
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/resetPassword',
      name: 'resetPassword',
      component: resetPassword
    },
    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: forgetPassword
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/friend',
      name: 'friend',
      component: friend
    },
    {
      path: '/photo',
      name: 'photo',
      component: photo
    },
    {
      path: '/newsFeed',
      name: 'newsFeed',
      component: newsFeed
    },
    {
      path: '/cahtjs',
      name: 'cahtjs',
      component: cahtjs
    }
  ]
})
