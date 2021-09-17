<template>
    <div class="mt-3">
        <h1 class="text-center text-h4 mt-6 mb-4">{{ pageTitle }}</h1>

        <BikeList />
    </div>
</template>

<script>
import BikeList from '../components/BikeList.vue';
export default {
    name: 'Home',
    components: {
        BikeList
    },
    data() {
        return {
            pageTitle: 'Welcome to My Garage'
        };
    }
};
</script>
