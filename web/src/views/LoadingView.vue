<template>
    <div class="comment-loader">
      <!-- Pantalla semitransparente -->
      <div class="overlay"></div>
  
      <!-- Rueda de carga -->
      <div class="loading-spinner">
        <v-progress-circular
          rotate="-90"
          size="100"
          width="15"
          color="black"
          indeterminate
        ></v-progress-circular>
      </div>
  
      <!-- Mensaje de carga -->
      <div class="comments">
        <div class="comment first-comment" :style="{ color: commentColor }">
          {{ message }}
        </div>
      </div>
    </div>
  </template>
<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";

const route = useRoute();
const router = useRouter();


// Accediendo al estado del historial
const state = route.fullPath ? history.state : {};
const message = state.message || 'Cargando...';

// Ejemplo de cómo podrías manejar la redirección después de un tiempo
onMounted(() => {
  setTimeout(() => {
    router.push({ name: state.redirectTo });
  }, 3000); // 3 segundos
});
</script>

  
  <style scoped>
  .comment-loader {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .loading-spinner {
    position: fixed;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -30%);
  }
  
  .comments {
    position: fixed;
    top: 35%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: black;
  }
  
  .comment {
    margin-bottom: 10px;
    opacity: 0;
    animation: fadeIn 1s ease forwards;
  }
  
  .first-comment {
    animation-delay: 0.5s;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  