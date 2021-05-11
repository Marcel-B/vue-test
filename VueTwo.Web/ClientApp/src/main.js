import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from "vue-axios";
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/saga-orange/theme.css'
import 'primeflex/primeflex.css'
import TabMenu from 'primevue/tabmenu'
import PrimeVue from 'primevue/config'
import router from './router'
import 'chart.js/dist/chart.min'

const app = createApp(App).use(router)
app.use(VueAxios,
    axios)
    .use(PrimeVue)

app.component('TabMenu',
    TabMenu)

app.mount('#app')
