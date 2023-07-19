<template>
    <div class="container">
        <custom-cursor></custom-cursor>
        <div class="main">
            <div class="scroll">
                <div id="profile">
                    <div class="title_wrap">
                        <span class="title">Profile</span>
                    </div>
                    <div id="img_wrap">
                        <img src="@/assets/img/profile.png" oncontextmenu="return false" alt="" />
                    </div>
                    <div id="text_wrap">
                        <div id="name">
                            <div class="icons">
                                <i class="fa-solid fa-user"></i>
                            </div>
                            <div>
                                <div>이름</div>
                                <div id="flip">
                                    <div>
                                        <div>任 秀 民</div>
                                    </div>
                                    <div>
                                        <div>Soomin Yim</div>
                                    </div>
                                    <div>
                                        <div>임수민</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-for="(p, i) in profile" :key="i" :id="p.name">
                            <div class="icons">
                                <i :class="p.icon"></i>
                            </div>
                            <div>
                                <div>{{ p.title }}</div>
                                <div>{{ p.content }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content">
                    <p style="font-weight: bold">
                        안녕하세요.<br />
                        `빼어난 백성` 프론드엔드 개발자 임수민입니다.
                    </p>
                    <span>
                        개성있는 웹을 만드는 것을 좋아하며 spa 방식의 개인
                        프로젝트들을 진행하고 있습니다. 주로 Vue를 사용하여
                        개발을 합니다. HTML, CSS와 JS 또한 국비지원 과정을 통해
                        배웠지만, 개인 프로젝트를 진행하며 더욱 심화하여
                        배워나가고 있는 주니어 개발자입니다. 시작이 늦은만큼
                        마음이 앞서지만 급할수록 돌아가야 하기에 욕심내지 않으며
                        기초부터 탄탄하게 배우고 있습니다. 아직 배울 것이 많은
                        개발자이지만, 최선을 다해 노력하고 프로젝트에 몰입하는
                        개발자입니다. 이름의 뜻대로 빼어난 백성이 되어 주어지는
                        업무에 책임감을 가지고 임하며 매사에 적극적인 프론트엔드
                        개발자가 되는것이 저의 목표이자 꿈입니다.
                    </span>
                </div>
                <div class="skill">
                    <div class="title_wrap">
                        <span class="title">Skills</span>
                    </div>
                    <div class="skill_logo">
                        <div id="front_wrap">
                            <div>FRONT-END</div>
                            <div>
                                <img v-for="(f, i) in frontLogos" :key="i" :src="f.src" alt="" />
                            </div>
                        </div>
                        <div id="back_wrap">
                            <div>BACK-END</div>
                            <div>
                                <img v-for="(b, i) in backLogos" :key="i" :src="b.src" art="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <blog-footer></blog-footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomCursor from "@/components/CustomCursor.vue";
import BlogFooter from "@/components/BlogFooter.vue";

export default {
    name: "BlogProfile",
    components: {
        CustomCursor,
        BlogFooter,
    },
    data() {
        return {
            profile: [
                {
                    name: "birth",
                    icon: "fa-solid fa-calendar",
                    title: "생일",
                    content: "1996.06.01",
                },
                {
                    name: "address",
                    icon: "fa-solid fa-location-dot",
                    title: "거주지",
                    content: "경기도 광주시",
                },
                {
                    name: "phone",
                    icon: "fa-solid fa-mobile-screen-button",
                    title: "연락처",
                    content: "010-6242-6431",
                },
                {
                    name: "email",
                    icon: "fa-solid fa-envelope",
                    title: "이메일",
                    content: "soo15soo@kakao.com",
                },
            ],
            frontLogos: [
                {
                    name: "html",
                    src: require("@/assets/logo/html.png"),
                },
                {
                    name: "css",
                    src: require("@/assets/logo/css.png"),
                },
                {
                    name: "js",
                    src: require("@/assets/logo/js.png"),
                },
                {
                    name: "jquery",
                    src: require("@/assets/logo/jquery.png"),
                },
                {
                    name: "vue",
                    src: require("@/assets/logo/vue.png"),
                },
                {
                    name: "sass",
                    src: require("@/assets/logo/sass.png"),
                },
            ],
            backLogos: [
                {
                    name: "java",
                    src: require("@/assets/logo/java.png"),
                },
                {
                    name: "spring",
                    src: require("@/assets/logo/spring.png"),
                },
                {
                    name: "mysql",
                    src: require("@/assets/logo/mysql.png"),
                },
                {
                    name: "jsp",
                    src: require("@/assets/logo/jsp.png"),
                },
                {
                    name: "node",
                    src: require("@/assets/logo/node.png"),
                },
                {
                    name: "tomcat",
                    src: require("@/assets/logo/tomcat.png"),
                },
            ],
        };
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bevan&display=swap");
@import "@/assets/scss/utils.scss";
@import "@/assets/font.css";

.container {
    font-family: "Noto Sans KR";
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    z-index: 3;
    background: #f1f1f1;
}

.main {
    width: 100%;
    height: 100%;
    z-index: 2;

    .scroll {
        box-sizing: border-box;
        height: 100vh;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    ::-webkit-scrollbar {
        display: block;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 50px;
        width: 0.5em;
    }

    ::-webkit-scrollbar-thumb {
        display: block;
        background-color: rgba(0, 0, 0, 1);
        border-radius: 50px;

        &:active {
            background: red;
        }
    }
}

.title {
    font-size: 60px;
    font-weight: 400;
    font-family: "GongGothicBold";
}

#profile {
    @include mobile {
        padding: 0;
    }

    @include tablet {
        padding: 0 100px;
    }

    box-sizing: border-box;
    padding: 0 250px;

    #img_wrap {
        margin-top: 50px;

        img {
            width: 200px;
        }
    }

    .title_wrap {
        box-sizing: border-box;
        padding-top: 50px;
    }

    #text_wrap {
        box-sizing: border-box;
        color: #000;
        font-size: 25px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        text-align: left;
        margin-top: 50px;

        .icons {
            font-size: 40px;
            margin-right: 10px;
            color: #000;
        }

        &>div {
            display: flex;
            justify-content: center;
            flex-direction: row;
            margin: 0 auto 30px auto;
            font-weight: 400;
        }

        div {
            div {
                div:nth-child(1) {
                    font-family: BMJUA;
                }

                div:nth-child(2) {
                    font-family: EarlyFontDiary;
                    margin-top: 5px;
                    font-size: 15px;
                }
            }
        }

        #name {
            div {
                #flip {
                    height: 30px;
                    overflow: hidden;

                    div:first-child {
                        animation: name_show 15s linear infinite;
                    }

                    div {
                        font-family: EarlyFontDiary;
                        font-size: 15px;

                        div {
                            height: 30px;
                            margin-bottom: 30px;
                            display: inline-block;
                        }
                    }
                }
            }
        }
    }
}

