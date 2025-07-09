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



        <div class="project-content" v-html="contents" ref="projectContent"></div>
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

    <!-- 반응형 토글 목차 -->
    <div class="table-of-contents" v-if="tableOfContents.length > 0" :class="{ 'collapsed': !isTOCOpen }">
      <!-- 접혔을 때 작은 아이콘 -->
      <button v-if="!isTOCOpen" class="toc-mini-btn" @click="toggleTOC" title="목차 보기">
        <span class="toc-mini-icon">📑</span>
      </button>

      <!-- 펼쳐졌을 때 전체 토글 버튼 -->
      <button v-if="isTOCOpen" class="toc-toggle-btn" @click="toggleTOC" :class="{ 'active': isTOCOpen }">
        <span class="toc-icon">📑</span>
        <span class="toc-label">목차</span>
        <span class="toc-arrow" :class="{ 'rotated': isTOCOpen }">▼</span>
      </button>

      <!-- 목차 내용 -->
      <div v-if="isTOCOpen" class="toc-content" :class="{ 'open': isTOCOpen }">
        <ul class="toc-list">
          <li v-for="item in tableOfContents" :key="item.id" :class="`toc-item toc-${item.level}`"
            @click="scrollToSection(item.id)">
            <span class="toc-text">{{ item.text }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, nextTick, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  projects: Array,
});

const route = useRoute();
const router = useRouter();
const projectContent = ref(null);
const tableOfContents = reactive([]);

// 화면 크기에 따라 초기 목차 상태 설정
const getInitialTOCState = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth >= 768; // 태블릿 이상에서는 열림, 모바일에서는 닫힘
  }
  return true;
};

const isTOCOpen = ref(getInitialTOCState());

// 마크다운을 HTML로 변환
const contents = computed(() => {
  const project = props.projects[route.params.id];
  if (project && project.contents) {
    return project.contents.split("\n").join("<br/>");
  }
  return "";
});

// 목차 생성 함수
const generateTableOfContents = () => {
  if (!projectContent.value) return;

  tableOfContents.splice(0); // 기존 목차 초기화

  const headings = projectContent.value.querySelectorAll('h1, h2, h3, h4, h5, h6');

  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.substring(1));
    // 이모지와 아이콘 제거
    const text = heading.textContent.replace(/[\u{1F000}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '').replace(/span class="emoji-icon".*?span>/g, '').trim();
    const id = `heading-${index}-${text.replace(/\s+/g, '-').toLowerCase()}`;

    // 제목에 ID 부여
    heading.id = id;

    tableOfContents.push({
      id,
      text,
      level,
      element: heading
    });
  });
};

// 섹션으로 스크롤 이동 (더 안정적인 방법)
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // scrollIntoView API 사용 - 브라우저가 자동으로 최적화
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start', // 요소를 컨테이너 상단 근처에 위치
      inline: 'nearest'
    });
  }
};

const goBack = () => {
  router.go(-1);
};

// 토글 기능
const toggleTOC = () => {
  isTOCOpen.value = !isTOCOpen.value;
};

// 화면 크기 변경 감지
const handleResize = () => {
  const isLargeScreen = window.innerWidth >= 768;
  if (isLargeScreen && !isTOCOpen.value) {
    isTOCOpen.value = true; // 큰 화면에서는 자동으로 열기
  }
};

// 컴포넌트 마운트 후 목차 생성
onMounted(async () => {
  await nextTick(); // DOM 업데이트 대기
  setTimeout(() => {
    generateTableOfContents();
  }, 100); // HTML 렌더링 완료 대기

  // 리사이즈 이벤트 리스너 추가
  window.addEventListener('resize', handleResize);
});

