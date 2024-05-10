<template>
    <div class="landing-page-background">
      <v-container class="landing-page">
      <!-- Encabezado -->
      <header class="header">
        <img src="../../public/logo1.png" alt="Logo" class="logo">
        <h1>Serenity App</h1>
        <router-link to="/signin" class="btn">Probar Serenity App</router-link>
      </header>
  
      <!-- Contenido principal -->
      <main class="main-content">
          <v-card class="about-us pa-5 card">
            <v-card-title>¿Qué es SerenityApp?</v-card-title>
            <v-card-text>
              <p>¡Bienvenido a SerenityApp! Entendemos la molestia de las jaquecas, así que creamos una solución sencilla. Nuestra aplicación ofrece alivio natural para los dolores de cabeza a través de vibraciones innovadoras, sonidos relajantes y melodías suaves, todo convenientemente en tu dispositivo de confianza.</p>             
              <br>
              <p>Imagina tener un remedio para los dolores de cabeza que cabe en tu bolsillo y que relaja los músculos, mejora la circulación sanguínea y crea una atmósfera tranquila en cualquier momento y lugar.</p> 
              <br>
              <p>Desarrollada con expertos, nuestra aplicación es fácil de usar y completamente portátil, ayudándote discretamente en bibliotecas, aulas o en casa.</p>  
              <br>
              <p>También estamos desarrollando una banda para la cabeza complementaria para mejorar tu experiencia, perfecta para actividades diarias en casa, ofreciendo tranquilidad.</p>
              <br>
              <p>"SerenityApp" no es solo una aplicación, es tu compañero personal de bienestar, prometiendo alivio y tranquilidad sin complicaciones ni efectos secundarios.</p>
            </v-card-text>
          </v-card>

          <v-card class="statistics card pa-5">
            <v-row>
              <v-col cols="4" class="stat-item">
                <div class="stat-label">Usuarios registrados</div>
                <div class="stat-number">8.968</div>
              </v-col>
              <v-col cols="4" class="stat-item">
                <div class="stat-label">Versión actual del programa</div>
                <div class="stat-number">1.2.1</div>
              </v-col>
              <v-col cols="4" class="stat-item">
                <div class="stat-label">Fecha de lanzamiento</div>
                <div class="stat-number">05/05/24</div>
              </v-col>
            </v-row>
          </v-card>

        <section class="contact">
        <h2>Contáctanos</h2>
        <p>Puedes ponerte en contacto con nosotros a través de:</p>
        <ul>
          <a href="mailto:serenitydevteam@gmail.com?subject=Consulta%20Sobre%20Serenity%20App">serenitydevteam@gmail.com</a>
        </ul>
      </section>
      </main>
  
      <Footer />
    </v-container>
  </div>
    
  </template>
  
  <script>
  import Footer from "../components/Footer.vue";
  
  export default {
    name: "LandingPage",
    components: {
      Footer,
    },
  };
  </script>
  
  <style scoped>
  @font-face {
    font-family: "KatahdinRound";
    src: local("KatahdinRound"),
    url("../assets/fonts/KatahdinRound.otf") format("opentype");
  }

  @font-face {
    font-family: 'Questrial';
    src: local('Questrial'), url("../assets/fonts/Questrial-Regular.ttf") format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  p {
    font-family: 'Questrial', sans-serif;
    font-size: 1.5em;
  }

  /* Estilos básicos */
  .landing-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .landing-page-background {
    margin: 0 auto;
    padding: 20px;
    background: lightblue;
    width: 100%;
  }
  
  .header {
    text-align: center;
    margin-bottom: 80px;
  }

   .header h1 {
        font-size: 6em;
        font-family: "KatahdinRound", fantasy;
        color: #18373e;
        margin-bottom: 35px;
    }
  
  .logo {
    width: 350px; /* ajusta el tamaño según tu logo */
  }
  
  .btn {
    display: incline-block;
    margin-top: 20px;
    padding: 25px 50px;
    font-size: 2em;
    text-decoration: none;
    color: #fff;
    background-color: #006285;
    border: none;
    border-radius: 50px;
    transition: background-color 0.3s ease; /* Añadimos una transición al cambio de color */
  }

  .btn:hover {
    background-color: #18373e; /* Cambiamos el color al hacer hover */
  }

  .main-content {
    margin-bottom: 40px;
    font-family: 'Questrial', sans-serif;
  }
  
  .v-card-title {
  font-size: 2em; /* Ajusta el tamaño según tus preferencias */
  font-weight: bold;
}
  .about-us {
    text-align: center;
    border-radius: 10px;
    margin-bottom: 40px;
  }
  
  .stat-item {
    text-align: center;
    
  }

  .stat-number {
    font-size: 4em;
    font-weight: bold;
  }

  .stat-label {
    font-size: 1.5em;
  }

  .contact {
    text-align: center;
    margin-top: 40px;
  }

  .contact a {
  font-size: 1.5em; /* Ajusta el tamaño según tus preferencias */
  color: #137968; /* Opcional: cambia el color del enlace */
  }

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


  .footer {
    text-align: center;
    margin-top: 40px;
  }
  </style>
  