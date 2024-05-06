<script>
import Navbar from "./components/Navbar.vue"

export default {
  components: {
    Navbar
  },
  computed: {
    verNavbar() {
      return this.$route.path !== "/landing";
    }
  }
}
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
    <Navbar v-if="verNavbar"/>
  <router-view/>
  </v-app>
</template>
