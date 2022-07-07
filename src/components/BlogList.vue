<template>
    <div v-for="(blog, i) in blogs" :key="i">
        <h4 @click="$router.push('/detail/' + i)">{{ blog.title }}</h4>
        <p>{{ blog.date }}</p>
    </div>
</template>

<script>
export default {
    name: "BlogList",
    props: {
        blogs: Array,
    },
};
</script>

<style>
</style>