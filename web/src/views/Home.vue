<template>
    
      <v-main>
        <Use/>
      </v-main>
      <Footer />
  </template>
  
  <script>
  import Footer from "../components/Footer.vue";
  import Use from "../components/Use.vue";
  
  export default {
    components: {
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
  