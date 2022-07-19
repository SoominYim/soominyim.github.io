<template>
    <div id="stars-container">
        <div class="stars"></div>
        <div class="stars1"></div>
        <div class="stars2"></div>
    </div>
</template>

<script>
export default {
    name: "PartiCles",
    mounted() {},
};
</script>

<style lang="scss" scoped>
$starFieldWidth: 2560;
$starFieldHeight: 2560;
$starStartOffset: 600px;
$starOneScrollDuration: 400s;
$starTwoScrollDuration: 700s;
$starThreeScrollDuration: 900s;
$numStarOneStars: 1700;
$numStarTwoStars: 300;
$numStarThreeStars: 200;
$numShootingStars: 10;

@function create-stars($n) {
    $stars: "#{random($starFieldWidth)}px #{random($starFieldHeight)}px #fff";

    @for $i from 2 through $n {
        $stars: "#{$stars} , #{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF";
    }
    @return unquote($stars);
}

@mixin translate50 {
    -webkit-transform: translate(-50, -50%);
    -ms-transform: translate(-50, -50%);
    -o-transform: translate(-50, -50%);
    transform: translate(-50, -50%);
}

@mixin star-template($numStars, $starSize, $scrollSpeed) {
    z-index: 10;
    width: $starSize;
    height: $starSize;
    border-radius: 50%;
    background: transparent;
    box-shadow: create-stars($numStars);
    animation: animStar $scrollSpeed linear infinite;
    &:after {
        content: " ";
        top: -$starStartOffset;
        width: $starSize;
        height: $starSize;
        border-radius: 50%;
        position: absolute;
        background: transparent;
        box-shadow: create-stars($numStars);
    }
}
#stars-container {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 0;
    @include translate50;
}
.stars {
    @include star-template($numStarOneStars, 1px, $starOneScrollDuration);
}
.stars1 {
    @include star-template($numStarTwoStars, 1.5px, $starTwoScrollDuration);
}
.stars2 {
    @include star-template($numStarThreeStars, 2px, $starThreeScrollDuration);
}

@keyframes animStar {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(-#{$starFieldHeight}px)
            translateX(-#{$starFieldWidth}px);
    }
}
@keyframes 깜빡 {
    10% {
        opacity: 1;
    }
    40% {
        opacity: 0.2;
    }
    70% {
        opacity: 0.7;
    }
    100% {
        opacity: 1;
    }
}
</style>