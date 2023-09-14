<script>
export default {
    name: 'NotFoundPage',
};
</script>

<template>
    <div id="not-found" class="d-flex align-items-center justify-content-center">
        <h3 class="text-white">404 | PAGE NOT FOUND</h3>
        <button class="ms-3 mb-1 btn btn-secondary" @click="$router.back()">Torna indietro</button>
    </div>
</template>

<style>
#not-found {
    height: calc(100vh - 120px);
}
</style>