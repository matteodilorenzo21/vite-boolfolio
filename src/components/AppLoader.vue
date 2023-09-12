<script>
export default {
    name: 'AppLoader',
};
</script>

<template>
    <div class="overlay-loader">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.overlay-loader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;

    .spinner-border {
        width: 80px;
        height: 80px;
    }
}
</style>