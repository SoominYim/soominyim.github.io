<template>
    <side-bar />
    <div class="content" :style="{ 'margin-left': sidebarWidth }">
        <router-view v-slot="{ Component }" :blogs="blogs">
            <transition
                name="route"
                mode="out-in"
                enter-active-class="animate__animated animate__bounceInDown"
            >
                <component :is="Component"></component>
            </transition>
        </router-view>
    </div>
</template>

<script>
import blogData from "@/assets/blog.js";
import SideBar from "@/components/sidebar/SideBar.vue";
import { sidebarWidth } from "@/components/sidebar/state.js";
export default {
    name: "App",
    components: {
        SideBar,
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
};
</script>
<style lang="scss" scoped>
@import "assets/reset.css";
@import url("https://fonts.googleapis.com/css?family=Righteous");

.content {
    font-family: "Righteous", arial;
    font-weight: normal;
    color: #000;
    width: 100%;
    height: 100vh;
    text-align: center;
    transition: 0.5s ease;
}
.route-leave-to {
    opacity: 0;
}
.route-leave-active {
    transform: translateY(-100px);
    transition: all 0.5s ease-out;
}
</style>
