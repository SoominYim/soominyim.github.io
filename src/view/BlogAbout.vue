<template>
    <div class="container">
        <custom-cursor></custom-cursor>
        <div class="container_wrap">
            <div class="scrolle">
                <div id="profile">
                    <div class="title_wrap">
                        <span class="title">About Me</span>
                    </div>
                    <div id="img_wrap">
                        <img src="@/assets/img/profile.png" alt="" />
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
                        <div id="birth">
                            <div class="icons">
                                <i class="fa-solid fa-calendar"></i>
                            </div>
                            <div>
                                <div>생년월일</div>
                                <div>1996.06.01</div>
                            </div>
                        </div>
                        <div id="address">
                            <div class="icons">
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <div>
                                <div>거주지</div>
                                <div>경기도 광주시</div>
                            </div>
                        </div>
                        <div id="phone">
                            <div class="icons">
                                <i class="fa-solid fa-mobile-screen-button"></i>
                            </div>
                            <div>
                                <div>연락처</div>
                                <div>010-6242-6431</div>
                            </div>
                        </div>
                        <div id="email">
                            <div class="icons">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div>
                                <div>이메일</div>
                                <div>soo15soo@kakao.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content"></div>
                <div class="skill">
                    <div class="title_wrap">
                        <span class="title">Skills</span>
                    </div>
                    <!-- <div class="icon_wrap">
                            <div
                                v-for="(skill, i) in skills"
                                :key="i"
                                class="icons"
                                :class="skill.name"
                            >
                                <img
                                    :src="skill.src"
                                    alt=""
                                    class="no-border"
                                />
                            </div>
                        </div> -->
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
    props: {},
    components: {
        CustomCursor,
        BlogFooter,
    },
    data() {
        return {
            config: {
                statusBarSelector: ".status__bar",
                minPageHeight: "150vh",
            },
        };
    },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bevan&display=swap");
@import "@/assets/scss/utils.scss";
@import "@/assets/font.css";

.container {
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    z-index: 2;
}
.container_wrap {
    width: 100%;
    height: 100%;
    z-index: 1;
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
.title_wrap {
    box-sizing: border-box;
    padding-top: 50px;
}
.title {
    color: #fff;
    font-size: 80px;
    font-weight: 400;
    font-family: "GongGothicBold";
    border-bottom: solid 1px #fff;
}
#profile {
    box-sizing: border-box;
    background: rgba(20, 34, 52);
    #img_wrap {
        margin-top: 50px;
        img {
            width: 200px;
        }
    }
    #text_wrap {
        box-sizing: border-box;
        color: #fff;
        font-size: 25px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        text-align: left;
        margin-top: 50px;
        .icons {
            font-size: 40px;
            margin-right: 10px;
        }
        & > div {
            display: flex;
            justify-content: center;
            flex-direction: row;
            margin: 0 auto 30px auto;
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
                        animation: show 15s linear infinite;
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
    height: 1000px;
    background: tomato;
}
.skill {
    height: 1000px;
    background: rgba(033, 32, 211);
}

.icons {
    width: 50px;
    height: 50px;
    margin: 0;
    padding: 0;
    color: #f9f1e9;
    text-align: center;
    top: 40%;
    left: 50%;
}

.footer {
    box-sizing: border-box;
    background: #333;
    height: 200px;
    padding: 50px;
}
@keyframes show {
    0% {
        margin-top: -270px;
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
        margin-top: 0px;
    }
    99.99% {
        margin-top: 0px;
    }
    100% {
        margin-top: -270px;
    }
}
</style>