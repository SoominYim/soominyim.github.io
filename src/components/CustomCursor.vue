<template>
  <div class="custom-cursor">
    <!-- 큰 공 -->
    <div id="cursor-big" class="custom-cursor__ball custom-cursor__ball--big"></div>
    <!-- 작은 공 -->
    <div id="cursor-small" class="custom-cursor__ball custom-cursor__ball--small"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  const cursorBig = document.getElementById("cursor-big"),
    cursorSmall = document.getElementById("cursor-small"),
    links = document.getElementsByTagName("a"),
    withClassHover = document.getElementsByClassName("cursor-hover"),
    withHover = [...links, ...withClassHover];

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mousedown", onMouseHover);
  document.addEventListener("mouseup", onMouseHoverOut);
  document.addEventListener("mouseenter", () => {
    cursorBig.style.opacity = 1;
    cursorSmall.style.opacity = 1;
  });
  document.addEventListener("mouseleave", () => {
    cursorBig.style.opacity = 0;
    cursorSmall.style.opacity = 0;
  });

  withHover.forEach((element) => {
    element.addEventListener("mouseover", onMouseHover);
    element.addEventListener("mouseout", onMouseHoverOut);
  });

  function onMouseMove(e) {
    cursorSmall.style.opacity = 1;
    gsap.to(cursorBig, 0.4, {
      x: e.clientX - 12,
      y: e.clientY - 12,
    });
    gsap.to(cursorSmall, 0.1, {
      x: e.clientX - 2,
      y: e.clientY - 2,
    });
  }

  function onMouseHover() {
    gsap.to(cursorBig, 0.3, {
      scale: 3,
    });
  }

  function onMouseHoverOut() {
    gsap.to(cursorBig, 0.3, {
      scale: 1,
    });
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utils.scss" as *;

.custom-cursor__ball {
  position: fixed;
  top: 0;
  left: 0;
  mix-blend-mode: difference;
  z-index: 99999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease;
}

/* 큰 공의 스타일 */
.custom-cursor__ball--big {
  content: "";
  width: 25px;
  height: 25px;
  background: #fff;
  border-radius: 50%;
}

/* 화면 크기가 작을 때 커서를 숨기는 스타일 */
@include screen {

  .custom-cursor__ball--small,
  .custom-cursor__ball--big {
    display: none;
  }
}

/* 작은 공의 스타일 */
.custom-cursor__ball--small {
  content: "";
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
}
</style>
