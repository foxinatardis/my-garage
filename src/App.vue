<template>
    <v-app>
        <v-app-bar
            app
            color="primary"
            dark
            >
            <div class="d-flex align-center">
                <v-icon>fa fa-motorcycle</v-icon>
                <router-link class="text-h4 pl-3 white--text text-decoration-none" to="/">My Garage</router-link>
            </div>
        </v-app-bar>

        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>

export default {
    name: 'App',

    data: () => ({
        //
    }),
};
</script>
