<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>MiSitio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text :to="routes.home">Inicio</v-btn>
      <v-btn text :to="routes.about">Acerca</v-btn>
      <v-btn text :to="routes.contact">Contacto</v-btn>
    </v-app-bar>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const routes = {
  home: '/',
  about: '/acerca',
  contact: '/contacto'
};
</script>
