<template>
    <div class="container">
        <custom-cursor></custom-cursor>
        <div class="main">
            <div class="scrolle">
                <div id="profile">
                    <div class="title_wrap">
                        <span class="title">Profile</span>
                    </div>
                    <div id="img_wrap">
                        <img
                            src="@/assets/img/profile.png"
                            oncontextmenu="return false"
                            alt=""
                        />
                    </div>
                    <div id="text_wrap">
                        <div id="name">
                            <div class="icons">
                                <i class="fa-solid fa-user"></i>
                            </div>
                            <div>
                                <div>이름</div>
                                <div id="flip">
                                    <div><div>任 秀 民</div></div>
                                    <div><div>Soomin Yim</div></div>
                                    <div><div>임수민</div></div>
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
                        저는 야외활동을 하는 것 보다 집에 혼자 있는것을
                        좋아합니다. 그래서 디지털이라는 세상을 많이 마주하고
                        있습니다. 그 세상 속에서 살아갈 수 있는 공간을
                        제공해주며 꾸준히 발전해나가는 웹사이트를 보며
                        사용자에게 편리함과 아름다움을 줄 수 있는 모습에 큰
                        매력을 느껴 Front-end 에 발을 내딛게 되었습니다.<br /><br />

                        웹개발에 비전을 가지기위해 퇴사 후 국비 지원교육으로
                        6개월간 Front-end 과정을 거쳤습니다. 홈페이지 설계를
                        위한 html5, css3에 대한 기본 개념과 코딩 방법과 웹 표준
                        기술을 습득하고, 동적인 홈페이지를 만들기 위해 ECMA6을
                        중심으로 Javascript, jQuery 기초 문법을 다져 나갔습니다.
                        Spring기반의 프로젝트를 진행했고 툴은 Eclips , 서버는
                        Tomcat 을 사용했으며 JSP기반으로 EL, JSTL문법을 사용하여
                        웹페이지의 구조를 만들었습니다. MVC패턴을 활용하여
                        로그인, 회원가입, 게시판을 구현했고, MySql을 사용하면서
                        MyBatis를 활용해 XML을 사용하여 SQL문을 간편하게
                        작성한뒤 회원 관리, 게시판 관리가 가능한 페이지를
                        구현했습니다.<br /><br />

                        Project를 진행하며 오류 발생 시의 해결 능력이 부족해서
                        간단한 오타로 인한 오류를 잡아내기 힘들었지만, 과정을
                        거치면서 오류의 종류들, 오류 해결 방법과 활용능력을
                        배워나갔습니다. 하루 12시간 이상 코딩을 하고, 많은
                        내용을 머릿속에 담기에 체력적으로 힘들었지만 기능구현을
                        했을때에 뿌듯함을 느끼며, 아직 배울 것이 많다는 것에
                        감사하며 이전의 저와 비교하며 하루하루 성장하는 제
                        모습에 웹 개발에 성장을 확인할 수 있었습니다. 과정 수료
                        후 더 나은 개발을 위해 Front-end Framework 중 러닝
                        커브가 낮은 Vue.js를 위주로 배워나가고 있습니다.<br /><br />

                        시작이 늦은만큼 마음이 앞서지만 급할수록 돌아가야 하기에
                        욕심내지 않으며 기초부터 탄탄하게 배우고 있습니다.
                        이름의 뜻대로 빼어난 백성이 되어 맡은 업무에 책임감을
                        가지고 임하며 매사에 적극적인 프론트엔드 개발자가
                        되는것이 저의 목표이자 꿈입니다.
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
                                <img
                                    v-for="(f, i) in frontLogos"
                                    :key="i"
                                    :src="f.src"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div id="back_wrap">
                            <div>BACK-END</div>
                            <div>
                                <img
                                    v-for="(b, i) in backLogos"
                                    :key="i"
                                    :src="b.src"
                                    art=""
                                />
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
    .scrolle {
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
        & > div {
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
        font-size: 30px;
        line-height: 50px;
    }
    span {
        font-size: 18px;
        line-height: 60px;
    }
    @include tablet {
        padding: 30px 20%;
        p {
            font-size: 25px;
        }
        span {
            font-size: 16px;
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
            font-size: 14px;
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
}
</style>