import 'font-awesome/css/font-awesome.min.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa4',
  },
  theme: {
    themes: {
      light: {
        primary: '#5f8ee4',
        secondary: '#19191a',
        accent: '#e4655f',
        error: '#e6e6e6',
      },
    },
  },
});
