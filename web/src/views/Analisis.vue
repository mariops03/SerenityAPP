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
      color='black'
      indeterminate
      ></v-progress-circular>
    </div>

    <!-- Comentarios -->
    <div class="comments">
      <div
        v-if="firstComment"
        class="comment first-comment"
        :style="{ color: 'black' }"
      >
        {{ firstComment }}
      </div>
      <div
        v-if="firstComment"
        class="comment first-comment"
        :style="{ color: 'black' }"
      >
        <br>
      </div>
      <div
        v-for="(comment, index) in displayedComments"
        :key="index"
        class="comment"
        :style="{ color: 'black' }"
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
      secondComment: "",
      comments: [
        "Explorando dolores de cabeza frontales... Recopilando datos de la zona delantera del cráneo.",
        "Evaluando dolores de cabeza laterales... Verificando la actividad de los músculos temporales.",
        "Investigando dolores de cabeza occipitales... Investigando la tensión en la parte posterior del cráneo.",
        "Revisando dolores de cabeza cervicales... Revisando la postura y la tensión en el cuello.",
        "Estudiando dolores de cabeza sin aura... Examinando posibles desencadenantes sin síntomas visuales.",
        "Observando dolores de cabeza con aura... Observando patrones visuales y posibles síntomas premonitorios.",
        "Analizando historial médico... Explorando datos previos para identificar tendencias y factores desencadenantes.",
      ],
      displayedComments: [],
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
          this.$router.push({ name: 'ResultadosAnalisis' });
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
