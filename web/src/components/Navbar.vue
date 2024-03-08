<template>
  <v-app>
    <v-row>
      <v-col>
        <v-app-bar app color="transparent" class="elevation-4 center-align" style="padding: 10px; border-radius: 15px; width: 50%; margin: 0 auto;">
          <v-toolbar-title>MiSitio</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn text style="border-radius: 15px;">Inicio</v-btn>
          <v-btn text style="border-radius: 15px;">Acerca</v-btn>
          <v-btn text style="border-radius: 15px;">Contacto</v-btn>
        </v-app-bar>
      </v-col>
      
    </v-row>
    
  </v-app>
</template>
<script>

import { useDisplay } from "vuetify";

export default {
  name: "NavBar",
  emits: ["toggleDrawer"],
  setup() {
    const { mobile } = useDisplay();
    return { mobile };
  },
};
</script>