<template>
  <!-- 타이핑 효과가 보여질 컨테이너 -->
  <div class="container">
    <h1>
      <!-- 타이핑 효과를 보여주는 부분 -->
      <span class="typed-text">{{ typeValue }}</span>
      <!-- 커서 부분, typing 클래스가 적용되면 멈추도록 처리 -->
      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const typeValue = ref("");
const typeStatus = ref(false);
const typeArray = [
  "달을 클릭하면 메인으로 이동합니다.",
  "Hello, World!!!",
  "임수민의 포트폴리오 입니다.",
  "It's Yim Soomin's portfolio",
  "Press the moon to go to the main page",
];
const typingSpeed = 200;
const erasingSpeed = 100;
const newTextDelay = 1000;
let typeArrayIndex = 0;
let charIndex = 0;

const typeText = () => {
  if (charIndex < typeArray[typeArrayIndex].length) {
    if (!typeStatus.value) {
      typeStatus.value = true;
    }

    typeValue.value += typeArray[typeArrayIndex].charAt(charIndex);
    charIndex += 1;
    setTimeout(typeText, typingSpeed);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay + 1000);
  }
};

const eraseText = () => {
  if (charIndex > 0) {
    if (!typeStatus.value) typeStatus.value = true;

    typeValue.value = typeArray[typeArrayIndex].substring(0, charIndex - 1);
    charIndex -= 1;
    setTimeout(eraseText, erasingSpeed);
  } else {
    typeStatus.value = false;
    typeArrayIndex += 1;
    if (typeArrayIndex >= typeArray.length) typeArrayIndex = 0;

    setTimeout(typeText, typingSpeed + 500);
  }
};

onMounted(() => {
  setTimeout(typeText, newTextDelay + 200);
});
</script>

<style lang="scss" scoped>
/* 컨테이너 스타일 */
.container {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 타이핑할 텍스트 스타일 */
h1 {
  font-size: 4rem;
  font-weight: normal;

  /* 타이핑된 텍스트 스타일 */
  span.typed-text {
    font-family: "Orbitron", sans-serif;
    color: #fff;
    font-size: 30px;
  }

  /* 커서 스타일 */
  span.cursor {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    animation: cursorBlink 1s infinite;
  }

  /* 타이핑 중일 때 커서 멈춤 스타일 */
  span.cursor.typing {
    animation: none;
  }
}

/* 커서 깜빡이는 애니메이션 스타일 */
@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }

  50% {
    background-color: transparent;
  }

  99% {
    background-color: transparent;
  }
}
</style>
