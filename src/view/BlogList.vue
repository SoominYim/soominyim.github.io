<template>
    <div class="container">
        <parti-cles></parti-cles>
        <div class="wrap">
            <div class="card_wrap" v-for="(blog, i) in blogs" :key="i" @click="$router.push('/list/' + i)">
                <div class="card">
                    <div>{{ blog.title }}</div>
                    <div>{{ blog.project }}</div>
                </div>
                <div class="cardImg">
                    <img :src="blog.image" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PartiCles from "@/components/PartiCles.vue";

export default {
    name: "BlogList",
    components: {
        PartiCles,
    },
    props: {
        blogs: Array,
    },
    data() {
        return {
            // ctx: null,
            // mid: null,
            // dots: [],
            // target: [],
            // maxForce: 0.1247,
        };
    }, methods: {
        // // 벡터 미니 라이브러리
        // Vector(x, y) {
        //     return { x, y };
        // },
        // add(vector1, vector2) {
        //     return { x: vector1.x + vector2.x, y: vector1.y + vector2.y };
        // },
        // sub(vector1, vector2) {
        //     return { x: vector1.x - vector2.x, y: vector1.y - vector2.y };
        // },
        // mult(vector, n) {
        //     return { x: vector.x * n, y: vector.y * n };
        // },
        // norm(vector) {
        //     return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
        // },
        // move(vector, delta) {
        //     // 만약 파티클이 중심점에서 190 이상 떨어진 위치로 이동하면 반대 방향으로 이동하도록 설정
        //     if (this.dist(vector.x + delta.x, vector.y + delta.y, this.mid.x, this.mid.y) > 190) {
        //         return this.mult(delta, -0.43);
        //     }
        //     return this.add(vector, delta);
        // },
        // // 나머지 함수들 (dist, seek, behave, rand)은 아래에서 정의하겠습니다.
        // // (간결함을 위해 생략되었습니다.)

        // init() {
        //     let dot;

        //     // 모든 파티클들을 생성합니다.
        //     for (let i = 0; i < 14000; i++) {
        //         dot = this.Dot(this.mid.x, this.mid.y);
        //         this.dots.push(dot);
        //     }

        //     // 그리고 그들의 목표를 설정합니다.
        //     for (let i = 0; i < 7; i++) {
        //         dot = this.Vector(this.mid.x, this.mid.y);
        //         this.target.push(dot);
        //     }
        // },
        // setup() {
        //     const canvas = document.querySelector('#c');

        //     canvas.width = 450;
        //     canvas.height = 450;

        //     this.ctx = canvas.getContext('2d');
        //     this.ctx.fillStyle = 'rgb(100, 23, 255)';

        //     this.mid = this.Vector(canvas.width / 2, canvas.height / 2);
        // },
        // draw() {
        //     let dot;

        //     // 이전 프레임을 지웁니다.
        //     this.ctx.clearRect(0, 0, 2 * this.mid.x, 2 * this.mid.y);

        //     this.ctx.beginPath();

        //     // 각 목표마다:
        //     for (let i = 0; i < this.target.length; i++) {
        //         // 그 목표를 따라갈 파티클들의 집합을 가져옵니다.
        //         for (
        //             let j = Math.floor((i * this.dots.length) / this.target.length);
        //             j < Math.floor(((i + 1) * this.dots.length) / this.target.length);
        //             j++
        //         ) {
        //             // 마법같은 작업들을 수행합니다.
        //             dot = this.dots[j];
        //             this.behave(dot, this.target[i]);
        //             this.update(dot);

        //             this.ctx.rect(dot.pos.x, dot.pos.y, 1, 1);
        //         }

        //         // 목표를 주어진 범위 내에서 랜덤하게 이동합니다.
        //         this.target[i] = this.move(
        //             this.target[i],
        //             this.Vector(Math.floor(50 * this.rand()), Math.floor(50 * this.rand()))
        //         );
        //     }

        //     // 캔버스에 모든 것을 한꺼번에 그립니다.
        //     this.ctx.fill();
        //     // 태양이 끝날 때까지 반복합니다.
        //     requestAnimationFrame(this.draw);
        // },
    },
    mounted() {
        // this.setup();
        // this.init();
        // requestAnimationFrame(this.draw);
    },
};
</script>

<style lang="scss" scoped>
.container {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;

    .wrap {
        display: flex;
        flex-wrap: wrap;
        padding: 100px;
        justify-content: space-around;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    z-index: 20;
}

::-webkit-scrollbar {
    display: block;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50px;
    width: 0.5em;
}

::-webkit-scrollbar-thumb {
    display: block;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 50px;
}

.card_wrap {
    position: relative;
    display: flex;
    width: 600px;
    height: 300px;
    margin-top: 20px;
}

.card_wrap:hover {
    .cardImg {
        transform: translateX(200px) rotate(360deg);
    }
}

.card {
    display: flex;
    box-sizing: border-box;
    position: relative;
    width: 300px;
    height: 300px;
    padding: 20px;
    border-radius: 50%;
    flex-direction: column;
    z-index: 10;
    color: white;
    background-color: #5f6d9f;
}


.cardImg {
    position: absolute;
    left: 50px;
    height: 300px;
    background: white;
    border-radius: 50%;
    transition: all ease 2s;

    img {
        border-radius: 50%;
        box-sizing: border-box;
        height: 300px;
        width: 300px;
        object-fit: contain;
    }
}

@keyframes moveGradient {
    50% {
        background-position: 100% 50%;
    }
}

@media (max-height: 600px) {
    .container {
        display: block;
        padding-left: 150px;

        .wrap {
            grid-template-rows: repeat(0, 500px);
            grid-template-columns: repeat(8, 400px);
            place-items: center;
        }
    }

    .card_wrap {
        width: 400px;
        height: 200px;
    }

    .card {
        width: 200px;
        height: 200px;
    }
}
</style>