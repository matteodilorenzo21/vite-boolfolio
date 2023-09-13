import { createRouter, createWebHistory } from 'vue-router';

// pages import
import HomePage from '../components/pages/HomePage.vue';

// router create
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'homepage', component: HomePage },
    ]
});

export { router }