# Utilizar una imagen base de Node.js
FROM node:14

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración de Node.js
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente del frontend
COPY . .

# Exponer el puerto que utiliza Vue.js, comúnmente 8080
EXPOSE 8080

# Comando para iniciar el servidor de desarrollo
CMD ["npm", "run", "dev"]