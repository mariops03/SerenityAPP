<template>
  <div class="landing-page-container">
    <!-- Hero Section -->
    <div class="hero-section">
      <v-container class="hero-content">
        <v-row>
          <v-col cols="6">
            <header class="header">
              <div class="hero-content-left">
                <h1>
                  Tu compañero personal<br />
                  de bienestar
                </h1>
                <p class="subheading">Alivio natural para tus dolores de cabeza</p>
                <router-link to="/signin" class="btn"
                  >Probar Serenity App</router-link
                >
              </div>
            </header>
          </v-col>
          <v-col cols="6">
            <div class="hero-content-right">
              <img src="../../public/movil.png" alt="Logo" class="hero-image" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Main Section -->
    <div class="main-section">
      <v-container class="main-content">
        <!-- About Us Section -->
        <v-card class="card-section about-us-card">
          <v-card-title>¿Qué es SerenityApp?</v-card-title>
          <v-card-text>
            <p>
              SerenityApp alivia dolores de cabeza con vibraciones y sonidos
              relajantes desde tu móvil. Fácil de usar y portátil, es ideal para
              cualquier entorno. También se está desarrollando una banda
              complementaria. SerenityApp promete alivio y tranquilidad sin
              complicaciones ni efectos secundarios.
            </p>
          </v-card-text>
        </v-card>

        <!-- Features Section -->
        <div class="section">
          <h2 class="section-title">Características Principales</h2>
          <ul style="list-style-type: none">
            <li>Vibraciones innovadoras para aliviar el dolor</li>
            <li>Sonidos relajantes y melodías suaves</li>
            <li>Fácil de usar y completamente portátil</li>
            <li>Desarrollada con expertos en bienestar</li>
            <li>Compatible con dispositivos móviles</li>
          </ul>
        </div>

        <!-- Statistics Section -->
        <div class="section">
          <h2 class="section-title">Estadísticas</h2>
          <div class="d-flex section">
            <div class="stat-item">
              <div class="stat-label">Usuarios registrados</div>
              <div class="stat-number">8.968</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Versión actual del programa</div>
              <div class="stat-number">1.2.1</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Fecha de lanzamiento</div>
              <div class="stat-number">05/05/24</div>
            </div>
          </div>
        </div>

        <!-- Testimonials Section -->
        <div class="section">
          <h2 class="section-title">Testimonios</h2>
          <p>
            "SerenityApp ha cambiado mi vida. Ahora puedo manejar mis dolores de
            cabeza de manera efectiva y discreta." - María G.
          </p>
          <p>
            "La mejor aplicación para el alivio del dolor de cabeza. Fácil de
            usar y muy efectiva." - Juan P.
          </p>
        </div>

        <!-- Contact Section -->
        <div class="section">
          <h2 class="section-title">Contáctanos</h2>
          <p>Puedes ponerte en contacto con nosotros a través de:</p>
          <a
            href="mailto:serenitydevteam@gmail.com?subject=Consulta%20Sobre%20Serenity%20App"
            style="font-size: 1.5rem"
            >serenitydevteam@gmail.com</a
          >
        </div>

        <div class="footer">
    <div class="footer-content">
      <strong>Síguenos en nuestras redes sociales:</strong>
      <div class="social-icons">
        <a href="https://www.facebook.com/profile.php?id=61557221400129" class="social-icon" target="_blank"><span class="mdi mdi-facebook"></span></a>
        <a href="https://twitter.com/AppSerenity" class="social-icon" target="_blank"><span class="mdi mdi-twitter"></span></a>
        <a href="https://www.instagram.com/serenity_app_/" class="social-icon" target="_blank"><span class="mdi mdi-instagram"></span></a>
      </div>
      <p>&copy; {{ new Date().getFullYear() }} Serenity APP. Todos los derechos reservados.</p>
    </div>
  </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style scoped>
@font-face {
  font-family: "KatahdinRound";
  src: local("KatahdinRound"),
    url("../assets/fonts/KatahdinRound.otf") format("opentype");
}

@font-face {
  font-family: "Questrial";
  src: local("Questrial"),
    url("../assets/fonts/Questrial-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Inter";
  src: url("Inter"),
    url("../assets/fonts/Inter-VariableFont_slnt,wght") format("truetype");
}

p {
  font-family: "Questrial", sans-serif;
  font-size: 1.5em;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.social-icons {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;
}

.social-icon {
  font-size: 24px;
  color: #333;
  margin-right: 10px;
}

.social-icon:last-child {
  margin-right: 0;
}

.social-icon:hover {
  color: #007bff;
}

/* Estilo para los íconos de Material Design Icons */
.mdi {
  display: inline-block;
  width: 24px;
  height: 24px;
  font-size: 24px;
  line-height: 24px;
}

/* Estilos básicos */
.landing-page-container {
  width: 100%;
  margin: 0 auto;
}

.hero-section {
  height: 60vh; /* 1/3 de la pantalla de alto */
  background-color: #18373e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white; /* Texto blanco para contrastar */
  position: relative;
}

.hero-content {
  text-align: center;
}

.stat-item {
  text-align: center;
  margin: 20px;
}

.stat-number {
  font-size: 2.5em;
  font-weight: bold;
}

.stat-label {
  font-size: 1.2em;
}

.header h1 {
      font-size: 4.2em;
      font-family: "Inter", sans-serif;
      background: linear-gradient(to right, #00BFFF, #00FF7F, #FFFFFF);
      -webkit-background-clip: text;
      color: transparent;
      margin-bottom: 10px;
      font-weight: 1000;
    }

.header .subheading {
  font-size: 1.45em;
  margin-bottom: 20px;
}

.logo {
  width: 150px; /* ajusta el tamaño según tu logo */
}

.section-title {
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 20px;
}

.hero-image {
  position: absolute;
  bottom: 35px; /* Ajusta este valor según sea necesario */
  right: 24%;
  width: 300px; /* Ajusta el tamaño según sea necesario */
  z-index: 9999; /* Coloca la imagen delante de todo */
}
.btn {
  display: inline-block;
  margin-top: 10px;
  padding: 15px 30px;
  font-size: 1.2em;
  text-decoration: none;
  color: #fff;
  background-color: #3ca4c9;

  border: none;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #004d66;
}

.main-section {
  background-color: white; /* Fondo blanco */
  padding: 40px 20px;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Questrial", sans-serif;
}

.card-section {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  padding: 20px;
  width: 100%;
}

.section {
  text-align: center;
  margin-bottom: 80px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}

.about-us-card {
  position: relative;
  top: -150px; /* Ajusta este valor según sea necesario */
}

.v-card-title {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 20px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5em;
  font-weight: bold;
}

.stat-label {
  font-size: 1.2em;
}

.contact a {
  font-size: 1.5em;
  color: #137968;
}

.footer {
  text-align: center;
  margin-top: 40px;
}
</style>
