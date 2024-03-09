<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Use from './components/Use.vue'
</script>

<template>
   <v-app>
     <v-main>
      <v-row justify="center" align="center" style="margin-top: 20px; padding: 20px; width: 50%; margin-left: 25%;">
         <Navbar />
      </v-row>
       <Use />
       <Footer />
     </v-main>
   </v-app>
 </template>

