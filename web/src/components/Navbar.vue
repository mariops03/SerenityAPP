<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>MiSitio</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item link :to="routes.home">
          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="routes.about">
          <v-list-item-title>Acerca</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="routes.contact">
          <v-list-item-title>Contacto</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);
const routes = {
  home: '/',
  about: '/acerca',
  contact: '/contacto'
};
</script>
