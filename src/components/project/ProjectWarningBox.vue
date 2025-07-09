<template>
  <div class="warning-box">
    <h4 v-if="title">{{ title }}</h4>
    <h5 v-if="subtitle">{{ subtitle }}</h5>
    <h6 v-if="smallTitle">{{ smallTitle }}</h6>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  smallTitle: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utils.scss" as *;

.warning-box {
  background: rgba(255, 99, 132, 0.1);
  border-left: 4px solid #ff6384;
  padding: 15px 20px;
  margin: 15px 0;
  border-radius: 8px;
  flex: 1 1 300px;

  @include mobile {
    flex: none;
  }

  h4 {
    margin: 0 0 10px 0;
    color: #ff6384;
    font-size: 16px;
    font-weight: 600;
    font-family: "HANAMDAUM";

    @include mobile {
      font-size: 15px;
    }
  }

  h5 {
    margin: 0 0 8px 0;
    color: #ff6384;
    font-size: 15px;
    font-weight: 500;
    font-family: "HANAMDAUM";

    @include mobile {
      font-size: 14px;
    }
  }

  h6 {
    margin: 0 0 6px 0;
    color: #ff6384;
    font-size: 14px;
    font-weight: 500;
    font-family: "HANAMDAUM";

    @include mobile {
      font-size: 13px;
    }
  }

  p {
    margin: 0;
    color: #ffe0e0;
    line-height: 1.6;
  }

  strong {
    color: #ff6384;
  }
}
</style>