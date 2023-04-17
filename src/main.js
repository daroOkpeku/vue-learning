import { createApp } from 'vue'
// after installing pinia i have to import pinia in the main.js 
// for transfer of data just like context api or redux
import { createPinia } from 'pinia';
import App from './Home.vue'
import routers from './router/index.js';
import './assets/main.css'
import 'primeicons/primeicons.css';

const app = createApp(App);
// this enable me to use pinia in all my routes
app.use(routers)
app.use(createPinia())
app.mount('#app')
