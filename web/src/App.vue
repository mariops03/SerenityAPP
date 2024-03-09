<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Use from "./components/Use.vue";
</script>

<template>
  <v-app
    style="
      display: grid;
      min-height: 100vh; /* Hace que el grid cubra toda la altura del viewport */
      grid-template-rows: auto 1fr auto; /* Crea tres filas: auto, 1fr (crece para llenar el espacio restante) y auto */
      background-image: url('./fondo3.svg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    "
  >
    <v-main>
      <v-row
        style="margin-top: 20px; padding: 20px;"
        align="center" justify="center"
      >
        <Navbar />
      </v-row>
      <Use />
    </v-main>
    <Footer />
  </v-app>
</template>
