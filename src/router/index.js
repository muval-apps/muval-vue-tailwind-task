import {createRouter, createWebHistory} from "vue-router";

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
        
    ],
});

router.beforeEach((to, from, next) => {

});

export default router;
