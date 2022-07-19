<template>
    <div id="app">
        <parti-cles></parti-cles>
        <custom-cursor></custom-cursor>
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
                    :leave-active-class="route.meta.leaveClass"
                >
                    <component :is="Component"></component>
                </transition>
            </router-view>
        </div>
    </div>
</template>

<script>
import blogData from "@/assets/items/blog.js";
import SideBar from "@/components/sidebar/SideBar.vue";
import CustomCursor from "@/components/CustomCursor";
import LogoStar from "@/assets/logo/LogoStar";
import { sidebarWidth } from "@/components/sidebar/state.js";
import PartiCles from "./components/PartiCles.vue";

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
#app {
    width: 100vw;
    height: 100vh;
}
.content {
    width: 100%;
    height: 100%;
    font-family: "Righteous", arial;
    font-weight: normal;
    color: #000;
    text-align: center;
    transition: 0.5s ease;
    background-color: #2d3436;
    background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
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
.animate__animated.animate__bounceInDown {
    --animate-duration: 2s;
}
</style>
