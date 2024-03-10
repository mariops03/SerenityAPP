User
<template>
  <v-container>
    <v-row style="height: 40vh" align="center" justify="center">
      <v-col cols="10" md="8" lg="5">
        <button
          v-if="boton"
          class="btn-transparent primary-button"
          @click="redirectToAnalisis"
        >
          REALIZAR ANÁLISIS
        </button>
        <button
          v-else
          class="btn-transparent secondary-button btn-logo"
          @click="redirectToServicios"
        >
          <img
            src="../../public/logo1.png"
            alt="Logo"
            style="width: 150px; max-width: 15vw"
            class="mt-1"
          />
        </button>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="11" md="6" lg="4" xl="2">
        <button class="secondary-button btn-transparent">
          Historial de Análisis
        </button>
      </v-col>
      <v-col cols="11" md="6" lg="4" xl="2">
        <button class="secondary-button btn-transparent">
          Historial de Servicios
        </button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    boton: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    redirectToAnalisis() {
      this.$router.push("/analisis");
    },
  },
};
</script>

<style>
@font-face {
  font-family: "KatahdinRound";
  src: local("KatahdinRound"),
    url("../assets/fonts/KatahdinRound.otf") format("opentype");
}

.btn-transparent {
  border-radius: 15px;
  border: 1px solid rgba(224, 224, 224, 0.6);
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
  font-family: "KatahdinRound", fantasy; /* Aquí agregamos la fuente instalada */
  padding: 20px;
  font-weight: normal;
  font-size: 45px;
  backdrop-filter: blur(5px);
  height: max-content;
  color: #313131;
  border-radius: 30px;
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

.btn-logo {
  width: fit-content;
  border-radius: 350px;
  margin-left: auto; /* Centra a la izquierda */
  margin-right: auto; /* Centra a la derecha */
}
</style>
