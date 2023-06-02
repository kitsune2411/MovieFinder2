<script setup lang="ts">
import { useMoviesStore } from "@/stores/movies";
import { storeToRefs } from "pinia";

const store = useMoviesStore()
const { moviesList } = storeToRefs(store)
const { getTopMoviesList } = store

getTopMoviesList() // run get top movies
</script>

<template>
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
