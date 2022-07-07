<template>
    <div>
        <h4>{{ blogs[$route.params.id].title }}</h4>
        <p>{{ blogs[$route.params.id].date }}</p>
        <h4>{{ blogs[$route.params.id].content }}</h4>
        <a :href="blogs[$route.params.id].page" target="_blank"
            >사이트보러가기</a
        >
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "BlogDetail",
    props: {
        blogs: Array,
    },
};
</script>

<style>
</style>