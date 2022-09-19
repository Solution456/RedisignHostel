import path from 'path-browserify'
import {createRouter, createWebHistory} from 'vue-router'

import HomePage from '../Pages/Home/HomePage.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path:'/event/:id',
        name:'event',
        component: () => import('../Pages/Event/index.vue'),
        props:true
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
    {
        path:'/profile',
        name:'profile',
        component: () => import('../Pages/Profile/index.vue'),
        children: [
            {   
                path: 'tableResident/:id',
                name:'tableResident',
                props:true,
                component: () => import('../Pages/Profile/child/TheTableResident.vue'),
                
            },
            {
                path:'',
                name:'profileMain',
                component: () => import('../Pages/Profile/child/TheProfileMain.vue')
            }
            
        ]
    },
    // {
    //     path:'/tableResident/:id',
    //     name:'tableResident',
    //     component: () => import('../Pages/Profile/index.vue'),
    //     props: true
    // },


]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router