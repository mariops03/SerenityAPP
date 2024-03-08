<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
   <v-app>
     <v-main>
      <v-row justify="center" align="center" style="margin-top: 20px; padding: 20px;">
         <Navbar />
      </v-row>
       
       <Footer />
     </v-main>
   </v-app>
 </template>

