<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Use from "./components/Use.vue";
</script>

<template>
  <v-app
    style="
      background-image: url('./fondo2.svg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    "
  >
    <v-main style="align-items: center; justify-content: center">
      <v-row
        justify="center"
        align="center"
        style="margin-top: 20px; padding: 20px; width: 50%; margin-left: 25%"
      >
        <Navbar />
      </v-row>
      <Use />
      <Footer />
    </v-main>
  </v-app>
</template>
