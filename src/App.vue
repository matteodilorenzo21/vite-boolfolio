<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';
import AppHeader from './components/AppHeader.vue';
import ProjectCard from './components/ProjectCard.vue';
import AppLoader from './components/AppLoader.vue';
export default {
  components: { AppHeader, ProjectCard, AppLoader },

  data: () => ({ projects: [], isLoading: false }),

  methods: {
    fetchProjects() {
      this.isLoading = true;
      axios.get(endpoint).then(res => { this.projects = res.data })
        .catch(err => { console.log(err) })
        .then(() => { this.isLoading = false })
    }
  },

  created() {
    this.fetchProjects();
  }
};
</script>

<template>
  <AppHeader />
  <main class="container my-3">
    <AppLoader v-if="isLoading" />
    <ProjectCard v-else :projects="projects" />
  </main>
</template>

<style></style>