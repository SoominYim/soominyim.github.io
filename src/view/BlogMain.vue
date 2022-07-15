<template>
    <div>
        <div class="star">
            <div class="content_wrap">
                <router-link to="/home" id="goHome_wrap" class="item_wrap">
                    <div id="goHome"></div>
                </router-link>
                <router-link
                    to="/profile"
                    id="goProfile_wrap"
                    class="item_wrap"
                >
                    <div id="goProfile"></div>
                </router-link>
                <router-link to="/list" id="goList_wrap" class="item_wrap">
                    <div id="goList"></div>
                </router-link>
                <router-link to="/" id="d_wrap" class="item_wrap">
                    <div id="d"></div>
                </router-link>
                <router-link to="/" id="e_wrap" class="item_wrap">
                    <div id="e"></div>
                </router-link>
                <router-link to="/" id="f_wrap" class="item_wrap">
                    <div id="f"></div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogMain",
    components: {},

    LogoStarprops: {
        blogs: Array,
    },
};
</script>

<style lang="scss" scoped>
.star {
    position: absolute;
    top: 100px;
    left: 300px;
    width: calc(90px * 3);
    height: calc(90px * 1.732 * 2);
    align-items: center;
    align-content: center;
    text-align: center;
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
            transition: all 0.3s;
        }
        div::after {
            content: "";
            position: absolute;
            top: calc(45px * 1.732);
            left: -45px;
            width: 0px;
            height: 0px;
            border-left: 45px solid transparent;
            border-right: 45px solid transparent;
        }
        div:hover {
            transform: translateY(-50px);
        }
    }
}

#goHome {
    border-bottom: calc(45px * 1.732) solid red;
}

#goHome::after {
    border-top: calc(45px * 1.732) solid red;
}

#goProfile_wrap {
    transform: rotate(60deg);
}

#goProfile {
    border-bottom: calc(45px * 1.732) solid blue;
}

#goProfile::after {
    border-top: calc(45px * 1.732) solid blue;
}

#goList_wrap {
    transform: rotate(120deg);
}

#goList {
    border-bottom: calc(45px * 1.732) solid green;
}

#goList::after {
    border-top: calc(45px * 1.732) solid green;
}

#d_wrap {
    transform: rotate(180deg);
}

#d {
    border-bottom: calc(45px * 1.732) solid palevioletred;
}

#d::after {
    border-top: calc(45px * 1.732) solid palevioletred;
}

#e_wrap {
    transform: rotate(240deg);
}

#e {
    border-bottom: calc(45px * 1.732) solid tomato;
}

#e::after {
    border-top: calc(45px * 1.732) solid tomato;
}

#f_wrap {
    transform: rotate(300deg);
}

#f {
    border-bottom: calc(45px * 1.732) solid aqua;
}

#f::after {
    border-top: calc(45px * 1.732) solid aqua;
}

.star {
    animation: rotate_star 70s linear infinite;
}

@keyframes rotate_star {
    100% {
        transform: rotate(360deg);
    }
}
</style>