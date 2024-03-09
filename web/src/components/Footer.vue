<template>
  <div class="footer">
    <div class="footer-content">
      <strong>Síguenos en nuestras redes sociales:</strong>
      <div class="social-icons">
        <a href="#" class="social-icon"><span class="mdi mdi-facebook"></span></a>
        <a href="#" class="social-icon"><span class="mdi mdi-twitter"></span></a>
        <a href="#" class="social-icon"><span class="mdi mdi-instagram"></span></a>
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
  justify-content: flex-start; /* Alinea los íconos de redes sociales a la izquierda */
  margin-bottom: 5px; /* Ajusta el espacio superior */
}

.social-icon {
  font-size: 24px;
  color: #333;
  margin-right: 10px; /* Ajusta el espacio entre los íconos */
}

.social-icon:last-child {
  margin-right: 0; /* Elimina el margen derecho del último ícono */
}

.social-icon:hover {
  color: #007bff; /* Cambia el color al pasar el ratón sobre el icono */
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
