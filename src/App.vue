<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';
import AppHeader from './components/AppHeader.vue';
import ProjectCard from './components/ProjectCard.vue';
export default {
  components: { AppHeader, ProjectCard },

  data: () => ({ projects: [] }),

  methods: {
    fetchProjects() {
      axios.get(endpoint).then(res => { this.projects = res.data })
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
    <ProjectCard :projects="projects" />
  </main>
</template>

<style></style>