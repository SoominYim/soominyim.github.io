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
@mixin backlight($x, $y, $spread, $size, $colorA, $colorB, $duration) {
    &:after {
        position: absolute;
        content: "";
        top: $y;
        left: $x;
        right: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        transform: scale($size);
        -webkit-filter: blur($spread);
        -moz-filter: blur($spread);
        -ms-filter: blur($spread);
        filter: blur($spread);
        background: linear-gradient(270deg, $colorA, $colorB);
        background-size: 200% 200%;
        animation: animateGlow $duration ease infinite;

        @keyframes animateGlow {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
    }
}

.container {
    height: 100vh;
    width: 100vw;
    padding-top: 110px;
    display: flex;
    justify-content: center;
    .wrap {
        display: flex;
        flex-wrap: wrap;
        padding: 100px;
        justify-content: space-around;
    }
    z-index: 20;
}
.card_wrap {
    position: relative;
    width: 600px;
    height: 300px;
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
    background-color: #151823;
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