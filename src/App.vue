<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue';
import FooterComp from './components/FooterComp.vue';
</script>

<template>
  <v-app>
    <HeaderNav />
    <v-main>
      <keep-alive>
        <RouterView />
      </keep-alive>
    </v-main>
    <FooterComp />
  </v-app>
</template>

<style scoped>
@media (min-width: 1024px) {}
</style>
