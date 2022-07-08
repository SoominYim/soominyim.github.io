<template>
    <div>
        <h4>{{ blogs[$route.params.id].title }}</h4>
        <h4>{{ blogs[$route.params.id].content }}</h4>
        <h4>{{ blogs[$route.params.id].project }}</h4>
        <a :href="blogs[$route.params.id].pageUrl" target="_blank">
            보러가기
        </a>
        <br />
        <a :href="blogs[$route.params.id].gitUrl" target="_blank"
            >코드보러가기</a
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