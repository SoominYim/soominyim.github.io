<template>
    <div>
        <a href="https://github.com/SoominYim" title="git_hub" class="sns" target="blank">
            <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.instagram.com/_soo_min_/" title="instagram" class="sns" target="blank">
            <i class="fa-brands fa-instagram"></i>
        </a>
        <!-- <a href="https://www.threads.net/@_soo_min_" title="threads" class="sns" target="blank">
            <i class="fa-brands fa-facebook"></i>
        </a> -->

        <a href="https://www.facebook.com/profile.php?id=100002681110982" title="facebook" class="sns" target="blank"> <i
                class="fa-brands fa-facebook"></i></a>
        <a href="https://twitter.com/soobbag" title="twitter" class="sns" target="blank"> <i
                class="fa-brands fa-twitter"></i></a>


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
