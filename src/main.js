import { createApp } from 'vue'
import App from './Home.vue'
import routers from './router/index.js';
import './assets/main.css'
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(routers)
app.mount('#app')
