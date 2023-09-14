import { createRouter, createWebHistory } from 'vue-router';

// pages import
import HomePage from '../components/pages/HomePage.vue';
import NotFoundPage from '../components/pages/NotFoundPage.vue';

// router create
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'homepage', component: HomePage },
        { path: '/not-found', name: 'not-found', component: NotFoundPage },
        { path: '/:pathMatch(.*)*', redirect: 'not-found' },
    ]
});

export { router }