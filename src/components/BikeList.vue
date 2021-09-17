<template lang="html">
    <v-container>
        <v-row>
            <v-col cols="12" md="6" lg="3" v-for="bike in bikes" :key="bike.id">
                <v-hover v-slot="{ hover }">
                    <v-card :elevation="hover ? 6 : 2">
                        <v-img
                            height="250"
                            :src="bike.image_url"
                        ></v-img>
                        <v-card-title class="text-body-1 card_title">
                            {{ bike.year }} {{ bike.manufacturer }} {{ bike.model }}
                        </v-card-title>
                        <v-card-actions>
                            <v-btn
                                color="accent"
                                text
                                :to="`details/${bike.id}`"
                            >
                                Details
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            bikes: 'bikes'
        })
    },
}
</script>
<style lang="scss" scoped>
.card_title {
    word-break: normal;
}
.v-card {
    transition: all 0.3s;
}
</style>
