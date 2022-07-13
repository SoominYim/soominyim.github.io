<template>
    <div>
        <router-link :to="to" class="link" :class="{ active: isActive }">
            <i class="icon" :class="icon" />
            <transition name="fade">
                <span v-if="!collapsed">
                    <slot />
                </span>
            </transition>
        </router-link>
    </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { collapsed } from "./state";
export default {
    props: {
        to: { type: String, required: true },
        icon: { type: String, required: true },
    },
    setup(props) {
        const route = useRoute();
        const isActive = computed(() => route.path === props.to);
        return { isActive, collapsed };
    },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.link {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    font-weight: 400;
    user-select: none;
    margin: 0.1em 0;
    padding: 0.4em;
    height: 1.5em;
    color: white;
    text-decoration: none;
}
.link:hover {
    background-color: var(--grey);
}
.link.active {
    background-color: var(--grey);
    border-right: 5px solid var(--primary);
    .icon {
        color: var(--primary);
    }
}
.link .icon {
    flex-shrink: 0;
    width: 25px;
    margin-right: 10px;
}
</style>