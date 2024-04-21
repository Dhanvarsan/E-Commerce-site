import { createApp } from 'vue'
import App from './App.vue'
import router from './route/route'
import pinia from './stores/store';
import "../assets/custom-style.css";

const app =  createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
