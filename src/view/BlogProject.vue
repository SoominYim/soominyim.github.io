<template>
  <div>
    <div class="container" @click="goBack"></div>
    <div class="wrap">
      <div class="scrolle" style="line-height: 4.1">
        <div class="title">{{ blogs[$route.params.id].title }}</div>
        <h2>{{ blogs[$route.params.id].content }}</h2>
        <div style="margin-right: 30px; font-size: 30px">🔗 SKILLS</div>
        <div class="skill-box">
          <div v-for="(skill, i) in project.split(',')" :key="i" class="skill">
            <p>{{ skill.trim() }}</p>
          </div>
        </div>
        <div class="content" v-html="contents"></div>
        <div class="btn-wrapper">
          <div class="btn-wrapper__container">
            <div class="btn-inner">
              <a class="btn-inner__text" :href="blogs[$route.params.id].gitUrl" target="_blank">view code</a>
            </div>
          </div>
        </div>
        <div class="btn-wrapper" v-if="blogs[$route.params.id].url !== null">
          <div class="btn-wrapper__container">
            <div class="btn-inner">
              <a class="btn-inner__text" :href="blogs[$route.params.id].url" target="_blank">preview</a>
            </div>
          </div>
        </div>
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
        return blog.project.split("\n").join("<br/>");
      }
      return "";
    },
    contents() {
      const blog = this.blogs[this.$route.params.id];
      if (blog && blog.contents) {
        return blog.contents.split("\n").join("<br/>");
      }
      return "";
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils.scss";
$blue: #5ac093;
$btn-bg: #10131c;

.container {
  height: 100vh;
  width: 100vw;
  z-index: 1;
}
hr {
  width: 80%;
  height: 2px;
  background-color: #777;
  border: 0;
}

.title {
  position: relative;
  top: -29px;
  left: -10px;
  width: 105.4%;
  line-height: 3;
  font-size: 32px;
  background-color: #777;
  border-top-left-radius: 20px;
  font-family: "KIMM_Bold";
  font-weight: 700;
}

h2 {
  line-height: 1.5;
  font-size: 28px;
  font-family: "KIMM_Bold";
  font-weight: 300;
}

.skill-box {
  position: relative;
  left: calc(50% - 90% / 2);
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  line-height: 3.3;
  @include mobile {
    gap: 5px;
  }
}

.skill {
  padding: 0 8px;
  height: 24px;
  line-height: 2.3;
  border: 2px solid rgba(32, 251, 182, 0.3);
  border-radius: 5px;
  font-size: 12px;
  font-family: "GangwonEdu_OTFBoldA";
}
.content {
  position: relative;
  left: calc(50% - 70% / 2);
  width: 70%;
  text-align: left;
  word-break: keep-all;
  @include mobile {
    left: calc(50% - 90% / 2);
    width: 90%;
  }
  font-family: "HANAMDAUM";
}

.wrap {
  position: absolute;
  top: 60px;
  left: calc(50% - 70% / 2);
  height: 90%;
  width: 70%;
  border-radius: 20px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  background: rgba(100, 100, 100, 0.2);

  color: #fff;
  z-index: 3;
  line-height: 5vw;
}

.scrolle {
  box-sizing: border-box;
  padding: 30px 10px 10px 10px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

@include mobile {
  .wrap {
    position: absolute;
    top: 80px;
    left: calc(50% - 95vw / 2);
    height: 85%;
    width: 95vw;
  }
  .scrolle {
    height: 100%;
  }
}

@include tablet {
  .wrap {
    position: absolute;
    top: 80px;
    left: calc(50% - 95vw / 2);
    height: 85%;
    width: 95vw;
  }
  .scrolle {
    height: 100%;
  }
}

::-webkit-scrollbar {
  display: block;
  background-color: rgba(32, 251, 182, 0.3);
  border-radius: 50px;
  width: 0.5em;
}
::-webkit-scrollbar-thumb {
  display: block;
  background-color: rgba(90, 192, 147, 0.7);
  border-radius: 50px;
}

a {
  color: #fff;
  display: block;
  font-size: 30px;
}

.img_wrap {
  width: 200px !important;
}

/* BUTTON START */
// Variables

.btn-wrapper {
  width: 290px;
  height: 110px;
  position: relative;
  margin: 40px auto 0;

  &:hover {
    .btn-inner {
      top: -4px;
      transform: scale(1, 1);
      cursor: pointer;
    }
  }

  &__container {
    border-bottom: 2px solid $blue;
    position: absolute;
    width: 100%;
    height: 80px;

    &:before,
    &:after {
      border-bottom: 2px solid $blue;
      width: 96%;
      left: 2%;
      bottom: -8px;
      content: "";
      position: absolute;
    }

    &:after {
      width: 92%;
      left: 4%;
      bottom: -14px;
    }

    .btn-inner {
      width: 104.2%;
      height: 100%;
      position: absolute;
      top: 20px;
      left: -2.1%;
      border: 2px solid $blue;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Source Code Pro", monospace;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 18px;
      background: $btn-bg;
      transform: scale(0.96, 0.96);
      transition: all 0.3s;
      z-index: 4;

      &__text {
        text-decoration: none;
        color: $blue;
      }
    }
  }
}

/* BUTTON END */
</style>
