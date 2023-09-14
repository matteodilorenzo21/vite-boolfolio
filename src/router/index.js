import { createRouter, createWebHistory } from 'vue-router';

// pages import
import HomePage from '../components/pages/HomePage.vue';
import NotFoundPage from '../components/pages/NotFoundPage.vue';
import ProjectDetailPage from '../components/pages/ProjectDetailPage.vue';

// router create
const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', name: 'homepage', component: HomePage },
        { path: '/projects/:id', name: 'project-detail', component: ProjectDetailPage },
        { path: '/not-found', name: 'not-found', component: NotFoundPage },
        { path: '/:pathMatch(.*)*', redirect: 'not-found' },
    ]
});

export { router }