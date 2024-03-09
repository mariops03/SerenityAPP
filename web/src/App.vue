<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Use from "./components/Use.vue";
</script>

<template>
  <v-app
    style="
      min-height: 100vh;
      background-image: url('./fondo3.svg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    "
  >
    <v-main>
        <Navbar />
      <Use/>
    </v-main>
    <Footer />
  </v-app>
</template>
