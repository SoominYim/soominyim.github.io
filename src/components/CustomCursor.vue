<template>
  <div class="custom-cursor">
    <!-- 큰 공 -->
    <div id="cursor-big" class="custom-cursor__ball custom-cursor__ball--big"></div>
    <!-- 작은 공 -->
    <div id="cursor-small" class="custom-cursor__ball custom-cursor__ball--small"></div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  // 컴포넌트가 마운트(렌더링)된 후 실행되는 메소드
  mounted() {
    // HTML 요소들을 가져옴
    const cursorBig = document.getElementById("cursor-big"),
      cursorSmall = document.getElementById("cursor-small"),
      links = document.getElementsByTagName("a"),
      withClassHover = document.getElementsByClassName("cursor-hover"),
      withHover = [...links, ...withClassHover];

    // 이벤트 리스너들을 등록
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseHover);
    document.addEventListener("mouseup", onMouseHoverOut);
    document.addEventListener("mouseenter", () => {
      // 커서가 화면에 들어왔을 때 큰 공과 작은 공을 보이게 함
      cursorBig.style.opacity = 1;
      cursorSmall.style.opacity = 1;
    });
    document.addEventListener("mouseleave", () => {
      // 커서가 화면을 벗어났을 때 큰 공과 작은 공을 숨김
      cursorBig.style.opacity = 0;
      cursorSmall.style.opacity = 0;
    });
    // 커서 효과를 가진 요소들에 대해 각각 이벤트 리스너 등록
    withHover.forEach((element) => {
      element.addEventListener("mouseover", onMouseHover);
      element.addEventListener("mouseout", onMouseHoverOut);
    });

    // 마우스 이동 이벤트 핸들러
    function onMouseMove(e) {
      // 작은 공을 보이게 함
      cursorSmall.style.opacity = 1;
      // gsap를 사용하여 큰 공과 작은 공을 마우스 커서의 위치로 이동시킴
      gsap.to(cursorBig, 0.4, {
        x: e.clientX - 12,
        y: e.clientY - 12,
      });
      gsap.to(cursorSmall, 0.1, {
        x: e.clientX - 2,
        y: e.clientY - 2,
      });
    }
    // 요소 위에 커서가 올라갔을 때 이벤트 핸들러

    function onMouseHover() {
      // gsap를 사용하여 큰 공을 확대(scale)시킴
      gsap.to(cursorBig, 0.3, {
        scale: 3,
      });
    }
    // 요소에서 커서가 벗어났을 때 이벤트 핸들러
    function onMouseHoverOut() {
      // gsap를 사용하여 큰 공을 원래 크기로 돌아오게 함
      gsap.to(cursorBig, 0.3, {
        scale: 1,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utils.scss";

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
