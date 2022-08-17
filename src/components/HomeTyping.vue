<template>
    <div class="container">
        <h1>
            <span class="typed-text">{{ typeValue }} </span>
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
            typeValue: "", //state
            typeStatus: false, // true시 cursor 멈춤
            typeArray: [
                "테스트11",
                "Hello, World!!!",
                "임수민의 포트폴리오 입니다.",
                "달을 누르시면 메인으로 이동합니다.",
                "It's Yim Soomin's portfolio",
                "Press the moon to go to the main page",
            ], // Text 넣고
            typingSpeed: 200, // typing speed
            erasingSpeed: 100, // erasing speed
            newTextDelay: 1000, // 새로운텍스트 속도
            typeArrayIndex: 0,
            charIndex: 0, //글자 수 늘리기
        };
    },
    methods: {
        typeText() {
            // 현재 텍스트가 없으면 typing
            if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
                if (!this.typeStatus) {
                    this.typeStatus = true;
                }

                this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
                    this.charIndex
                );
                this.charIndex += 1;
                setTimeout(this.typeText, this.typingSpeed);
            } else {
                // 텍스트가 있으면 erasing
                this.typeStatus = false;
                setTimeout(this.eraseText, this.newTextDelay + 1000); // 글 지울 때 딜레이
            }
        },
        eraseText() {
            if (this.charIndex > 0) {
                if (!this.typeStatus) this.typeStatus = true;

                this.typeValue = this.typeArray[this.typeArrayIndex].substring(
                    0,
                    this.charIndex - 1
                );
                this.charIndex -= 1;
                setTimeout(this.eraseText, this.erasingSpeed);
            } else {
                this.typeStatus = false;
                this.typeArrayIndex += 1;
                if (this.typeArrayIndex >= this.typeArray.length)
                    this.typeArrayIndex = 0;

                setTimeout(this.typeText, this.typingSpeed + 500); // 글 쓸때 딜레이
            }
        },
    },
    created() {
        setTimeout(this.typeText, this.newTextDelay + 200);
    },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=Press+Start+2P&display=swap");

.container {
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
h1 {
    font-size: 4rem;
    font-weight: normal;

    span.typed-text {
        font-family: "Orbitron", sans-serif;
        color: #fff;
        font-size: 30px;
    }

    span.cursor {
        // cursor 애니메이션
        display: inline-block;
        margin-left: 3px;
        width: 4px;
        animation: cursorBlink 1s infinite;
    }
    span.cursor.typing {
        // cursor 멈춤
        animation: none;
    }
}
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