<template>
  <div class="image-gallery">
    <slot />
  </div>
</template>

<script setup>
// 특별한 props는 필요 없음
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utils.scss" as *;

.image-gallery {
  text-align: center;
  margin: 20px 0;

  :deep(img) {
    width: 100%;
    border-radius: 10px;
    margin: 10px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  :deep(p) {
    color: #b0b0b0;
    font-size: 14px;
    margin: 5px 0 20px 0;
    font-style: italic;
    font-family: "HANAMDAUM";

    @include mobile {
      font-size: 13px;
    }
  }
}
</style>