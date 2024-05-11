User
<template>
  <v-container>
    <div class="my-10">
      <h1 class="titulo text-center">Bienvenido</h1>
      <p class="text-center">Tomas no tiene pene</p>
    </div>
    <v-row style="height: 40vh" align="center" justify="center">
      <!-- Historial de Análisis -->
      <v-col cols="11" md="6" lg="4" xl="2" class="order-1 order-lg-0">
        <button class="secondary-button btn-transparent" @click="redirectToHistorial">
          Historial de Análisis
        </button>
      </v-col>
      <!-- Botón Principal -->
      <v-col cols="11" md="12" lg="8" xl="4" class="order-0 order-lg-1">
        <div style="display: flex; justify-content: center">
          <button class="primary-button" @click="redirectToAnalisis">
            <img src="../../public/logo1.png" alt="SerenityAPP" style="width: 300px"/>
          </button>
        </div>
      </v-col>
      <!-- Historial de Servicios -->
      <v-col cols="11" md="6" lg="4" xl="2" class="order-2 order-lg-2">
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
    redirectToHistorial() {
      this.$router.push("/historial");
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
  padding: 10px;
  width: 100%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
}

.primary-button {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 150px;
  animation: scaleAnimation 6s infinite alternate;
}

@keyframes scaleAnimation {
  0%, 100% {  
    transform: scale(1);
  }
  50% {
    transform: scale(1.04);
  }
}

.secondary-button {
  background-color: rgba(255, 255, 255, 0.6);
  padding: 20px;
  backdrop-filter: blur(5px);
  font-weight: bold;
  color: #2a2a2a;
  font-size: large;
}

.btn-logo {
  width: fit-content;
  border-radius: 350px;
  margin-left: auto;
  margin-right: auto;
}

.titulo {
  font-family: "KatahdinRound", fantasy;
  font-size: 50px;
  font-weight: normal;
  color: #2a2a2a;
}
</style>
