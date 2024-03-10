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
      firstComment: "Analizando..",
      comments: [
        "Analizando los dolores de cabeza frontales... Recopilando datos de la zona delantera del cráneo.",
        "Analizando los dolores de cabeza laterales... Verificando la actividad de los músculos temporales.",
        "Analizando los dolores de cabeza occipitales... Investigando la tensión en la parte posterior del cráneo.",
        "Analizando los dolores de cabeza cervicales... Revisando la postura y la tensión en el cuello.",
        "Analizando los dolores de cabeza sin aura... Examinando posibles desencadenantes sin síntomas visuales.",
        "Analizando los dolores de cabeza con aura... Observando patrones visuales y posibles síntomas premonitorios.",
        "Analizando historial... Explorando datos previos para identificar tendencias y factores desencadenantes.",
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
          this.$router.push({ name: 'Home', params: { boton: "true" } });
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
