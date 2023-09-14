<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';
import ProjectCard from '../ProjectCard.vue';
import AppLoader from '../AppLoader.vue';
export default {
    name: 'HomePage',
    components: { ProjectCard, AppLoader },

    data: () => ({
        projects: [],
        isLoading: false
    }),

    methods: {
        fetchProjects() {
            this.isLoading = true;
            axios.get(endpoint).then(res => { this.projects = res.data })
                .catch(err => { console.error(err) })
                .then(() => { this.isLoading = false })
        }
    },

    created() {
        this.fetchProjects();
    }
};
</script>

<template>
    <main class="container my-3">
        <AppLoader v-if="isLoading" />
        <div v-else>
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
    </main>
</template>

<style></style>