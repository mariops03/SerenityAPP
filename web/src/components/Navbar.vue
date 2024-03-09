<template>
    <v-row>
      <v-col>
        <v-app-bar class="glass" style="padding: 10px; border-radius: 15px;">
          <v-toolbar-title>SerenytyAPP</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn text style="border-radius: 15px;">Inicio</v-btn>
          <v-btn text style="border-radius: 15px;">Acerca</v-btn>
          <v-btn text style="border-radius: 15px;">Contacto</v-btn>
        </v-app-bar>
      </v-col>
    </v-row>
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

<style>
.glass{
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border:1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}
</style>