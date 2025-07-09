<template>
  <div class="project-detail-section">
    <h2 v-if="title">
      <span v-if="icon" class="emoji-icon">{{ icon }}</span>{{ title }}
    </h2>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.project-detail-section {
  margin-bottom: 30px;
  padding: 20px 0;

  h2 {
    color: #5ac093;
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 20px 0;
    font-family: "HANAMDAUM";

    @include mobile {
      font-size: 20px;
      margin: 0 0 15px 0;
    }

    .emoji-icon {
      font-size: 1.2em;
      margin-right: 8px;
    }
  }
}
</style>