// 컴포넌트 언마운트 시 이벤트 리스너 제거
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
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
    line-height: 1.3;

    @include mobile {
      font-size: 24px;
    }
  }

  :deep(h2) {
    color: #5ac093;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.4;

    @include mobile {
      font-size: 20px;
    }
  }

  :deep(h3) {
    color: #5ac093;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4;

    @include mobile {
      font-size: 17px;
    }
  }

  :deep(h4) {
    color: #67c3cc;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.5;

    @include mobile {
      font-size: 15px;
    }
  }

  :deep(h5) {
    color: #8dd3c7;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.5;

    @include mobile {
      font-size: 14px;
    }
  }

  :deep(h6) {
    color: #b3d9d6;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;

    @include mobile {
      font-size: 13px;
    }
  }

  :deep(p) {
    color: #e0e0e0;
    line-height: 1.8;
  }

  :deep(ul),
  :deep(ol) {
    color: #e0e0e0;
    padding-left: 20px;
    list-style-type: disc;
  }

  :deep(li) {
    line-height: 1.6;
    list-style-type: disc;
    display: list-item;
    margin-bottom: 4px;
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

  :deep(pre) {
    background: rgba(32, 32, 32, 0.8);
    color: #e0e0e0;
    padding: 15px;
    border-radius: 8px;
    overflow-x: auto;
    white-space: pre;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    line-height: 1.4;
    border: 1px solid rgba(90, 192, 147, 0.3);

    @include mobile {
      font-size: 10px;
      padding: 10px;
    }

    // pre 안의 code 태그는 배경색 제거
    code {
      background: none;
      padding: 0;
      color: inherit;
    }
  }

  :deep(.project-detail-section) {
    margin-bottom: 20px;
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

  // 공통 클래스들
  :deep(.section-title) {
    font-size: 24px;
    font-weight: 600;
    color: #5ac093;
    margin: 25px 0 15px 0;

    @include mobile {
      font-size: 20px;
      margin: 20px 0 12px 0;
    }
  }

  :deep(.subsection-title) {
    font-size: 20px;
    font-weight: 500;
    color: #67c3cc;
    margin: 20px 0 10px 0;

    @include mobile {
      font-size: 18px;
      margin: 15px 0 8px 0;
    }
  }

  :deep(.feature-list) {
    margin: 15px 0;
    padding-left: 20px;
    line-height: 1.8;
    list-style-type: disc;

    li {
      margin-bottom: 8px;
      color: #e0e0e0;
      list-style-type: disc;
      display: list-item;
    }
  }

  :deep(.tech-list) {
    margin: 15px 0;
    padding-left: 20px;
    line-height: 1.8;
    list-style-type: disc;

    li {
      margin-bottom: 6px;
      color: #e0e0e0;
      list-style-type: disc;
      display: list-item;

      strong {
        color: #5ac093;
      }
    }
  }

  :deep(.image-gallery) {
    text-align: center;
    margin: 20px 0;

    img {
      width: 100%;
      border-radius: 10px;
      margin: 10px 0;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    p {
      color: #b0b0b0;
      font-size: 14px;
      margin: 5px 0 20px 0;
      font-style: italic;
    }
  }

  :deep(.highlight-box) {
    background: rgba(90, 192, 147, 0.1);
    border-left: 4px solid #5ac093;
    padding: 15px 20px;
    margin: 15px 0;
    border-radius: 8px;
    flex: 1 1 300px;

    @include mobile {
      flex: none;
    }

    p {
      margin: 0;
      color: #e0e0e0;
    }

    strong {
      color: #5ac093;
    }
  }

  :deep(.warning-box) {
    background: rgba(255, 99, 132, 0.1);
    border-left: 4px solid #ff6384;
    padding: 15px 20px;
    margin: 15px 0;
    border-radius: 8px;
    flex: 1 1 300px;

    @include mobile {
      flex: none;
    }

    p {
      margin: 0;
      color: #ffe0e0;
    }
  }

  :deep(.info-box) {
    background: rgba(102, 126, 234, 0.1);
    border-left: 4px solid #667eea;
    padding: 15px 20px;
    margin: 15px 0;
    border-radius: 8px;
    flex: 1 1 300px;

    @include mobile {
      flex: none;
    }

    p {
      margin: 0;
      color: #e0e8ff;
    }
  }

  :deep(.card-layout) {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 20px -15px;

    // 2개씩 배치 - gap에 의해 자동으로 정확한 크기로 조정
    >* {
      flex: 1 1 0;
      min-width: 0;

      @include mobile {
        flex: 1 1 100%;
      }
    }
  }

  :deep(.card) {
    background: rgba(255, 255, 255, 0.05);
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgba(90, 192, 147, 0.2);

    h4 {
      margin-top: 0;
      color: #5ac093;
    }
  }

  :deep(.center-text) {
    text-align: center;
  }

  :deep(.emoji-icon) {
    font-size: 1.2em;
    margin-right: 5px;
  }
}

// 반응형 토글 목차 스타일
.table-of-contents {
  position: fixed;
  top: 80px;
  right: 20px;
  width: 250px;
  background: rgba(32, 32, 32, 0.9);
  border: 1px solid rgba(90, 192, 147, 0.4);
  border-radius: 12px;
  padding: 15px;
  z-index: 1000;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  // 접혔을 때 작은 크기
  &.collapsed {
    width: 50px;
    height: 50px;
    padding: 8px;
    border-radius: 50%;
    overflow: hidden;

    // 접혔을 때 모든 내용 완전히 숨김
    .toc-content,
    .toc-toggle-btn {
      display: none !important;
    }
  }

  .toc-mini-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(90, 192, 147, 0.2);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #5ac093;

    &:hover {
      background: rgba(90, 192, 147, 0.3);
      transform: scale(1.1);
    }

    .toc-mini-icon {
      font-size: 1.5em;
    }
  }

  .toc-toggle-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px 15px;
    background: rgba(90, 192, 147, 0.1);
    border: 1px solid rgba(90, 192, 147, 0.3);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 15px;
    color: #e0e0e0;
    font-size: 14px;
    font-weight: 600;
    font-family: "HANAMDAUM";

    &:hover {
      background: rgba(90, 192, 147, 0.15);
      transform: translateY(-1px);
    }

    &.active {
      background: rgba(90, 192, 147, 0.2);
      border-color: rgba(90, 192, 147, 0.5);
      color: #5ac093;
    }

    .toc-icon {
      font-size: 1.2em;
      margin-right: 8px;
    }

    .toc-label {
      flex-grow: 1;
      text-align: left;
    }

    .toc-arrow {
      transition: transform 0.3s ease;
      font-size: 1em;
      margin-left: 8px;

      &.rotated {
        transform: rotate(180deg);
      }
    }
  }

  .toc-content {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.4s ease-out;

    &.open {
      max-height: 400px;
      overflow-y: auto;
      padding-right: 5px;
    }

    // 스크롤바 스타일
    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(90, 192, 147, 0.1);
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(90, 192, 147, 0.5);
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: rgba(90, 192, 147, 0.7);
    }
  }

  .toc-list {
    list-style: none;
    padding: 0;
    margin: 0;

    .toc-item {
      margin: 3px 0;
      cursor: pointer;
      transition: all 0.2s ease;
      border-radius: 6px;
      padding: 8px 12px;
      text-align: left;

      &:hover {
        background: rgba(90, 192, 147, 0.2);
        transform: translateX(3px);
      }

      .toc-text {
        color: #e0e0e0;
        font-size: 12px;
        line-height: 1.4;
        display: block;
        word-wrap: break-word;
        overflow-wrap: break-word;
        font-family: "HANAMDAUM";
      }

      // h1 레벨
      &.toc-1 {
        margin-left: 0;

        .toc-text {
          font-weight: 700;
          color: #5ac093;
          font-size: 14px;
        }
      }

      // h2 레벨
      &.toc-2 {
        margin-left: 10px;

        .toc-text {
          font-weight: 600;
          color: #5ac093;
          font-size: 13px;
        }
      }

      // h3 레벨
      &.toc-3 {
        margin-left: 20px;

        .toc-text {
          font-weight: 500;
          color: #67c3cc;
          font-size: 12px;
        }
      }

      // h4 레벨
      &.toc-4 {
        margin-left: 30px;

        .toc-text {
          color: #8dd3c7;
          font-size: 11px;
        }
      }

      // h5, h6 레벨
      &.toc-5,
      &.toc-6 {
        margin-left: 40px;

        .toc-text {
          color: #b3d9d6;
          font-size: 10px;
        }
      }
    }
  }

  // 반응형 디자인
  @include mobile {
    position: fixed;
    top: 90px;
    left: 15px;
    right: 15px;
    width: auto;
    z-index: 1001;
    padding: 12px;

    &.collapsed {
      top: 20px;
      right: 20px;
      left: auto;
      width: 45px;
      height: 45px;
      padding: 6px;
    }

    .toc-mini-btn .toc-mini-icon {
      font-size: 1.3em;
    }

    .toc-toggle-btn {
      font-size: 13px;
      padding: 10px 12px;

      .toc-icon {
        font-size: 1.1em;
      }
    }

    .toc-content.open {
      max-height: 300px;
    }

    .toc-list .toc-item .toc-text {
      font-size: 11px;
    }

    .toc-list .toc-item.toc-1 .toc-text {
      font-size: 13px;
    }

    .toc-list .toc-item.toc-2 .toc-text {
      font-size: 12px;
    }
  }

  @include tablet {
    width: 220px;
    right: 15px;
    padding: 12px;

    &.collapsed {
      width: 48px;
      height: 48px;
      padding: 7px;
    }
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
