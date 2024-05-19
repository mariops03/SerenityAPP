<template>
    
      <v-main>
        <Use/>
      </v-main>
  </template>
  
  <script>
  import Use from "../components/Use.vue";
  
  export default {
    components: {
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
  