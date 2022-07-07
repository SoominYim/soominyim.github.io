<template>
    <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4"></div>
    </div>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <router-link to="/" class="text-white h4">home</router-link>
            <router-link to="/list" class="text-white h4">list</router-link>
        </div>
    </nav>

    <router-view :blogs="blogs"></router-view>
</template>

<script>
import blogData from "@/assets/blog.js";
export default {
    name: "App",
    components: {},
    data() {
        return {
            blogs: blogData,
        };
    },
    methods: {},
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
