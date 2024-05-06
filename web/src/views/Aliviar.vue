<template>
    <div class="comment-loader">
      <!-- Pantalla semitransparente -->
      <div class="overlay"></div>
  
      <!-- Rueda de carga -->
      <div class="loading-spinner">
        <v-progress-circular
          v-if="loading"
          rotate="-90"
          size="100"
          width="15"
          color="#1976D2"
          indeterminate
        ></v-progress-circular>
      </div>
  
      <!-- Comentarios -->
      <div class="comments">
        <div
          v-if="firstComment"
          class="comment first-comment"
          :style="{ color: commentColor }"
        >
          {{ firstComment }}
        </div>
        <div
          v-for="(comment, index) in displayedComments"
          :key="index"
          class="comment"
          :style="{ color: commentColor }"
        >
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
        firstComment: "Iniciando proceso de alivio...",
        comments: [
        "Iniciando biofeedback para calibración de respuestas neurológicas...",
        "Aplicando estimulación auditiva con frecuencias delta para inducción de relajación profunda...",
        "Ajustando dosis de neuroestimulación transcraneal según umbrales de tolerancia del paciente...",
        "Registrando variaciones en la actividad electroencefalográfica para monitorización de efectos terapéuticos...",
        "Optimizando parámetros de terapia cognitivo-conductual basada en la evidencia de progresos anteriores...",
        "Concluyendo la fase de intervención con evaluación de biomarcadores de estrés...",
        "Compilando datos de la sesión en informe de resultados para revisión clínica y ajustes futuros..."
        ],
        displayedComments: [],
        commentColor: "#1976D2", // Color de los comentarios
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
            //Aqui deberia de ir a otra ventana provisional a HOME
            this.$router.push({ name: 'Home' });
          }
        }, 1000);
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
    background-image: url("./fondo3.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  
  .loading-spinner {
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
  }
  
  .comments {
    position: fixed;
    top: 60%; 
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: white;
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