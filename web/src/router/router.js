import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/useAuthStore';
import axios from 'axios';
import Signin from '../views/Signin.vue';
import Analisis from '../views/Analisis.vue';
import Home from '../views/Home.vue';
import Acerca from '../views/Acerca.vue';
import Contacto from '../views/Contacto.vue';
import Signup from '../views/Signup.vue';
import LandingPage from '../views/LandingPage.vue';
import Profile from '../views/Profile.vue';
import ResultadosAnalisis from '../views/ResultadosAnalisis.vue';
import Aliviar from '../views/Aliviar.vue';
import Historial from '../views/Historial.vue';
import ResultadosAlivio from '../views/ResultadosAlivio.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    name: 'Signin',
    path: '/signin',
    component: Signin,
    meta: { guestOnly: true }
  },
  {
    name: 'Analisis',
    path: '/analisis',
    component: Analisis,
    meta: { requiresAuth: true }
  },
  {
    name: 'Acerca',
    path: '/acerca',
    component: Acerca,
    meta: { requiresAuth: true }
  },
  {
    name: 'Contacto',
    path: '/contacto',
    component: Contacto,
    meta: { requiresAuth: true }
  },
  {
    name: 'Signup',
    path: '/signup',
    component: Signup,
    meta: { guestOnly: true }
  },
  {
    name: 'LandingPage',
    path: '/landing',
    component: LandingPage
  },
  {
    name: 'Profile',
    path: '/profile',
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    name: 'ResultadosAnalisis',
    path: '/resultados-analisis',
    component: ResultadosAnalisis,
    meta: { requiresAuth: true }
  },
  {
    name: 'Aliviar',
    path: '/aliviar',
    component: Aliviar,
    meta: { requiresAuth: true }
  },
  {
    name: 'Historial',
    path: '/historial',
    component: Historial,
    meta: { requiresAuth: true }
  },
  {
    name: 'ResultadosAlivio',
    path: '/resultados-alivio',
    component: ResultadosAlivio,
    meta: { requiresAuth: true }
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

/* router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if(to.name === 'LandingPage') return next();

  try {
    const response = await axios.get('http://143.47.52.226:3000/api/verify-auth', { withCredentials: true });
    authStore.authenticate(true);
    console.log("Autenticación verificada:", response.data);

    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
      next({ name: 'LandingPage' });
    } else if (to.meta.guestOnly && authStore.isAuthenticated) {
      next({ name: 'Home' });
    } else {
      next();
    }
  } catch (error) {
    console.error("Error de autenticación:", error);
    authStore.authenticate(false);

    if (to.meta.requiresAuth) {
      next({ name: 'LandingPage' });
    } else {
      next();
    }
  }
}); */

export default router;
