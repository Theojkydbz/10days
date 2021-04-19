import Vue from 'vue'
import Router from 'vue-router'

import PageHome from '@/pages/PageHome'
import PageNotFound from '@/pages/PageNotFound'

import PageLogin from '@/pages/PageLogin'

import PageHomeLog from '@/pages/PageHomeLog'

Vue.use(Router)


const router = new Router ({
    routes: [
        {
            path: '/',
            name:  'PageHome',
            component: PageHome
        },
        {
            path: '/login',
            name:  'PageLogin',
            component: PageLogin,
        },
        {
            path: '/home',
            name:  'PageHomeLog',
            component: PageHomeLog,
        },
        {
            path: '*',
            name: 'PageNotFound',
            component: PageNotFound
        }
    ],
    mode: 'history'
})



export default router