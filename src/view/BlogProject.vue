<template>
    <div class="container" @click="goBack">
        <div class="wrap">
            <div class="scrolle">
                <h4>{{ blogs[$route.params.id].title }}</h4>
                <h4>{{ blogs[$route.params.id].content }}</h4>
                <h4 v-html="project"></h4>
                <br />
                <br />
                <br />
                <a :href="blogs[$route.params.id].gitUrl" target="_blank">view code</a>
                <a v-if="blogs[$route.params.id].url !== null" :href="blogs[$route.params.id].url"
                    target="_blank">preview</a>
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
    computed: {
        project() {
            const blog = this.blogs[this.$route.params.id];
            if (blog && blog.project) {
                return blog.project.split('\n').join('<br/>');
            }
            return '';
        }
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