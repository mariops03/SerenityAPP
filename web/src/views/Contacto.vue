<template>
    
    <div class="contact">
      <Navbar />
      <h1>Contacto</h1>
      <p>¡Nos encantaría escuchar de ti! Ponte en contacto con nosotros a través de los siguientes medios:</p>
      <div class="contact-info">
        <div class="contact-item">
          <span class="mdi mdi-email"></span>
          <p>Email: serenitydevteam@gmail.com</p>
        </div>
        <div class="contact-item">
          <span class="mdi mdi-phone"></span>
          <p>Teléfono: +1234567890</p>
        </div>
        <div class="contact-item">
          <span class="mdi mdi-map-marker"></span>
          <p>Dirección: Pl. Caídos, s/n, 37008 Salamanca, España</p>
        </div>
      </div>
      <div class="card">
        <h2>Envíanos un mensaje</h2>
        <form>
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input class="input" type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input class="input" type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="message">Mensaje:</label>
            <textarea class="input" id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: 'Contact'
  }
  </script>
  
  <style scoped>
  .contact {
    width: 70vw;
    margin: 0 auto;
    padding: 20px;
  }
  
  .contact h1, .contact h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .contact p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 15px;
  }
  
  .contact-info {
    margin-bottom: 30px;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .contact-item .mdi {
    margin-right: 10px;
  }
  
  .contact-form form {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    font-weight: bold;
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
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group textarea {
    resize: vertical;
    min-height: 100px;
  }
  
  button[type="submit"] {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #0056b3;
  }

  .input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.23);
  }
  </style>
  