<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" md="10" lg="8">
        <v-card class="profile-container" outlined>
          <v-row align="center">
            <v-col cols="12" sm="6">
              <v-img :src="user.photo" class="profile-photo"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card-title class="user-info">
                <h3>{{ user.name }} {{ user.surname }}</h3>
              </v-card-title>
              <v-card-subtitle>DNI: {{ user.dni }}</v-card-subtitle>
              <v-card-text>Edad: {{ user.age }} años</v-card-text>
              <v-btn color="secondary" class="ma-2" @click="changePassword">Cambiar Contraseña</v-btn>
              <v-btn color="secondary" class="ma-2" @click="changeSubscriptionPlan">Cambiar Plan de Suscripción</v-btn>
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-btn icon color="blue" @click="goBack">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Jorge',
        surname: 'Camacho Gomez',
        dni: '12345678A',
        age: 23,
        photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      }
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    changePassword() {
      // POR IMPLEMENTAR
      console.log("Cambiando contraseña...");
    },
    changeSubscriptionPlan() {
      // POR IMPLEMENTAR
      console.log("Cambiando plan de suscripción...");
    }
  }
}
</script>

<style scoped>
.profile-container {
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
  flex-direction: column;
  padding: 50px;
}

.profile-photo {
  border-radius: 50%; 
  width: 200px;
  margin-left: 130px;
}

.user-info h3, .user-info p {
  margin: 0;
  font-size: 24px;
  color: black;
  font: bold;
}
</style>