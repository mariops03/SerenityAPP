<template>  
    <v-container>
      <v-row style="height: 30vh;">
        <v-col cols="12" class="mt-15" style="align-items: center;" >
          <button class="btn btn-primary btn-transparent primary-button">REALIZAR ANÁLISIS</button>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="10" md="6">
          <button class="btn btn-primary btn-transparent">Historial de Análisis</button>
        </v-col>
  
        <v-col cols="12" md="6">
          <button class="btn btn-primary btn-transparent">Historial de Servicios</button>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { useDisplay } from "vuetify";
  </script>
  
  <style>
  .btn-transparent {
    border-radius: 15px;
    border: 1px solid rgba(224, 224, 224, 0.5);
    margin: 10px;
    padding: 10px;
    width: 100%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 20px;
  }
  
  .primary-button {
    padding: 20px;
    font-weight: bold;
    font-size: 30px;
  }
  
  .btn-transparent {
    background-color: rgba(255, 255, 255, 0.7); /* Puedes ajustar el valor alpha (el último valor) para cambiar la transparencia */
  }
  </style>
  