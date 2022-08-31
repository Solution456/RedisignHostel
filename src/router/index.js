import {createRouter, createWebHistory} from 'vue-router'

import HomePage from '../Pages/Home/HomePage.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },

    {
        path: '/auth',
        name: 'auth',
        component: () => import('../Pages/Auth/AuthPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router