import Vue from 'vue'
import Router from 'vue-router'

import Movie from '../components/Movie'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import LogOut from '../components/LogOut'
import AddMovie from '../components/AddMovie'
import EditMovie from '../components/EditMovie'
import UserProfile from '../components/UserProfile'
import Slide from '../components/Slide'
import Search from '../components/Search'
import MovieDetail from '../components/MovieDetail'
import Comment from '../components/Comment'
import firebase from 'firebase'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Slide',
      component: Slide
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
      component: LogOut,
      meta: {
        requireAuth: true
      }
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
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/detail',
      name: 'MovieDetail',
      component: MovieDetail
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    }
  ]
})
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.requireAuth)
  if (requireAuth && !currentUser) next('login')
  else next()
})
export default router
