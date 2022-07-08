<template>
    <div>
        <router-link to="/" class="h4">home</router-link>
        |
        <router-link to="/list" class="h4">list</router-link>
        <router-view :blogs="blogs"></router-view>
        <br />
    </div>
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
