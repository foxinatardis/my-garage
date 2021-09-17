<template lang="html">
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-img
                        :src="selectedBike.image_url"
                    ></v-img>
                    <v-card-title class="text-body-1 card_title">
                        {{ selectedBike.year }} {{ selectedBike.manufacturer }} {{ selectedBike.model }}
                    </v-card-title>
                    <v-card-subtitle class="text-body-1">
                        Displacement: {{ selectedBike.displacement }}
                        <br>
                        Power: {{ selectedBike.power }}
                    </v-card-subtitle>
                    <v-card-text>
                        {{ selectedBike.description }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            selectedBike: 'selectedBike'
        })
    },
    created(){
        const selectedBike = this.$store.getters.getBikeById(this.$route.params.id);
        this.$store.commit('SET_SELECTED_BIKE', selectedBike);
    }
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
