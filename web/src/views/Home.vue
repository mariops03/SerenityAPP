<template>
    
      <v-main>
        <Navbar />
        <Use :boton="boton" />
      </v-main>
      <Footer />
  </template>
  
  <script>
  import Navbar from "../components/Navbar.vue";
  import Footer from "../components/Footer.vue";
  import Use from "../components/Use.vue";
  
  export default {
    components: {
      Navbar,
      Footer,
      Use
    },
    data() {
      return {
        boton: true
      };
    },
    mounted() {
      console.log(this.boton); // Imprime true cuando el componente se monta
    }
  };
  </script>
  