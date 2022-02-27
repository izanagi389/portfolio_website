import '@mdi/font/css/materialdesignicons.css'
// import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg'
import { createVuetify } from "vuetify";


export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        icons: {
            defaultSet: 'mdi',
        },
    });
    app.vueApp.use(vuetify);
});