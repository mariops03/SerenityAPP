<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2>Conectar con Bandas Cercanas</h2>
        </v-col>
      </v-row>
  
      <!-- Lista de tarjetas de dispositivos -->
      <v-row>
        <v-col
          v-for="(dispositivo, index) in dispositivos"
          :key="index"
          cols="12"
          xl="6"
        >
          <v-card class="historial-card">
            <v-card-title>{{ dispositivo.nombre }}</v-card-title>
            <v-card-text>{{ dispositivo.descripcion }}</v-card-text>
            <div class="d-flex justify-end flex-grow-1">
              <v-btn
                color="#4ABDFD"
                class="ma-2"
                @click="conectar(dispositivo)"
              >Conectar</v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dispositivos: [
          {
            nombre: "Banda PRO de Jorge",
            descripcion: "Dispositivo de alta precisión para monitoreo de salud.",
          },
          {
            nombre: "Banda 2 de Tomas",
            descripcion: "Banda de seguimiento de actividad física y sueño.",
          },
          {
            nombre: "Banda Lite de Ana",
            descripcion: "Banda ligera y cómoda para uso diario.",
          },
          {
            nombre: "Banda de Luis",
            descripcion: "Banda resistente al agua para actividades deportivas.",
          },
        ],
      };
    },
    methods: {
      conectar(dispositivo) {
        console.log(`Conectando con ${dispositivo.nombre}...`);
        this.$router.push({
          name: "LoadingView",
          state: {
            message: `Conectando con la ${dispositivo.nombre}...`,
            redirectTo: "Home",
          },
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .historial-card {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(5px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px;
    margin-bottom: 10px;
  }
  
  .v-btn {
    border-radius: 20px;
    font-weight: 400;
    margin: 30px;
  }
  </style>
  