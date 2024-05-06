#Etapa de construcción
FROM node:14.15.4 as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

#Etapa de producción
FROM node:14.15.4
WORKDIR /app
COPY --from=build /app .
EXPOSE 3000
CMD ["node", "index.js"]