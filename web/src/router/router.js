// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Signin from '../views/Signin.vue'
import Analisis from '../views/Analisis.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    name: 'Signin',
    path: '/signin', // Specify the path for the Signin route
    component: Signin
  },
  {
    name: 'Analisis',
    path: '/analisis', // Specify the path for the Analisis route
    component: Analisis
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
