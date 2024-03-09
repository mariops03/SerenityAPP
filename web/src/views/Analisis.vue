<template>
    <div class="comment-loader">
      <!-- Pantalla semitransparente -->
      <div class="overlay"></div>
  
      <!-- Rueda de carga -->
      <div class="loading-spinner">
        <v-progress-circular
          v-if="loading"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>
  
      <!-- Comentarios -->
      <div class="comments">
        <div v-if="firstComment" class="comment first-comment" :style="{ color: commentColor }">
          {{ firstComment }}
        </div>
        <div v-for="(comment, index) in displayedComments" :key="index" class="comment" :style="{ color: commentColor }">
          {{ comment }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loading: true,
        firstComment: "¡Excelente trabajo!",
        comments: [
          "Me encanta este componente.",
          "¿Cómo puedo personalizarlo más?",
        ],
        displayedComments: [],
        commentColor: '#1976D2', // Color de los comentarios
      };
    },
    mounted() {
      setTimeout(() => {
        this.displayCommentsProgressively();
      }, 0);
    },
    methods: {
      displayCommentsProgressively() {
        let index = 0;
        const interval = setInterval(() => {
          if (index < this.comments.length) {
            this.displayedComments.push(this.comments[index]);
            index++;
          } else {
            clearInterval(interval);
            this.loading = false;
          }
        }, 10000);
      },
    },
  };
  </script>
  
  <style scoped>
  .comment-loader {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .overlay {
    min-height: 100vh;
      background-image: url('./fondo3.svg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
  }
  
  .loading-spinner {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .comments {
    position: fixed;
    top: 60%; /* Ajusta la posición vertical de los comentarios según sea necesario */
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: white; /* Color de los comentarios */
  }
  
  .comment {
    margin-bottom: 10px;
    opacity: 0;
    animation: fadeIn 1s ease forwards;
  }
  
  .first-comment {
    animation-delay: 0.5s; /* Retraso para el primer comentario */
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
  