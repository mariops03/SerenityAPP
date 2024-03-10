// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Signin from '../views/Signin.vue'
import Analisis from '../views/Analisis.vue'
import Home from '../views/Home.vue'
import Acerca from '../views/Acerca.vue'
import Contacto from '../views/Contacto.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
  },
  {
    name: 'Signin',
    path: '/signin',
    component: Signin
  },
  {
    name: 'Analisis',
    path: '/analisis',
    component: Analisis
  },
  {
    name: 'Acerca',
    path: '/acerca',
    component: Acerca
  },
  {
    name: 'Contacto',
    path: '/contacto',
    component: Contacto
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
