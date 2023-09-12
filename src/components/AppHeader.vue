<script>
export default {
    name: 'AppHeader'
};
</script>

<template>
    <header class="py-2 border-bottom border-secondary">

        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid px-4">

                <a class="navbar-brand text-white" href="#">BOOLFOLIO</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <a class="nav-link active text-white ms-4" aria-current="page" href="#">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link ms-4" href="#">Features</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link ms-4" href="#">Pricing</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    </header>
</template>

<style></style>