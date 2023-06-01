<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useMoviesStore } from "@/stores/movies";
import { storeToRefs } from "pinia";

const store = useMoviesStore()
const { moviesList } = storeToRefs(store)
const { getTopMoviesList } = store

onBeforeMount(() => {
  getTopMoviesList() // run get top movies
})
</script>

<template>
  <main>
    <v-row justify="space-around">
      <div v-for="(movie) in moviesList" :key="movie.id" style="margin-top: 1rem; max-width: 300;">
        <v-card :title="movie.title">
          <v-img :width="300" aspect-ratio="16/9" cover :src="movie.image" class="text-white" />
        </v-card>
        <!-- {{ `${i + 1}. ${movie.title}` }} -->
      </div>
    </v-row>
  </main>
</template>
