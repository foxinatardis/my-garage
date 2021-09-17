<template lang="html">
    <v-container>
        <v-row class="mt-1">
            <v-col cols="12" sm="1" class="pb-0 pb-sm-3">
                <v-btn color="primary" text ripple to="/" class="text-body-2">
                    <v-icon class="mr-2" small>
                        fa fa-hand-o-left
                    </v-icon>
                    Back
                </v-btn>
            </v-col>
            <v-col class="pt-0 pt-sm-3">
                <h1 class="text-h4 text-center">{{ selectedBike.year }} {{ selectedBike.manufacturer }} {{ selectedBike.model }}</h1>
            </v-col>
            <v-col cols="1" class="d-none d-sm-block">
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">

                <v-card>
                    <v-img
                        :src="selectedBike.image_url"
                    ></v-img>
                    <v-card-subtitle class="text-body-1">
                        Displacement: {{ selectedBike.displacement }}
                        <br>
                        Power: {{ selectedBike.power }}
                    </v-card-subtitle>
                    <v-card-text class="text-body-2">
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
