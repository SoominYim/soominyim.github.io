<template>
    <!-- 프로젝트 세부 정보를 감싸는 컨테이너 -->
    <div class="container" @click="goBack">
        <!-- 정보를 보여주는 wrapper -->
        <div class="wrap">
            <!-- 세부 정보 스크롤 영역 -->
            <div class="scrolle">
                <!-- 프로젝트의 제목을 출력 -->
                <h4>{{ blogs[$route.params.id].title }}</h4>
                <!-- 프로젝트의 내용을 출력 -->
                <h4>{{ blogs[$route.params.id].content }}</h4>
                <!-- 프로젝트와 관련된 내용 출력 (예: 프로젝트 소개) -->
                <h4>{{ blogs[$route.params.id].project }}</h4>
                <br />
                <br />
                <br />
                <!-- 해당 프로젝트의 GitHub 링크를 출력하고 새 탭에서 열도록 설정 -->
                <a :href="blogs[$route.params.id].gitUrl" target="_blank">view code</a>
            </div>
        </div>
    </div>
</template>
 
<script>
export default {
    name: "BlogProject",
    props: {
        blogs: Array,
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
    },
};
</script>

<style scoped>
.container {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    z-index: 2;
}

.wrap {
    margin-top: 110px;
    height: 80vh;
    width: 80vw;
    background: rgba(255, 255, 255, 0.3);
    color: #fff;
    z-index: 1;
}

.scrolle {
    box-sizing: border-box;
    padding: 20px;
    height: 80vh;
    overflow-y: scroll;
    overflow-x: hidden;
}

::-webkit-scrollbar {
    display: block;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50px;
    width: 0.5em;
}

::-webkit-scrollbar-thumb {
    display: block;
    background-color: rgba(0, 0, 0, 1);
    border-radius: 50px;
}
</style>