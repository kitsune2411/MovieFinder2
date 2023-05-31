<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue';
import FooterComp from './components/FooterComp.vue';
</script>

<template>
  <v-app>
    <HeaderNav/>
    <v-main>
      <RouterView />
    </v-main>
    <FooterComp  />
  </v-app>
</template>

<style scoped>


@media (min-width: 1024px) {

}
</style>
