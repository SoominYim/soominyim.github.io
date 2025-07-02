<template>
  <div id="app">
    <custom-cursor></custom-cursor>

    <router-link to="/main">
      <logo-star></logo-star>
    </router-link>
    <!-- <side-bar /> -->
    <div class="content">
      <router-view v-slot="{ Component, route }" :projects="projects">
        <transition name="fade" mode="out-in" :enter-to-class="route.meta.enterToClass"
          :enter-active-class="route.meta.enterActiveClass" :leave-to-class="route.meta.leaveToClass"
          :leave-active-class="route.meta.leaveActiveClass">
          <component :is="Component" :projects="projects"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import projectData from "@/assets/items/projects.js";
import CustomCursor from "@/components/CustomCursor.vue";
import LogoStar from "@/assets/logo/LogoStar.vue";
import { ref } from "vue";

const projects = ref(projectData);
</script>
<style lang="scss">
@use "@/assets/reset.scss" as *;

:root {
  --primary: #00c6bb;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-ale: #334155;
  --light: #f1f5f9;
}

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
