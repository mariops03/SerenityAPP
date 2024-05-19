<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" class="text-center mt-6 mb-6">
        <button
          class="boton"
          style="width: 36rem; color: primary"
          @click="realizarAlivio"
        >
          ALIVIAR
        </button>
      </v-col>
    </v-row>

    <!-- Primera fila de tarjetas -->
    <v-row>
      <!-- Tarjeta de Resumen del Paciente -->
      <v-col cols="12" md="6">
        <v-card class="custom-card" style="height: 100%">
          <v-card-title>Resumen del Paciente</v-card-title>
          <v-card-text>
            <p>{{ paciente.nombre }}, {{ paciente.edad }} años.</p>
            <p>{{ paciente.resumen }}</p>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Tarjeta de Dolor de Cabeza -->
      <v-col cols="12" md="6">
        <v-card class="custom-card" style="height: 100%">
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
        <v-card class="custom-card" style="height: 100%">
          <v-card-title>Niveles de Estrés</v-card-title>
          <v-card-text>
            <v-progress-circular
              size="100"
              width="15"
              :model-value="paciente.estres"
              :color="getColorEstres(paciente.estres)"
            >{{ paciente.estres }}%</v-progress-circular>
            <p style="margin-top: 20px">{{ comentarioEstres }}</p>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Tarjeta de Horas de Sueño -->
      <v-col cols="12" md="6">
        <v-card class="custom-card" style="height: 100%">
          <v-card-title>Horas de Sueño</v-card-title>
          <v-card-text>
            <v-progress-circular
              size="100"
              width="15"
              :model-value="paciente.sueno"
              :color="getColor(paciente.sueno)"
            >{{ paciente.sueno }}%</v-progress-circular>
            <p style="margin-top: 20px">{{ comentarioSueno }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      paciente: {
        nombre: "Cargando...",
        edad: "",
        resumen: "Cargando datos del paciente...",
        estres: 0,
        comentarioEstres: "Cargando...",
        sueno: 0,
        comentarioSueno: "Cargando...",
        dolorCabeza: 0,
        comentarioDolorCabeza: "Cargando información sobre el dolor de cabeza...",
      },
      comentarioEstres: "Cargando...",
      comentarioSueno: "Cargando...",
    };
  },
  mounted() {
    this.cargarDatosPaciente();
  },
  methods: {
    cargarDatosPaciente() {
      // Generar valores aleatorios para estrés, sueño y dolor de cabeza
      const dolorCabeza = this.getRandomInt(50, 100);
      const estres = this.getRandomInt(50, 100);
      const sueno = this.getRandomInt(0, 65);

      this.paciente = {
        nombre: "Jorge Camacho Gomez",
        edad: 23,
        resumen:
          "Se detectaron signos de estrés elevado, falta de sueño y desnutricion.",
        estres: estres,
        sueno: sueno,
        dolorCabeza: dolorCabeza,
        comentarioDolorCabeza:
          "Se han detectado fuertes irregularidades en diferentes zonas de la cabeza.",
      };
      this.actualizarComentarios();
    },
    realizarAlivio() {
      console.log("Iniciando proceso de alivio...");
      this.$router.push({ name: "Aliviar" });
    },
    getColor(parametros) {
      if (parametros < 50) {
        return "#c60000";
      } else if (parametros < 75) {
        return "#d76b00";
      } else {
        return "#004000";
      }
    },
    getColorEstres(estres) {
      if (estres < 50) {
        return "#004000";
      } else if (estres < 75) {
        return "#d76b00";
      } else {
        return "#c60000";
      }
    },
    actualizarComentarios() {
      if (this.paciente.estres < 50) {
        this.comentarioEstres = "Niveles de estrés dentro de lo normal.";
      } else if (this.paciente.estres < 75) {
        this.comentarioEstres = "Niveles de estrés moderados.";
      } else {
        this.comentarioEstres = "Niveles de estrés muy elevados. Se recomienda tomar medidas inmediatas.";
      }

      if (this.paciente.sueno < 20) {
        this.comentarioSueno = "El paciente duerme muy poco. Se recomienda aumentar las horas de sueño.";
      } else if (this.paciente.sueno < 50) {
        this.comentarioSueno = "El paciente duerme menos de las horas recomendadas.";
      } else if (this.paciente.sueno < 75) {
        this.comentarioSueno = "El paciente duerme una cantidad adecuada de horas.";
      } else {
        this.comentarioSueno = "El paciente duerme más de las horas recomendadas.";
      }
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};

</script>
<style scoped>
.custom-card {
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  display: flex;
  flex-direction: column;
  padding: 30px;
}

.boton {
  font-family: "KatahdinRound", fantasy;
  padding: 20px;
  font-weight: normal;
  font-size: 40px;
  backdrop-filter: blur(5px);
  height: max-content;
  color: #313131;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

.v-card-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.v-card-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}
</style>
