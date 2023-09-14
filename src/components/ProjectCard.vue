<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object,
    }
};
</script>

<template>
    <div class="card px-5 mb-5">
        <img :src="project.image.startsWith('http') ? project.image : 'http://localhost:8000/storage/images/' + project.image"
            id="project-image" class="card-img-top mt-2 shadow-lg" alt="Project Image">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <div class="row">
                <div class="col-4">
                    <p><strong>Client:</strong> {{ project.client }}</p>
                    <p><strong>Completion Year:</strong> {{ project.completion_year }}</p>
                </div>
                <div class="col-4">
                    <p><strong>Project Duration:</strong> {{ project.project_duration }}</p>
                    <p><strong>Category:</strong> {{ project.category.label }}</p>
                </div>
                <div class="col-4">
                    <div class="technologies mb-3">
                        <strong>Technologies:</strong>
                        <span v-for="tech in project.technologies" :key="tech.id" class="badge badge-secondary">{{
                            tech.label }}</span>
                    </div>
                    <a :href="project.url">Visit Website</a>
                </div>
            </div>
            <div class="d-flex justify-content-end">
                <router-link v-if="$route.name !== 'project-detail'" class="btn btn-primary m-3 px-4"
                    :to="{ name: 'project-detail', params: { id: project.id } }">Vedi dettagli</router-link>

                <button v-else class="ms-3 mb-1 btn btn-secondary" @click="$router.back()">Torna indietro</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
#project-image {
    height: 450px;
    width: 900px;
    object-fit: cover;
    margin: 0 auto;
}
</style>