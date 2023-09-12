<script>
export default {
    name: 'ProjectCard',
    props: {
        projects: Array,
    }
};
</script>

<template>
    <h1>Projects</h1>

    <ul>
        <li v-for="project in projects" :key="project.id">{{ project.title }}</li>
    </ul>
</template>

<style scoped></style>