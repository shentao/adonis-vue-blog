import Vue from 'vue'
import App from './App.vue'
import PostsList from './PostsList.vue'
import NewPost from './NewPost.vue'
import Login from './Login.vue'
import Signup from './Signup.vue'
import axios from 'axios'
import VueStash from 'vue-stash'

import VueRouter from 'vue-router'
import { getAuthHeader, checkAuth, logout, currentUser } from './auth.js'

Vue.use(VueRouter)
Vue.use(VueStash)

const sessionToken = checkAuth()

if (sessionToken) {
  axios.defaults.headers.common['Authorization'] = sessionToken
}

export const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: PostsList },
    { path: '/new', component: NewPost },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/logout', redirect: '/login' }
  ]
})

new Vue({
  router,
  data () {
    return {
      store: {
        currentUser
      }
    }
  },
  watch: {
    $route () {
      this.store.currentUser = currentUser
    }
  },
  el: '#app',
  render: h => h(App)
})
