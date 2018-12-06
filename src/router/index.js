import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Movie from '../components/Movie'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import LogOut from '../components/LogOut'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/logout',
      name: 'LogOut',
      component: LogOut
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie,
      meta: {
        requireAuth: true
      }
    }
  ]
})
export default router
