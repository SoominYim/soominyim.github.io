<template>
    <ul class="container">
        <li
            v-for="(blog, i) in blogs"
            :key="i"
            @click="$router.push('/list/' + i)"
        >
            <h4>{{ blog.title }}</h4>
            <p>{{ blog.project }}</p>
        </li>
    </ul>
</template>

<script>
export default {
    name: "BlogList",
    props: {
        blogs: Array,
    },
    data() {
        return {
            active: 0,
        };
    },
};
</script>

<style lang="scss" scoped>
.container {
    height: 100vh;
    background: coral;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    li {
        width: 100px;
        height: 100px;
        background-color: var(--grey);
        margin-top: 15px;
    }
}
.d-leave-to {
    opacity: 0;
}
.d-leave-active {
    transform: translateY(100px);
    transition: all 0.5s ease-out;
}
</style>