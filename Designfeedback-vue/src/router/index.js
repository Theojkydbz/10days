import Vue from 'vue'
import Router from 'vue-router'

import PageHome from '@/pages/PageHome'
import PageNotFound from '@/pages/PageNotFound'


Vue.use(Router)


const router = new Router ({
    routes: [
        {
            path: '/',
            name:  'PageHome',
            component: PageHome
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