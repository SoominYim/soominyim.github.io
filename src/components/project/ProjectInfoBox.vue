<template>
  <div class="info-box">
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

.info-box {
  background: rgba(102, 126, 234, 0.1);
  border-left: 4px solid #667eea;
  padding: 15px 20px;
  margin: 15px 0;
  border-radius: 8px;
  flex: 1 1 300px;

  @include mobile {
    flex: none;
  }

  h4 {
    margin: 0 0 10px 0;
    color: #667eea;
    font-size: 16px;
    font-weight: 600;
    font-family: "HANAMDAUM";

    @include mobile {
      font-size: 15px;
    }
  }

  p {
    margin: 0;
    color: #e0e8ff;
    line-height: 1.6;
  }

  pre {
    background: rgba(32, 32, 32, 0.8);
    color: #e0e0e0;
    padding: 15px;
    border-radius: 8px;
    overflow-x: auto;
    white-space: pre;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    line-height: 1.4;
    border: 1px solid rgba(102, 126, 234, 0.3);
    margin: 10px 0;

    @include mobile {
      font-size: 10px;
      padding: 10px;
    }

    code {
      background: none;
      padding: 0;
      color: inherit;
    }
  }
}
</style>