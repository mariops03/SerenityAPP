<template>
  <v-container>
    <v-row justify="center" align="center" class="mt-4">
      <v-col cols="11" md="12" lg="8" xl="4" class="justify-center">
        <div class="navbar">
          <div class="d-flex" style="margin-right: 20%">
            <a class="navbar-item" @click="navigateTo('inicio')">
              <v-icon>mdi-home</v-icon>
            </a>
            <a class="navbar-item" @click="navigateTo('acerca')">
              <v-icon>mdi-information-outline</v-icon>
            </a>
          </div>
          <div class="navbar-brand">
            Serenity
          </div>
          <div class="d-flex" style="margin-left: 20%">
            <a class="navbar-item" @click="navigateTo('contacto')">
              <v-icon>mdi-email</v-icon>
            </a>
            <a class="navbar-item" @click="navigateTo('profile')">
              <v-icon>mdi-account</v-icon>
            </a>
          </div>
          
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const navigateTo = (page) => {
      console.log("Navigating to", page);
      switch (page) {
        case "inicio":
          router.push({ name: "Home" });
          break;
        case "acerca":
          router.push({ name: "Acerca" });
          break;
        case "contacto":
          router.push({ name: "Contacto" });
          break;
        case "profile":
          router.push({ name: "Profile" });
          break;
        default:
          break;
      }
    };

    return { navigateTo };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');

.navbar-container {
  display: flex;
  justify-content: center;
}

.navbar {
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  display: flex;
  align-items: center; 
  justify-content: center; 
  padding: 10px 20px;
  height: 70px;
}

.navbar-brand {
  font-size: 1.8rem;
  font-family: 'Questrial', sans-serif;
  font-weight: 500;
  
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