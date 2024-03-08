// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Signin from '../views/Signin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
  {
    name: 'Signin',
    path: '/signin', // Specify the path for the Signin route
    component: Signin
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
