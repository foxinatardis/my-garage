import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        bikes: [
            {
                id: '1',
                manufacturer: 'Ducati',
                model: 'Monster 821 Stealth',
                power: '109 hp (80 kW)',
                description: 'The Monster 821 pays homage to the legacy of the Monster 900, which over 25 years ago revolutionized the motorcycle world. Agile and featuring sporty performance, it was designed for maximum riding enjoyment, at all times and in all conditions.  The Monster 821 range has been rejuvenated with a new stealth version: matte black livery, updated graphics and front fairing give a unique character to the naked Ducati par excellence.',
                color: 'Stealth Black',
                displacement: '821 cc',
                year: '2020',
                image_url: 'https://foxinatardis-images.s3.amazonaws.com/image1-31.png',
            },
            {
                id: '2',
                manufacturer: 'BMW',
                model: 'F 750 GS',
                power: '77 hp (at 7,500 rpm)',
                description: 'The BMW F 750 GS is your ticket to adventure. With this balanced Enduro all-rounder, you can master all paths and expand your horizons. The F 750 GS gives you more power, more comfort, more spirit of GS. Feel the strong-charactered engine and enjoy the ease of handling of the F 750 GS. While you\'re off discovering the world, you have the bike safely under control with the Automatic Stability Control (ASC) and ABS. With the additional option Connectivity, the 6.5 inch TFT-display boasts many features including navigation and smartphone connectivity.',
                color: 'Austin Yellow Metallic',
                displacement: '853 cc',
                year: '2020',
                image_url: 'https://foxinatardis-images.s3.amazonaws.com/image2-33.png',
            },
            {
                id: '3',
                manufacturer: 'Indian',
                model: 'Scout Bobber',
                power: '100 hp',
                description: 'Stripped down and blacked out with an aggressive stance and raw power, the Scout Bobber is a modern take on the iconic bobber style.',
                color: 'Black',
                displacement: '1,133 cc',
                year: '2020',
                image_url: 'https://foxinatardis-images.s3.amazonaws.com/image3-35.jpeg',
            },
            {
                id: '4',
                manufacturer: 'Indian',
                model: 'Scout Bobber',
                power: '100 hp',
                description: 'Stripped down and blacked out with an aggressive stance and raw power, the Scout Bobber is a modern take on the iconic bobber style.',
                color: 'Black',
                displacement: '1,133 cc',
                year: '2020',
                image_url: 'https://foxinatardis-images.s3.amazonaws.com/image3-35.jpeg',
            },
            {
                id: '5',
                manufacturer: 'Ducati',
                model: 'Panigale V4',
                power: '157.5 kW (214 hp)',
                description: 'The 2020 version of the Panigale V4 boosts performance even further and takes track riding to the next level for amateurs and pros alike. ',
                color: 'Ducati Red',
                displacement: '1,103 cc',
                year: '2020',
                image_url: 'https://foxinatardis-images.s3.amazonaws.com/image4-37.png',
            }
        ],
        selectedBike: null,
    },
    mutations: {
        SET_SELECTED_BIKE(state, bike) {
            state.selectedBike = { ...bike };
        },
    },
    actions: {
    },
    getters: {
        bikes: state => {
            return state.bikes || [];
        },
        selectedBike: state => state.selectedBike,
        getBikeById: (state) => (id) => {
            return state.bikes.find(bike => bike.id === id);
        }
    },
    modules: {
    },
});
