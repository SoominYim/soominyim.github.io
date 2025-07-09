<template>
  <div class="card-layout">
    <slot />
  </div>
</template>

<script setup>
// 특별한 props는 필요 없음
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utils.scss" as *;

.card-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 20px 0;

  // 2개씩 배치 - gap에 의해 자동으로 정확한 크기로 조정
  :deep(> *) {
    flex: 1 1 0;
    min-width: 0;

    @include mobile {
      flex: 1 1 100%;
    }
  }
}
</style>