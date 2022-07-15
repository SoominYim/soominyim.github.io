<template>
    <div class="container">
        <custom-cursor color="#cb2d3e" color-hover="#f1c40f"></custom-cursor>
        <home-typing></home-typing>
        <router-link to="/main">
            <div class="moon_warp">
                <div class="moon"></div>
            </div>
        </router-link>
        <div class="floresta">
            <img src="@/assets/img/bgTree.png" alt="" />
        </div>
    </div>
</template>

<script>
import CustomCursor from "@/assets/cursor/CustomCursor";
import HomeTyping from "@/components/HomeTyping";

export default {
    name: "BlogHome",
    props: {
        blogs: Array,
    },
    components: {
        CustomCursor,
        HomeTyping,
    },
    mounted() {},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

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

.floresta {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    pointer-events: none;
    img {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    z-index: 10;
}
</style>