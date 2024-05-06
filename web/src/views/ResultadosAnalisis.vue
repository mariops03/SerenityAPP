<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2>Resultado del Análisis</h2>
        </v-col>
      </v-row>
  
      <!-- Primera fila de tarjetas -->
      <v-row>
        <!-- Tarjeta de Resumen del Paciente -->
        <v-col cols="12" md="6">
          <v-card class="custom-card">
            <v-card-title>Resumen del Paciente</v-card-title>
            <v-card-text>
              <p>{{ paciente.nombre }}, {{ paciente.edad }} años.</p>
              <p>{{ paciente.resumen }}</p>
            </v-card-text>
          </v-card>
        </v-col>
  
        <!-- Tarjeta de Dolor de Cabeza -->
        <v-col cols="12" md="6">
          <v-card class="custom-card">
            <v-card-title>Cabeza</v-card-title>
            <v-card-text>
              <p>{{ paciente.comentarioDolorCabeza }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- Segunda fila de tarjetas -->
      <v-row>
        <!-- Tarjeta de Niveles de Estrés -->
        <v-col cols="12" md="6">
          <v-card class="custom-card">
            <v-card-title>Niveles de Estrés</v-card-title>
            <v-card-text>
              <v-progress-circular
                rotate="-90"
                size="100"
                width="15"
                :value="paciente.estres"
                color="red"
              >{{ paciente.estres }}%</v-progress-circular>
              <p style="margin-top: 20px;">{{ paciente.comentarioEstres }}</p>
            </v-card-text>
          </v-card>
        </v-col>
  
        <!-- Tarjeta de Horas de Sueño -->
        <v-col cols="12" md="6">
          <v-card class="custom-card">
            <v-card-title>Horas de Sueño</v-card-title>
            <v-card-text>
              <v-progress-circular
                rotate="-90"
                size="100"
                width="15"
                :value="paciente.sueno"
                color="blue"
              >{{ paciente.sueno }}%</v-progress-circular>
              <p style="margin-top: 20px;">{{ paciente.comentarioSueno }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  
      <v-row class="justify-center">
        <v-col cols="12" class="text-center">
            <button
            class="btn-transparent primary-button"
            style="width: 50%;"
            @click="realizarAlivio"
            >
            REALIZAR ALIVIO
            </button>
        </v-col>
        </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        paciente: {
          nombre: 'Cargando...',
          edad: '',
          resumen: 'Cargando datos del paciente...',
          estres: 0,
          comentarioEstres: 'Cargando...',
          sueno: 0,
          comentarioSueno: 'Cargando...',
          comentarioDolorCabeza: 'Cargando información sobre el dolor de cabeza...'
        }
      };
    },
    mounted() {
      this.cargarDatosPaciente();
    },
    methods: {
      cargarDatosPaciente() {
        setTimeout(() => {
          this.paciente = {
            nombre: 'Jorge Camacho Gomez',
            edad: 23,
            resumen: 'Se detectaron signos de estrés elevado, falta de sueño y desnutricion.',
            estres: 95,
            comentarioEstres: 'Niveles de estrés elevados.',
            sueno: 10,
            comentarioSueno: 'El paciente duerme menos de las horas recomendadas.',
            comentarioDolorCabeza: 'Se han detectado fuertes irregularidades en diferentes zonas de la cabeza.'
          };
        }, 1000);
      },
      realizarAlivio() {
        console.log("Iniciando proceso de alivio...");
        this.$router.push( { name: 'Aliviar' } );
      }
    }
  };
  </script>
  <style scoped>
    .custom-card {
    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0)
    );
    backdrop-filter: blur(5px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    display: flex;
    flex-direction: column;
    padding: 30px; 
    }

    .v-card-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
</style>