<template>
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
</template>

<style scoped>
.footer {
  padding: 20px 0;
  text-align: center;
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
</style>
