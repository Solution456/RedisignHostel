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
    },

    {
        path:'/floors',
        name:'floors',
        component: () => import('../Pages/FloorPage/index.vue'),
    },
    {
        path:'/floors/:id',
        name:'FloorPage',
        component: () => import('../Pages/FloorPage/Floor/index.vue'),
        props: true
    },
    {
        path:'/floor-elder',
        name:'FloorOfElder',
        component: () => import('../Pages/FloorElder/index.vue'),
    },
    {
        path:'/floor-elder/:id',
        name:'Flat',
        component: () => import('../Pages/FloorElder/Flat/index.vue'),
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router