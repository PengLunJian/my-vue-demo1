import Vue from 'vue'
import Router from 'vue-router'
import Login from '../containers/Login/Login.vue'
import Main from '../containers/Main/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    }
  ]
})
