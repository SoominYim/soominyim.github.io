<template>
  <div>
    <div class="container" @click="goBack"></div>
    <div class="wrap">
      <div class="scrolle" style="line-height: 4.1">
        <div class="title">{{ projects[$route.params.id].title }}</div>
        <h2>{{ projects[$route.params.id].content }}</h2>
        <div style="margin-right: 30px; font-size: 30px">🔗 SKILLS</div>
        <div class="skill-box">
          <div v-for="(skill, i) in projects[$route.params.id].project.split(',')" :key="i" class="skill">
            <p>{{ skill.trim() }}</p>
          </div>
        </div>
        <div class="project-content" v-html="contents"></div>
        <div class="btn-wrapper">
          <div class="btn-wrapper__container">
            <div class="btn-inner">
              <a class="btn-inner__text" :href="projects[$route.params.id].gitUrl" target="_blank">view code</a>
            </div>
          </div>
        </div>
        <div class="btn-wrapper" v-if="projects[$route.params.id].url !== null">
          <div class="btn-wrapper__container">
            <div class="btn-inner">
              <a class="btn-inner__text" :href="projects[$route.params.id].url" target="_blank">preview</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  projects: Array,
});

const route = useRoute();
const router = useRouter();

// 마크다운을 HTML로 변환
const contents = computed(() => {
  const project = props.projects[route.params.id];
  if (project && project.contents) {
    return project.contents.split("\n").join("<br/>");
  }
  return "";
});

const goBack = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utils.scss" as *;
$blue: #5ac093;
$btn-bg: #10131c;

.container {
  height: 100vh;
  width: 100vw;
  z-index: 1;
}

hr {
  width: 80%;
  height: 2px;
  background-color: #777;
  border: 0;
}

.title {
  position: relative;
  top: -29px;
  left: -10px;
  width: 105.4%;
  line-height: 3;
  font-size: 32px;
  background-color: #777;
  border-top-left-radius: 20px;
  font-weight: 700;
}

h2 {
  line-height: 1.5;
  font-size: 25px;
  font-weight: 300;
}

.skill-box {
  position: relative;
  left: calc(50% - 90% / 2);
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  line-height: 3.3;

  @include mobile {
    gap: 5px;
  }
}

.skill {
  padding: 0 8px;
  height: 30px;
  line-height: 1.9;
  border: 2px solid rgba(32, 251, 182, 0.3);
  border-radius: 5px;
  font-size: 15px;
  font-family: "GangwonEdu_OTFBoldA";
}

