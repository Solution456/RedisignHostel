import { createApp } from 'vue'
// import './style.css'
import './index.css'
import App from './App.vue'
import router from './router'
import { Icon } from '@iconify/vue'

const app = createApp(App)
app
    .use(router)
    .component('Icon',Icon)
    .mount('#app')
