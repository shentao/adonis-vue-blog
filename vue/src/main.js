// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import Hello from './components/Hello'
import Posts from './components/Posts'
import Users from './components/Users'
import ShowUser from './components/ShowUser'

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Hello },
  {
    path: '/posts/:id',
    name: 'posts',
    component: Posts
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
    children: [
      {
        path: '/:id/show',
        name: 'showUser',
        component: ShowUser
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
