<template>
    <v-row>
        <v-col cols="12" md="4">
            <v-card style="border: 1px solid #e0e0e0; border-radius: 15px; margin: 10px; padding: 10px;">
                <v-card-title>¿Que crees que te sucede?</v-card-title>
                <v-card-text>
                    <p>
                        Aqui deberias de poder introducir
                    </p>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="4">
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                aspect-ratio="1"
                contain
                ></v-img>

        </v-col>
        <v-col cols="12" md="4">
            <v-card style="border: 1px solid #e0e0e0; border-radius: 15px; margin: 10px; padding: 10px;">
                <v-card-title>Last Analisis</v-card-title>
                <v-card-text>
                    <p>
                        LIsta de Antiguos Analisis
                    </p>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" md="4"></v-col>
        <v-col cols="12" md="4">
            <button class="btn btn-primary" style="border-radius: 15px; border: 1px solid #e0e0e0; margin: 10px; padding: 10px; width: 100%;">Iniciar Analisis</button>
        </v-col>
        <v-col cols="12" md="4"></v-col>

            
    </v-row>

</template>

<script>
import { useDisplay } from "vuetify";
</script>