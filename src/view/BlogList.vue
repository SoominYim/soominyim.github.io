<template>
    <div class="container">
        <parti-cles></parti-cles>
        <div class="wrap">
            <div class="card_wrap" v-for="(blog, i) in blogs" :key="i" @click="$router.push('/list/' + i)">
                <div class="card">
                    <div>{{ blog.title }}</div>
                    <div>{{ blog.project }}</div>
                </div>
                <div class="cardImg">
                    <img :src="blog.image" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PartiCles from "@/components/PartiCles.vue";

export default {
    name: "BlogList",
    components: {
        PartiCles,
    },
    props: {
        blogs: Array,
    },
    data() {
        return {};
    },
    mounted() { },
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
    display: flex;
    width: 600px;
    height: 300px;
    margin-top: 20px;
}

.card_wrap:hover {
    .cardImg {
        transform: translateX(200px) rotate(360deg);
    }
}

.card {
    display: flex;
    box-sizing: border-box;
    position: relative;
    width: 300px;
    height: 300px;
    padding: 20px;
    border-radius: 50%;
    flex-direction: column;
    z-index: 10;
    color: white;
    background-color: #5f6d9f;
}

.cardImg {
    position: absolute;
    left: 50px;
    height: 300px;
    background: white;
    border-radius: 50%;
    transition: all ease 2s;

    img {
        border-radius: 50%;
        box-sizing: border-box;
        height: 300px;
        width: 300px;
        object-fit: contain;
    }
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