#content {
    font-family: "Noto Sans KR";
    padding: 100px 25%;

    p {
        padding-bottom: 40px;
        font-size: 40px;
        line-height: 50px;
    }

    span {
        font-size: 24px;
        line-height: 60px;
    }

    @include tablet {
        padding: 30px 15%;

        p {
            font-size: 25px;
        }

        span {
            font-size: 20px;
            line-height: 40px;
        }
    }

    @include mobile {
        padding: 30px 5%;

        p {
            font-size: 22px;
        }

        span {
            display: block;
            font-size: 16px;
            line-height: 30px;
        }
    }
}

.skill {
    box-sizing: border-box;
    padding: 20px 80px 80px 80px;
    text-align: center;

    @include mobile {
        padding: 20px 30px 30px 80x;
    }

    .title_wrap {
        margin-bottom: 50px;
    }

    .skill_logo {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        #front_wrap,
        #back_wrap {
            text-align: center;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            width: 600px;
            padding: 50px;
            margin: 20px;
            box-shadow: 0 0.3rem 0.6rem rgb(0 0 0 / 40%);
            border-radius: 20px;

            div:nth-child(1) {
                margin-bottom: 50px;
                font-size: 30px;
                font-weight: 400;
                font-family: "GongGothicBold";
            }

            div:nth-child(2) {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;

                img {
                    padding: 3px;
                    border-radius: 11px;
                    margin: 20px;
                    height: 100px;
                    width: 100px;
                    box-shadow: 0 0.3rem 0.6rem rgb(0 0 0 / 20%);
                }

                @include mobile {
                    img {
                        padding: 3px;
                        border-radius: 11px;
                        margin: 10px;
                        height: 70px;
                        width: 70px;
                        box-shadow: 0 0.3rem 0.6rem rgb(0 0 0 / 20%);
                    }
                }
            }
        }
    }
}

.footer {
    box-sizing: border-box;
    background: #333;
    height: 200px;
    padding: 50px;
}

@keyframes name_show {
    0% {
        margin-top: -300px;
    }

    5% {
        margin-top: -125px;
    }

    33% {
        margin-top: -125px;
    }

    38% {
        margin-top: -65px;
    }

    66% {
        margin-top: -65px;
    }

    71% {
        margin-top: 1px;
    }

    99.99% {
        margin-top: 1px;
    }

    100% {
        margin-top: -300px;
    }
}</style>