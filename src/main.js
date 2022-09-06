import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import './style.css'
import './index.css'
import App from './App.vue'
import router from './router'
import { Icon } from '@iconify/vue'

const app = createApp(App)
const pinia = createPinia()

app
    .use(router)
    .use(pinia)
    .component('Icon',Icon)
    .mount('#app')


    app.config.globalProperties.$filters = {
        formatedDate(value) {
          
          return new Date(Date.parse(value)).toLocaleDateString()
        }
          
    }
