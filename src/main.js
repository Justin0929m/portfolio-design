import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MotionPlugin } from '@vueuse/motion'

createApp(App).use(store).use(router).use(MotionPlugin).mount('#app')
