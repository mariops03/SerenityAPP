<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2>Historial de Análisis</h2>
        </v-col>
      </v-row>
  
      <!-- Lista de tarjetas de historial -->
      <v-row>
        <v-col
          v-for="(item, index) in historial"
          :key="index"
          cols="6"
        >
          <v-card class="historial-card">
            <v-card-title>{{ item.fecha }}</v-card-title>
            <v-card-text>{{ item.resumen }}</v-card-text>
              <v-icon size="36">mdi-robot-happy</v-icon>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        historial: [
          { fecha: '2024-05-06', resumen: 'Análisis completado con éxito, sin incidencias.' },
          { fecha: '2024-04-22', resumen: 'Análisis completado con éxito, recomendaciones enviadas.' },
          { fecha: '2024-04-15', resumen: 'Análisis completado con éxito, todos los parámetros normales.' },
          { fecha: '2024-04-08', resumen: 'Análisis completado con éxito, Sigues con SARS-COV-2 deberias acudir a un medico.' },
          { fecha: '2024-04-08', resumen: 'Análisis completado con éxito, SARS-CoV-2 detectado.' },
          { fecha: '2024-04-01', resumen: 'Análisis completado con éxito, falta de vitamina D detectada.' },
          { fecha: '2024-03-15', resumen: 'Análisis completado con éxito, falta grave de sueño detectada.' },
          // Más entradas de historial...
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .historial-card {
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
    flex-direction: row;
    align-items: center;
    padding: 20px;
    margin-bottom: 10px;
  }
  </style>