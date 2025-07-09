<template>
  <div class="card">
    <h4 v-if="title">
      <span v-if="icon" class="emoji-icon">{{ icon }}</span>{{ title }}
    </h4>
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
@use "@/assets/scss/utils.scss" as *;

.card {
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgba(90, 192, 147, 0.2);

  h4 {
    margin-top: 0;
    margin-bottom: 15px;
    color: #5ac093;
    font-size: 16px;
    font-weight: 600;
    font-family: "HANAMDAUM";

    @include mobile {
      font-size: 15px;
      margin-bottom: 12px;
    }

    .emoji-icon {
      font-size: 1.2em;
      margin-right: 5px;
    }
  }

  p {
    color: #e0e0e0;
    line-height: 1.6;
    margin: 0 0 10px 0;
  }

  ul {
    margin: 0;
    padding-left: 20px;
  }

  li {
    color: #e0e0e0;
    line-height: 1.6;
    margin-bottom: 6px;
  }

  strong {
    color: #5ac093;
  }
}
</style>