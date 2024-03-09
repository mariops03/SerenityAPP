<template>
  <v-container>
    <v-row style="height: 40vh" align="center" justify="center">
      <v-col cols="10" md="8" lg="5">
        <button class="btn-transparent primary-button">
          REALIZAR ANÁLISIS
        </button>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="12" md="6" lg="4" xl="2">
        <button class="secondary-button btn-transparent">
          Historial de Análisis
        </button>
      </v-col>
      <v-col cols="12" md="6" lg="4" xl="2">
        <button class="secondary-button btn-transparent">
          Historial de Servicios
        </button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useDisplay } from "vuetify";
</script>

<style>

@font-face {
  font-family: 'KatahdinRound';
  src: local('KatahdinRound'), url('../assets/fonts/KatahdinRound.otf') format('opentype');
}

.btn-transparent {
  border-radius: 15px;
  border: 1px solid rgba(224, 224, 224, 0.6);
  margin: 10px;
  padding: 10px;
  width: 100%;
  
  font-size: 20px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
}

.primary-button {
  background-image: linear-gradient(
    to bottom left,
    rgba(101, 171, 170, 0.5),
    rgba(34, 88, 142, 0.5)
  );
  font-family: 'KatahdinRound', fantasy; /* Aquí agregamos la fuente instalada */
  padding: 20px;
  font-weight:normal;
  font-size: 45px;
  backdrop-filter: blur(5px);
  height: max-content;
  color: #313131;
}

.secondary-button {
  background-image: linear-gradient(
    to bottom left,
    rgba(175, 139, 204, 0.5),
    rgba(52, 110, 167, 0.5)
  );
  padding: 20px;
  backdrop-filter: blur(5px);
  font-weight: bold;
  color: #2a2a2a;
}

</style>
