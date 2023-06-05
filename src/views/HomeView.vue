<script setup lang="ts">
import { useMoviesStore } from "@/stores/movies";
import { storeToRefs } from "pinia";

const store = useMoviesStore()
const { moviesList } = storeToRefs(store)
const { getTopMoviesList } = store

getTopMoviesList() // run get top movies

const colors = [
  'indigo',
  'warning',
  'pink darken-2',
  'red lighten-1',
  'deep-purple accent-4'
]
const slides = [
  'First',
  'Second',
  'Third',
  'Fourth',
  'Fifth'
]
</script>

<template>
  <v-carousel cycle height="425" hide-delimiter-background show-arrows="hover">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

  <main class="px-10">
    <v-row justify="space-around">
      <v-col v-for="(movie) in moviesList.slice(0, 30)" :key="movie.id" style="margin-top: 1rem;">
        <v-card :title="movie.title" width="100%" height="100%">
          <v-img :width="250" aspect-ratio="16/9" cover :src="movie.image" class="text-white" />
        </v-card>
      </v-col>
    </v-row>
  </main>
</template>
