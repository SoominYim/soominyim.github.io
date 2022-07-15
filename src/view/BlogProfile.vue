<template>
    <div class="container">
        <div>name:임수민</div>
        <div>skill</div>
        <div>skill</div>
        <div>skill</div>
    </div>
</template>

<script>
export default {
    name: "BlogProfile",
    props: {
        blogs: Array,
    },
};
</script>

<style scoped>
.container {
    height: 100vh;
    background: slateblue;
}
</style>