<template>
  <ul :class="`project-list ${type}`">
    <slot />
  </ul>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'tech-list', // 'tech-list' | 'feature-list'
    validator: (value) => ['tech-list', 'feature-list'].includes(value)
  }
})
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utils.scss" as *;

.project-list {
  margin: 15px 0;
  padding-left: 20px;
  line-height: 1.8;
  list-style-type: disc;

  &.tech-list {
    :deep(li) {
      margin-bottom: 6px;
      color: #e0e0e0;
      list-style-type: disc;
      display: list-item;
      line-height: 1.6;

      strong {
        color: #5ac093;
      }

      ul {
        margin-top: 5px;
        padding-left: 15px;

        li {
          margin-bottom: 3px;
          font-size: 0.95em;
        }
      }
    }
  }

  &.feature-list {
    :deep(li) {
      margin-bottom: 8px;
      color: #e0e0e0;
      list-style-type: disc;
      display: list-item;
      line-height: 1.6;

      strong {
        color: #5ac093;
      }
    }
  }
}
</style>