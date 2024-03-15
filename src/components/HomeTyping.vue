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

<script>
export default {
  name: "HomeTyping",
  props: {
    blogs: Array,
  },
  data() {
    return {
      // 현재 텍스트 값
      typeValue: "",
      // 타이핑 중인지 여부를 나타내는 상태 변수 (true면 커서 멈춤)
      typeStatus: false,
      // 타이핑할 텍스트 배열
      typeArray: [
        "Hello, World!!!",
        "임수민의 포트폴리오 입니다.",
        "달을 누르시면 메인으로 이동합니다.",
        "It's Yim Soomin's portfolio",
        "Press the moon to go to the main page",
      ],
      // 타이핑 속도와 지우기 속도, 새로운 텍스트 속도를 나타내는 변수
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 1000, // 새로운텍스트 속도
      // 현재 타이핑할 텍스트의 인덱스와 글자 인덱스
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    // 타이핑 효과를 주는 메소드
    typeText() {
      // 현재 타이핑 중인 텍스트가 있으면 계속 타이핑
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) {
          this.typeStatus = true;
        }

        // 한 글자씩 텍스트에 추가하고 글자 인덱스를 증가시킴
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed); // 일정 시간 후에 다음 글자를 타이핑하기 위해 메소드 재귀호출
      } else {
        // 타이핑이 끝나면 지우기 시작
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay + 1000); // 글 지울 때 딜레이
      }
    },
    // 지우기 효과를 주는 메소드
    eraseText() {
      // 텍스트를 지울 글자가 있으면 계속 지우기
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;

        // 한 글자씩 텍스트에서 삭제하고 글자 인덱스를 감소시킴
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed); // 일정 시간 후에 다음 글자를 지우기 위해 메소드 재귀호출
      } else {
        // 텍스트를 모두 지우면 다음 텍스트를 타이핑하기 위해 인덱스를 변경하고 재귀호출
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length) this.typeArrayIndex = 0;

        setTimeout(this.typeText, this.typingSpeed + 500); // 글 쓸때 딜레이
      }
    },
  },
  created() {
    // 컴포넌트가 생성될 때 초기 타이핑 효과를 시작하기 위해 setTimeout을 이용하여 typeText 메소드 호출
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=Press+Start+2P&display=swap");

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
