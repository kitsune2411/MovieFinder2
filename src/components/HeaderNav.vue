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
    <v-app-bar flat color="#171c24">
        <v-container class="fill-height d-flex align-center">
            <!-- <v-avatar class="me-10 ms-4" color="grey-darken-1" size="32"></v-avatar> -->
            <div class="logo"><span style="color: #ff3d00;">Movie</span>Finder</div>

            <nav class="nav" v-for="(link, i) in links" :key="i">
                <router-link :to="{ name: link.page }">
                    <v-hover>
                        <template v-slot:default="{ isHovering }">
                            <v-btn :color="isHovering ? '#ff3d00' : '#fff'" class="nav-button" variant="text">
                                {{ link.name }}
                            </v-btn>
                        </template>
                    </v-hover>

                </router-link>
            </nav>


            <v-spacer></v-spacer>

            <!-- <v-responsive max-width="260">
                <v-text-field prepend-inner-icon="fa:fas fa-search">
                </v-text-field>
            </v-responsive> -->
        </v-container>
    </v-app-bar>
</template>

<style scoped>
.nav {
    display: flex;
    flex-wrap: wrap;
}

.logo {
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: -1px;
    margin-right: 2rem;
}

.nav-button:hover {
    color: #ff3d00 !important;
}
</style>