<script>
import axios from 'axios';
const apiBaseUri = 'http://localhost:8000/api/projects/';
import ProjectCard from '../ProjectCard.vue';
import AppLoader from '../AppLoader.vue';

export default {
    name: 'ProjectDetailPage',
    components: { ProjectCard },
    data() {
        return {
            project: null,
            isLoading: false,
        };
    },
    methods: {
        getProject() {
            this.isLoading = true;
            const endpoint = apiBaseUri + this.$route.params.id;
            axios.get(endpoint).then(res => {
                this.project = res.data;
            })
                .catch(err => { console.log(err); })
                .then(() => { this.isLoading = false; });
        }
    },
    created() {
        this.getProject();
    },
};
</script>

<template>
    <h2>Project detail | {{ $route.params.id }}</h2>
    <ProjectCard v-if="!isLoading && project" :project="project" />
    <AppLoader v-if="isLoading && !project" />
</template>
  
<style scoped></style>
  