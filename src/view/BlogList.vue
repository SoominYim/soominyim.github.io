<template>
    <div class="container">
        <div class="wrap">
            <div
                class="card_wrap"
                v-for="(blog, i) in blogs"
                :key="i"
                @click="$router.push('/list/' + i)"
            >
                <div class="card">
                    <img :src="blog.image" alt="" />
                    <div>{{ blog.title }}</div>
                    <div>{{ blog.project }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogList",
    props: {
        blogs: Array,
    },
    data() {
        return {};
    },
    mounted() {},
};
</script>

<style lang="scss" scoped>
.container {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    .wrap {
        display: flex;
        flex-wrap: wrap;
        padding: 100px;
        justify-content: space-around;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    z-index: 20;
}
::-webkit-scrollbar {
    display: block;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50px;
    width: 0.5em;
}

::-webkit-scrollbar-thumb {
    display: block;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 50px;
}
.card_wrap {
    position: relative;
    width: 600px;
    height: 300px;
    margin-top: 20px;
    background: white;
}

.card {
    position: relative;
    box-sizing: border-box;
    padding: 20px;
    height: 300px;
    width: 300px;
    display: flex;
    flex-direction: column;
    z-index: 10;
    color: white;
    background-color: #5f6d9f;
}
@keyframes moveGradient {
    50% {
        background-position: 100% 50%;
    }
}

@media (max-height: 600px) {
    .container {
        display: block;
        padding-left: 150px;
        .wrap {
            grid-template-rows: repeat(0, 500px);
            grid-template-columns: repeat(8, 400px);
            place-items: center;
        }
    }
    .card_wrap {
        width: 400px;
        height: 200px;
    }
    .card {
        width: 200px;
        height: 200px;
    }
}
</style>