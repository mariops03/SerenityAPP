#Etapa de construcción
FROM node:16 as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

#Etapa de producción
FROM node:16
WORKDIR /app
COPY --from=build /app .
EXPOSE 3000
CMD ["node", "index.js"]