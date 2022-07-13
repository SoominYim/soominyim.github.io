<template>
    <div>
        <home-typing></home-typing>
    </div>
</template>

<script>
import HomeTyping from "@/components/HomeTyping.vue";
export default {
    name: "BlogHome",
    props: {
        blogs: Array,
    },
    components: {
        HomeTyping,
    },
};
</script>

<style scoped>
</style>