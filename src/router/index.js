import Vue from 'vue'
import Router from 'vue-router'

import GMap from '@/components/home/GMap'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import ViewProfile from '@/components/profile/ViewProfile'

import {db,auth} from "@/firebase/init";

Vue.use(Router)

let routes = [{
    path: '/',
    name: 'GMap',
    component: GMap,
    meta: { requiresAuth: true}
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile/:id',
    name: 'ViewProfile',
    component: ViewProfile,
    meta: { requiresAuth: true}
  },
  {
    path: '*',
    redirect: {
      name: 'GMap'
    }
  }
];

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (auth.currentUser) {
      next()
    } else {
      next({path: '/login'})
    }
    
  } else {
    next()
  }
})




export default router;