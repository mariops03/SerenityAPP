<template>
  <v-container>
    <v-row justify="center" class="mt-16">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="card">
          <v-card-title class="text-h5">Registro</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="signUp">
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
              <v-btn color="primary" type="submit" block>Registrarse</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="5">
        <div class="text-center text-subtitle-2">
          <router-link to="/signin" class="font-weight-bold text-black">
            ¿Ya tienes cuenta? ¡Haz click para iniciar sesión!
          </router-link>
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
      emailRules: [
        v => !!v || 'El correo electrónico es requerido',
        v => /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido',
      ],
      passwordRules: [
        v => !!v || 'La contraseña es requerida',
        v => v.length >= 6 || 'La contraseña debe tener al menos 6 caracteres',
      ],
    };
  },
  methods: {
    signUp() {
      const user = {
        email: this.email,
        password: this.password
      };
      
      axios.post('http://143.47.52.226:3000/api/users', user, )
        .then(response => {
          console.log('Usuario registrado con éxito:', response.data);
          this.$router.push({ name: 'Home' });
        })
        .catch(error => {
          console.error('Error al registrar el usuario:', error.response);
        });
    }
  },
};
</script>

<style scoped>
.card {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  align-items: center;
  padding: 10px 20px;
}
</style>