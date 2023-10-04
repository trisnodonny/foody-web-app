// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import vue3GoogleLogin from 'vue3-google-login'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSplide)
app.use(vue3GoogleLogin, {
  clientId: "872384924435-e8dm0o3t9f9s9eh82i8d61u44fb3daq6.apps.googleusercontent.com"
})

app.mount('#app')
