<template>
    <div class="container">
        <custom-cursor color="#cb2d3e" color-hover="#f1c40f"></custom-cursor>
        <home-typing></home-typing>
        <router-link to="/main">
            <div class="moon_warp">
                <div class="moon"></div>
            </div>
        </router-link>
        <blog-footer></blog-footer>
        <div class="footer">
            <blog-footer></blog-footer>
        </div>
    </div>
</template>

<script>
import CustomCursor from "@/components/CustomCursor";
import HomeTyping from "@/components/HomeTyping";
import BlogFooter from "@/components/BlogFooter.vue";

export default {
    name: "BlogHome",
    props: {},
    components: {
        CustomCursor,
        HomeTyping,
        BlogFooter,
    },
    data() {
        return {};
    },
    methods: {},
    mounted() {},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
.container {
    width: 100%;
    height: 100%;
}
.moon_warp {
    position: absolute;
    right: 200px;
    top: 150px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: 0 0 30px -4px #fff, 0 0 30px -4px #fff,
        0 0 8px 2px rgba(255, 255, 255, 0.26);
    background-color: #fff;

    .moon {
        background-image: url(@/assets/img/bgMoon.png);
        background-position: center;
        background-size: 100%;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 50%;
        overflow: hidden;
        opacity: 0.4;
        transition: all 1s;
    }
    .moon:hover {
        box-shadow: 0 0 80px 30px #fff, 0 0 100px -4px #fff,
            0 0 8px 2px rgba(255, 255, 255, 0.26);
    }
}

.footer {
    position: absolute;
    left: 0;
    bottom: 20px;
    width: 100%;
    z-index: 10;
}
@keyframes cloudsFrames {
    from {
        background-position: 0 0;
    }

    to {
        background-position: 10000px 0;
    }
}
</style>