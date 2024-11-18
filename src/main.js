import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import "swiper/swiper-bundle.css";

const app = createApp(App)
app.mount('#app')
console.log('App initialized')
console.log('App mounted to #app')