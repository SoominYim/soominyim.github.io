<template>
    <div class="container">
        <parti-cles></parti-cles>
        <div class="star_wrap">
            <div class="star">
                <div class="content_wrap">
                    <router-link to="/" id="goHome_wrap" class="item_wrap">
                        <div id="goHome">
                            <div>
                                <span>HOME</span>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="/about" id="goAbout_wrap" class="item_wrap">
                        <div id="goAbout">
                            <div>
                                <span>ABOUT</span>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="/list" id="goList_wrap" class="item_wrap">
                        <div id="goList">
                            <div>
                                <span>PROJECT</span>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="/" id="d_wrap" class="item_wrap">
                        <div id="d">
                            <div>
                                <span>GITHUB</span>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="" id="e_wrap" class="item_wrap">
                        <div id="e"></div>
                    </router-link>
                    <router-link to="" id="f_wrap" class="item_wrap">
                        <div id="f"></div>
                    </router-link>
                </div>
            </div>
        </div>
        <code-editor></code-editor>
    </div>
</template>

<script>
import CodeEditor from "@/components/CodeEditor.vue";
import PartiCles from "@/components/PartiCles.vue";
export default {
    name: "BlogMain",
    components: {
        PartiCles,
        CodeEditor,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Press+Start+2P&family=Roboto+Mono&display=swap");

.container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
}

.star_wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    width: 311.75px;
    display: flex;
    justify-content: center;
    transform: translate(-50%, -50%);
    box-shadow: 0 0.3rem 0.6rem rgb(255 255 255 / 20%);

    .star {
        width: calc(90px * 3);
        height: calc(90px * 1.732 * 2);
        align-items: center;
        align-content: center;
        text-align: center;
        animation: rotate_star 70s linear infinite;
    }
}

.content_wrap {
    position: absolute;
    left: 90px;
    width: calc(90px * 3);
    height: calc(90px * 1.732 * 2);

    .item_wrap {
        display: block;
        position: absolute;
        transform-origin: bottom;
        height: calc(90px * 1.732);

        div {
            position: relative;
            width: 0px;
            height: 0px;
            border-left: 45px solid transparent;
            border-right: 45px solid transparent;
            transition: all 0.5s;
            opacity: 0.7;
            -webkit-animation: text-pop-up-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
            animation: text-pop-up-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

            &::after {
                content: "";
                position: absolute;
                top: calc(44.5px * 1.732);
                left: -45px;
                width: 0px;
                height: 0px;
                border-left: 45px solid transparent;
                border-right: 45px solid transparent;
            }

            div {
                box-sizing: border-box;
                position: absolute;
                height: calc(45px * 1.732);
                left: -45px;
                display: flex;
                justify-content: center;
                padding-top: calc(32px * 1.732);

                span {
                    z-index: 5;
                    font-size: 15px;
                    font-weight: bold;
                    font-family: "Roboto Mono", monospace;
                    color: #000;
                    text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
                }
            }
        }
    }
}

.item_wrap>div:hover {
    transform: translateY(-20px);
    opacity: 1;
}

.item_wrap>#e:hover,
#f:hover {
    transform: translateY(-5px);
}

#goHome {
    border-bottom: calc(45px * 1.732) solid #4a5568;

    &::after {
        border-top: calc(45px * 1.732) solid #4a5568;
    }
}

#goAbout_wrap {
    transform: rotate(60deg);
}

#goAbout {
    border-bottom: calc(45px * 1.732) solid #40435c;

    &::after {
        border-top: calc(45px * 1.732) solid rgba(64, 67, 92);
    }
}

#goList_wrap {
    transform: rotate(120deg);
}

#goList {
    border-bottom: calc(45px * 1.732) solid #62657f;

    &::after {
        border-top: calc(45px * 1.732) solid rgb(98, 101, 127);
    }
}

#d_wrap {
    transform: rotate(180deg);
}

#d {
    border-bottom: calc(45px * 1.732) solid rgba(134, 136, 164);

    &::after {
        border-top: calc(45px * 1.732) solid rgba(134, 136, 164);
    }
}

#e_wrap {
    transform: rotate(240deg);
}

#e {
    border-bottom: calc(45px * 1.732) solid rgba(171, 174, 203);

    &::after {
        border-top: calc(45px * 1.732) solid rgba(171, 174, 203);
    }
}

#f_wrap {
    transform: rotate(300deg);
}

#f {
    border-bottom: calc(45px * 1.732) solid rgba(211, 213, 243);

    &::after {
        border-top: calc(45px * 1.732) solid rgba(211, 213, 243);
    }
}

@keyframes rotate_star {
    100% {
        transform: rotate(360deg);
    }
}
</style>