.project-content {
  position: relative;
  left: calc(50% - 90% / 2);
  width: 90%;
  text-align: left;
  font-size: 16px;
  line-height: 1.6;
  color: #ffffff;

  font-family: "HANAMDAUM";

  @include mobile {
    left: calc(50% - 95% / 2);
    width: 95%;
    font-size: 12px;
  }

  // v-html 콘텐츠에 적용될 글로벌 스타일
  :deep(h1) {
    color: #5ac093;
    font-size: 28px;
    font-weight: 700;
    margin: 30px 0 15px 0;
    line-height: 1.3;

    @include mobile {
      font-size: 24px;
      margin: 25px 0 12px 0;
    }
  }

  :deep(h2) {
    color: #5ac093;
    font-size: 22px;
    font-weight: 600;
    margin: 25px 0 12px 0;
    line-height: 1.4;

    @include mobile {
      font-size: 20px;
      margin: 20px 0 10px 0;
    }
  }

  :deep(h3) {
    color: #5ac093;
    font-size: 18px;
    font-weight: 600;
    margin: 20px 0 10px 0;
    line-height: 1.4;

    @include mobile {
      font-size: 17px;
      margin: 18px 0 8px 0;
    }
  }

  :deep(h4) {
    color: #67c3cc;
    font-size: 16px;
    font-weight: 500;
    margin: 18px 0 8px 0;
    line-height: 1.5;

    @include mobile {
      font-size: 15px;
      margin: 15px 0 6px 0;
    }
  }

  :deep(h5) {
    color: #8dd3c7;
    font-size: 15px;
    font-weight: 500;
    margin: 15px 0 6px 0;
    line-height: 1.5;

    @include mobile {
      font-size: 14px;
      margin: 12px 0 5px 0;
    }
  }

  :deep(h6) {
    color: #b3d9d6;
    font-size: 14px;
    font-weight: 400;
    margin: 12px 0 5px 0;
    line-height: 1.5;

    @include mobile {
      font-size: 13px;
      margin: 10px 0 4px 0;
    }
  }

  :deep(p) {
    color: #e0e0e0;
    line-height: 1.8;
    margin-bottom: 15px;
  }

  :deep(ul),
  :deep(ol) {
    color: #e0e0e0;
    margin: 15px 0;
    padding-left: 20px;
  }

  :deep(li) {
    margin-bottom: 8px;
    line-height: 1.6;
  }

  :deep(strong) {
    color: #5ac093;
    font-weight: bold;
  }

  :deep(code) {
    background: rgba(90, 192, 147, 0.2);
    color: #5ac093;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
  }

  :deep(.project-detail-section) {
    margin-bottom: 30px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    border-left: 4px solid #5ac093;
  }

  :deep(img) {
    max-width: 100%;
    border-radius: 8px;
    margin: 10px 0;
  }

  :deep(a) {
    color: #5ac093;
    text-decoration: none;
  }

  :deep(a:hover) {
    text-decoration: underline;
  }
}

.wrap {
  position: absolute;
  top: 60px;
  left: calc(50% - 70% / 2);
  height: 90%;
  width: 70%;
  border-radius: 20px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  background: rgba(100, 100, 100, 0.2);

  color: #fff;
  z-index: 3;
  line-height: 5vw;
}

.scrolle {
  box-sizing: border-box;
  padding: 30px 10px 10px 10px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

@include mobile {
  .wrap {
    position: absolute;
    top: 80px;
    left: calc(50% - 95vw / 2);
    height: 85%;
    width: 95vw;
  }

  .scrolle {
    height: 100%;
  }
}

@include tablet {
  .wrap {
    position: absolute;
    top: 80px;
    left: calc(50% - 95vw / 2);
    height: 85%;
    width: 95vw;
  }

  .scrolle {
    height: 100%;
  }
}

::-webkit-scrollbar {
  display: block;
  background-color: rgba(32, 251, 182, 0.3);
  border-radius: 50px;
  width: 0.5em;
}

::-webkit-scrollbar-thumb {
  display: block;
  background-color: rgba(90, 192, 147, 0.7);
  border-radius: 50px;
}

a {
  color: #fff;
  display: block;
  font-size: 30px;
}

.img_wrap {
  width: 200px !important;
}

/* BUTTON START */
// Variables

.btn-wrapper {
  width: 290px;
  height: 110px;
  position: relative;
  margin: 40px auto 0;

  &:hover {
    .btn-inner {
      top: -4px;
      transform: scale(1, 1);
      cursor: pointer;
    }
  }

  &__container {
    border-bottom: 2px solid $blue;
    position: absolute;
    width: 100%;
    height: 80px;

    &:before,
    &:after {
      border-bottom: 2px solid $blue;
      width: 96%;
      left: 2%;
      bottom: -8px;
      content: "";
      position: absolute;
    }

    &:after {
      width: 92%;
      left: 4%;
      bottom: -14px;
    }

    .btn-inner {
      width: 104.2%;
      height: 100%;
      position: absolute;
      top: 20px;
      left: -2.1%;
      border: 2px solid $blue;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Source Code Pro", monospace;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 18px;
      background: $btn-bg;
      transform: scale(0.96, 0.96);
      transition: all 0.3s;
      z-index: 4;

      &__text {
        text-decoration: none;
        color: $blue;
      }
    }
  }
}

/* BUTTON END */
</style>
