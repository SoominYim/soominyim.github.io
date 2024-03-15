<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <i class="fa-solid fa-diamond"></i>
      </span>
      <span v-else>Soomin<br />Portfolio</span>
    </h1>

    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/profile" icon="fas fa-solid fa-user">Profile</SidebarLink>
    <SidebarLink to="/list" icon="fas fa-columns">PortFolio</SidebarLink>

    <span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
      <i class="fas fa-angle-double-left" style="font-size: 20px" />
    </span>
  </div>
</template>

<script>
import SidebarLink from "./SidebarLink";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>

<style>
:root {
  --primary: #00c6bb;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-ale: #334155;
  --light: #f1f5f9;
}
</style>
<style lang="scss" scoped>
.sidebar {
  color: white;
  background-color: var(--dark);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  font-size: 25px;
  font-weight: bold;
  height: 2.5em;
  text-align: center;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
  cursor: pointer;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
