<script lang="ts" setup>
const icons = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram',
]
</script>

<template>
  <v-footer class="d-flex flex-column pa-0 mt-4">
    <div class="d-flex w-100 align-center px-4" style="background-color: #ff3d00; color: white;">
      <strong>Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>

      <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="plain" size="small"></v-btn>
    </div>

    <div class="px-4 py-2 text-center w-100" style="background-color: #171c24;">
      {{ '©️' + ' ' + new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>