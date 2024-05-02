<template>
  <v-container>
    <v-row justify="center" class="mt-16">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="card">
          <v-card-title class="text-h5">Iniciar Sesión</v-card-title>
          <v-card-text>
            <v-alert
              v-if="errorMessage"
              type="error"
              dense
              dismissible
              @input="errorMessage = ''"
            >
              {{ errorMessage }}
            </v-alert>
            <v-form @submit.prevent="login">
              <v-text-field
                label="Correo electrónico"
                v-model="email"
                prepend-icon="mdi-email"
                type="email"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-text-field
                label="Contraseña"
                v-model="password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                :rules="passwordRules"
                required
              ></v-text-field>
              <v-btn color="primary" type="submit" block>Iniciar Sesión</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="5">
        <div class="text-center text-subtitle-2">
          <router-link to="/signup" class="font-weight-bold text-black"
            >¿No tienes cuenta? ¡Haz click para crear una!</router-link
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      errorMessage: '',
      emailRules: [
        v => !!v || 'El correo electrónico es requerido',
        v => /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido',
      ],
      passwordRules: [
        v => !!v || 'La contraseña es requerida',
      ],
    };
  },
  methods: {
    login() {
      const user = {
        email: this.email,
        password: this.password
      };
      
      axios.post('http://localhost:3000/api/users/login', user, { withCredentials: true })
        .then(response => {
          console.log('Inicio de sesión exitoso:', response.data);
          this.$router.push({ name: 'Home' });
        })
        .catch(error => {
          console.error('Error al iniciar sesión:', error.response);
          this.errorMessage = error.response.data.message || 'Error al iniciar sesión';
        });
    }
  }
};
</script>

<style scoped>
.card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  align-items: center;
  padding: 10px 20px;
}
</style>