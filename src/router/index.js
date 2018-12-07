import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Movie from '../components/Movie'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import LogOut from '../components/LogOut'
import AddMovie from '../components/AddMovie'
import EditMovie from '../components/EditMovie'
import UserProfile from '../components/UserProfile'
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
      component: Movie
    },
    {
      path: '/addMovie',
      name: 'AddMovie',
      component: AddMovie
    },
    {
      path: '/editMovie',
      name: 'EditMovie',
      component: EditMovie
    },
    {
      path: '/profile',
      name: 'UserProfile',
      component: UserProfile
    }
  ]
})
export default router
