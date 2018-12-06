// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2'
Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)
Vue.config.productionTip = false
let app = ''

const config = {
  apiKey: 'AIzaSyDyxNCzYMSF8OeAsxzG_9Z_LlV_hGJuSF0',
  authDomain: 'mymovie-49449.firebaseapp.com',
  databaseURL: 'https://mymovie-49449.firebaseio.com',
  projectId: 'mymovie-49449',
  storageBucket: 'mymovie-49449.appspot.com',
  messagingSenderId: '674141362108'
}
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
