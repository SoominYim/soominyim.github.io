<template>
  <div id="app">
    <custom-cursor></custom-cursor>

    <router-link to="/main">
      <logo-star></logo-star>
    </router-link>
    <!-- <side-bar /> -->
    <div class="content">
      <router-view v-slot="{ Component, route }" :blogs="blogs">
        <transition name="fade" mode="out-in" :enter-to-class="route.meta.enterToClass"
          :enter-active-class="route.meta.enterActiveClass" :leave-to-class="route.meta.leaveToClass"
          :leave-active-class="route.meta.leaveActiveClass">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import blogData from "@/assets/items/blog.js";
import CustomCursor from "@/components/CustomCursor";
import LogoStar from "@/assets/logo/LogoStar";
import { ref } from "vue";

const blogs = ref(blogData);
</script>
<style lang="scss">
@use "@/assets/reset.scss" as *;

#app {
  width: 100vw;
  height: 100vh;
}

.content {
  width: 100%;
  height: 100%;
  background: #000;
  font-family: "Righteous", arial;
  font-weight: normal;
  text-align: center;
  transition: 0.5s ease;
}

.animate__animated.animate__zoomIn,
.animate__animated.animate__zoomOut {
  --animate-duration: 1s;
}

.animate__animated.animate__fadeIn,
.animate__animated.animate__fadeOut {
  --animate-duration: 1s;
}

.animate__animated.animate__slideInDown,
.animate__animated.animate__slideInUp {
  --animate-duration: 1s;
}
</style>
