<template>
    <div>
        <a href="" title="git_hub" class="sns">
            <i class="fa-brands fa-github"></i>
        </a>
        <a href="" title="instagram" class="sns">
            <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="" title="facebook" class="sns">
            <i class="fa-brands fa-facebook"></i
        ></a>
        <span>© 2022. S-o-o-Min . All rights reserved.</span>
    </div>
</template>

<script>
export default {
    name: "BlogFooter",
};
</script>

<style lang="scss" scoped>
div {
    .sns {
        color: #fff;
        font-size: 40px;
        padding: 10px;
        &:hover {
            color: #888;
        }
        transition: all 0.5s ease;
    }
    span {
        font-size: 14px;
        display: block;
        margin-top: 30px;
        color: #fff;
    }
}
</style>