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
        cols="12"
        xl="6"
      >
        <v-card class="historial-card d-flex flex-column justify-space-between" style="height: 100%;">
          <v-card-text style="font-size: large; font-weight: 700; text-align: center; margin: 0 auto;">
            {{ item.analisis.fecha }} - {{ item.analisis.resumen }}
          </v-card-text>
          <v-btn v-if="item.alivio" @click="mostrarAlivio(item.alivio)" color="#4ABDFD" class="ma-2" style="align-self: center;">Ver Alivio</v-btn>
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
        { 
          analisis: { fecha: '2024-05-06', resumen: 'Análisis completado con éxito, sin incidencias.' },
          alivio: { fecha: '2024-05-07', resumen: 'Alivio aplicado con éxito, paciente en buen estado.' }
        },
        { 
          analisis: { fecha: '2024-04-22', resumen: 'Análisis completado con éxito, recomendaciones enviadas.' },
          alivio: null
        },
        // Más entradas de historial...
      ]
    };
  },
  methods: {
    mostrarAlivio(alivio) {
      // Aquí puedes implementar la lógica para mostrar los detalles del alivio.
      // Por ejemplo, podrías usar un modal o redirigir a otra página con los detalles.
      alert(`Fecha de alivio: ${alivio.fecha}\nResumen: ${alivio.resumen}`);
    }
  }
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
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
  height: 100%;
}

.v-btn {
  border-radius: 20px;
  font-weight: 400;
  width: 35%;
}
</style>
