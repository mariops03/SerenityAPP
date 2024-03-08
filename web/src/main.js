import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme: {
        primary: '#6DCFF6', // color 1
        secondary: '#A8D5BA', // color 2
        accent: '#FFFFFF', // color 3
        background: '#EAEAEA' // color 4 for background
      }
    }
  }
});

const pinia = createPinia();

pinia.use(piniaPluginPersistedState);

createApp(App).use(router).use(vuetify).use(pinia).mount('#app');
