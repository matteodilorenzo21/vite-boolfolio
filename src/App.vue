<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects';
import AppHeader from './components/AppHeader.vue';
export default {
  components: { AppHeader },
  data: () => ({ projects: [] }),
};
</script>

<template>
  <AppHeader />
</template>

<style></style>