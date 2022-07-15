<template>
    <div id="app">
        <parti-cles></parti-cles>
        <custom-cursor color="#cb2d3e" color-hover="#f1c40f"></custom-cursor>
        <router-link to="/main">
            <logo-star></logo-star>
        </router-link>
        <!-- <side-bar /> -->
        <div class="content">
            <router-view v-slot="{ Component, route }" :blogs="blogs">
                <transition
                    name="fade"
                    mode="out-in"
                    :enter-active-class="route.meta.enterClass"
                >
                    <component :is="Component"></component>
                </transition>
            </router-view>
        </div>
    </div>
</template>

<script>
import blogData from "@/assets/blog.js";
import SideBar from "@/components/sidebar/SideBar.vue";
import CustomCursor from "@/assets/cursor/CustomCursor";
import LogoStar from "@/assets/logo/LogoStar";
import { sidebarWidth } from "@/components/sidebar/state.js";
import PartiCles from "./assets/particles/PartiCles.vue";

export default {
    name: "App",
    components: {
        SideBar,
        CustomCursor,
        LogoStar,
        PartiCles,
    },
    data() {
        return {
            blogs: blogData,
        };
    },
    setup() {
        return { sidebarWidth };
    },
    methods: {},
    mounted() {},
};
</script>
<style lang="scss" scoped>
@import "assets/reset.css";

.content {
    font-family: "Righteous", arial;
    font-weight: normal;
    color: #000;
    width: 100vw;
    height: 100vh;
    text-align: center;
    transition: 0.5s ease;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #191f24 100%);
}
.fade-leave-to {
    opacity: 1;
}
.fade-leave-active {
    opacity: 0;
    transition: all 1.5s ease-out;
}

.animate__animated.animate__fadeIn {
    --animate-duration: 4s;
}
</style>
