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
            <v-textarea
              v-model="feedbackUsuario"
              label="¿Cómo se siente después del tratamiento?"
              style="width: 80%"
              auto-grow
              class="mt-4"
            ></v-textarea>
            <v-btn color="#5ebdd9" class="mt-4" @click="enviarFeedback"
              >Enviar comentarios</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
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
  <!-- MODAL DE FEEDBACK ENVIADO -->
</template>

<script>
export default {
  data() {
    return {
      resultado: {
        alivioConseguido: 50,
        comentarioAlivio: `El tratamiento ha sido efectivo en reducir los síntomas.`,
      },
      feedbackUsuario: "",
      dialog: false,
    };
  },
  methods: {
    enviarFeedback() {
      this.dialog = true;
      // Aquí podrías agregar lógica para enviar el feedback a un servidor o manejarlo según la aplicación.
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

.v-btn {
  border-radius: 20px;
  font-weight: 600;
  width: 35%;
}
</style>
