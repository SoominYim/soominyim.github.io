<template>
  <div class="highlight-box">
    <h4 v-if="title">{{ title }}</h4>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utils.scss" as *;

.highlight-box {
  background: rgba(90, 192, 147, 0.1);
  border-left: 4px solid #5ac093;
  padding: 15px 20px;
  margin: 15px 0;
  border-radius: 8px;
  flex: 1 1 300px;

  @include mobile {
    flex: none;
  }

  h4 {
    margin: 0 0 10px 0;
    color: #5ac093;
    font-size: 16px;
    font-weight: 600;
    font-family: "HANAMDAUM";

    @include mobile {
      font-size: 15px;
    }
  }

  p {
    margin: 0;
    color: #e0e0e0;
    line-height: 1.6;
  }

  strong {
    color: #5ac093;
  }
}
</style>