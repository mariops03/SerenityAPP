<template>
    <div class="landing-page">
      <!-- Encabezado -->
      <header class="header">
        <img src="../../logo1.png" alt="Logo" class="logo">
        <h1>SerenityApp</h1>
        <router-link to="/signin" class="btn">Probar SerenityApp</router-link>
      </header>
  
      <!-- Contenido principal -->
      <main class="main-content">
        <section class="about-us">
            <h2>Acerca de nosotros</h2>
            <p>¡Bienvenido a SerenityApp! Entendemos la molestia de las jaquecas, así que creamos una solución sencilla. Nuestra aplicación ofrece alivio natural para los dolores de cabeza a través de vibraciones innovadoras, sonidos relajantes y melodías suaves, todo convenientemente en tu dispositivo de confianza.</p>
            <p>Imagina tener un remedio para los dolores de cabeza que cabe en tu bolsillo y que relaja los músculos, mejora la circulación sanguínea y crea una atmósfera tranquila en cualquier momento y lugar. Desarrollada con expertos, nuestra aplicación es fácil de usar y completamente portátil, ayudándote discretamente en bibliotecas, aulas o en casa.</p>
            <p>También estamos desarrollando una banda complementaria para mejorar tu experiencia, perfecta para actividades diarias en casa, ofreciendo tranquilidad.</p>
            <p>"SerenityApp" no es solo una aplicación; es tu compañero personal de bienestar, prometiendo alivio y tranquilidad sin complicaciones ni efectos secundarios.</p>
        </section>

        <section class="statistics">
            <h2>Estadísticas</h2>
            <ul>
                <li>Usuarios registrados: 8.968</li>
                <li>Versión actual del programa: 1.0.0</li>
                <li>Fecha de lanzamiento de la versión: 05/05/2024</li>
            </ul>
        </section>

        <section class="contact">
        <h2>Contacto</h2>
        <p>Puedes ponerte en contacto con nosotros a través de:</p>
        <ul>
          <p>serenitydevteam@gmail.com</p>
        </ul>
      </section>
      </main>
  
      <Footer />
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
  /* Estilos básicos */
  .landing-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .logo {
    width: 100px; /* ajusta el tamaño según tu logo */
  }
  
  .btn {
    display: block;
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1.2em;
    text-decoration: none;
    color: #fff;
    background-color: #007bff;
    border-radius: 5px;
  }
  
  .main-content {
    /* Estilos adicionales se agregarán en pasos posteriores */
  }
  
  .footer {
    text-align: center;
    margin-top: 40px;
  }
  </style>
  