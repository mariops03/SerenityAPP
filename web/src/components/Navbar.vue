<template>
  <v-row justify="center" align="center" class="mt-8">
    <v-col cols="12" md="8" lg="6" xl="2" class="d-flex align-center justify-center">
        <div class="navbar">
          <div class="navbar-brand">
            <img src="../../public/logo1.png" style="width: 45px; max-width: 15vw;" class="mt-2 mr-2" alt="SerenityAPP" />
          </div>
          <div class="navbar-menu">
            <a class="navbar-item" @click="navigateTo('inicio')">Inicio</a>
            <a class="navbar-item" @click="navigateTo('acerca')">Acerca</a>
            <a class="navbar-item" @click="navigateTo('contacto')">Contacto</a>
          </div>
        </div>
    </v-col>
  </v-row>
</template>

<script>
import { ref } from "vue";
import { useDisplay } from "vuetify";

export default {
  setup() {
    const mobile = ref(false);
    const { mobile: isMobile } = useDisplay();
    mobile.value = isMobile;

    const navigateTo = (page) => {
      console.log("Navigating to", page);
    };

    return { mobile, navigateTo };
  },
};
</script>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: center;
}

.navbar {
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
  align-items: center;
  padding: 10px 20px;
  height: 70px;
}

.navbar-brand {
  font-size: 1.5rem;
}

.navbar-menu {
  display: flex;
}

.navbar-item {
  padding: 10px;
  text-decoration: none;
  color: #212121;
  font-weight: bolder;
  font-size: medium;
}

.navbar-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}
</style>
