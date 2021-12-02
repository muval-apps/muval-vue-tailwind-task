import {createRouter, createWebHistory} from "vue-router";

import Table from "@/views/Table.vue"
import Home from "@/views/Home.vue"

const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
            };
        }
        if (savedPosition) {
            return savedPosition;
        } else {
            return {top: 0};
        }
    },
    history: createWebHistory(),
    routes: [
        {
            path: '/table',
            name: 'Table',
            component: Table,
        },
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ],
});

router.beforeEach((to, from, next) => {
    next()
});

export default router;
