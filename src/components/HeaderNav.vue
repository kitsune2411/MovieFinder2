<script lang="ts" setup>
const links = [
    { name: 'Home', page: 'home' },
    { name: 'Movie', page: 'movie' },
    { name: 'Genre', page: '' },
    { name: 'About', page: 'about' },
    { name: 'Help', page: '' },
]

</script>

<template>
    <v-app-bar flat>
        <v-container class="fill-height d-flex align-center">
            <!-- <v-avatar class="me-10 ms-4" color="grey-darken-1" size="32"></v-avatar> -->

            <template v-for="(link, i) in links" :key="i">
                <router-link :to="{ name: link.page }">
                    <v-btn variant="text">
                        {{ link.name }}
                    </v-btn>
                </router-link>
            </template>


            <v-spacer></v-spacer>

            <v-responsive max-width="260">
                <v-text-field density="compact" hide-details variant="solo"></v-text-field>
            </v-responsive>
        </v-container>
    </v-app-bar>
</template>