<template>
  <v-app
    style="
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background-image: url('./fondo3.svg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    "
  >
    <Navbar v-if="verNavbar" />
    <v-main style="flex: 1;">
      <router-view />
    </v-main>
    <Footer v-if="verFooter" />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  computed: {
    verNavbar() {
      return (
        this.$route.path !== "/landing" &&
        this.$route.path !== "/signin" &&
        this.$route.path !== "/signup" &&
        this.$route.path !== "/analisis" &&
        this.$route.path !== "/aliviar" &&
        this.$route.path !== "/loading"
      );
    },
    verFooter() {
      return (
        this.$route.path !== "/landing" &&
        this.$route.path !== "/signin" &&
        this.$route.path !== "/signup" &&
        this.$route.path !== "/analisis" &&
        this.$route.path !== "/aliviar" &&
        this.$route.path !== "/loading"
      );
    },
  },
};
</script>
