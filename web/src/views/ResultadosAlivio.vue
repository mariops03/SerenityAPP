<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" class="text-center mt-16">
        <h1>Resultados del Proceso de Alivio</h1>
      </v-col>
    </v-row>

    <!-- Tarjeta de Resultados del Alivio y Feedback del Usuario -->
    <v-row class="justify-center">
      <v-col cols="12" md="6">
        <v-card class="custom-card" style="height: 100%">
          <v-card-text>
            <p>Alivio conseguido: {{ resultado.alivioConseguido }}%</p>
            <p>{{ resultado.comentarioAlivio }}</p>
            <v-progress-circular
              size="100"
              width="15"
              :model-value="resultado.alivioConseguido"
              :color="getColor(resultado.alivioConseguido)"
              class="mt-4 mb-4"
              ><b style="color: black"
                >{{ resultado.alivioConseguido }}%</b
              ></v-progress-circular
            >
            <p class="mt-5">Por favor, indique como ha ido su tratamiento</p>
            <div class="feedback-buttons mt-4">
              <v-btn
                v-for="n in 5"
                :key="n"
                :color="getButtonColor(n)"
                class="ma-2"
                @click="enviarFeedback(n)"
              >
                {{ n }}
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- MODAL DE FEEDBACK ENVIADO -->
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Feedback Enviado</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <p>¡Gracias por tu feedback!</p>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      resultado: {
        alivioConseguido: Math.floor(Math.random() * (100 - 53 + 1)) + 53,
        comentarioAlivio: `El tratamiento ha sido efectivo en reducir los síntomas.`,
      },
      dialog: false,
    };
  },
  methods: {
    enviarFeedback(n) {
      console.log(`Feedback enviado: ${n}`);
      this.dialog = true;
      setTimeout(() => {
        this.$router.push({ name: 'Home' });
      }, 2500); // 2 segundos para mostrar el modal antes de redirigir
    },
    getColor(alivioConseguido) {
      if (alivioConseguido < 50) {
        return "#c60000";
      } else if (alivioConseguido < 75) {
        return "#d76b00";
      } else {
        return "#004000";
      }
    },
    getButtonColor(n) {
      switch (n) {
        case 1:
          return "#c60000";
        case 2:
          return "#d76b00";
        case 3:
          return "#ffeb3b";
        case 4:
          return "#8bc34a";
        case 5:
          return "#004000";
        default:
          return "#000000";
      }
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

.feedback-buttons {
  display: flex;
  justify-content: center;
}

.v-btn {
  border-radius: 20px;
  font-weight: 500;
  width: 35%;
}
</style>
