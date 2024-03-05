<template>
  <div class="container">
    <div class="wrap">
      <div class="card_wrap" v-for="(blog, i) in blogs" :key="i" @click="$router.push('/list/' + i)">
        <div class="cardImg">
          <img :src="blog.image" alt="" />
        </div>
        <div class="card">
          <div class="null"></div>
          <div>
            <br />
            {{ blog.title }}
            <br />
            {{ blog.content }},
            <br />
            skills
            <br />
            <v-html> {{ blog.project }} </v-html>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogList",
  components: {},
  props: {
    blogs: Array,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils.scss";

.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;

  .wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 100px;
    justify-content: space-around;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  z-index: 20;
}

::-webkit-scrollbar {
  display: block;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  width: 0.5em;
}

::-webkit-scrollbar-thumb {
  display: block;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50px;
}

.card_wrap {
  position: relative;
  display: flex;
  width: 600px;
  height: 300px;
  margin: 50px 0 70px 0;
}

.card {
  position: absolute;
  display: flex;
  flex-direction: row;
  left: 60px;
  width: 500px;
  height: 300px;
  border-radius: 20px;
  box-shadow: 0px 10px 15px -3px rgba(255, 255, 255, 0.1), 0px 10px 15px -3px rgba(255, 255, 255, 0.1),
    0px 10px 15px -3px rgba(255, 255, 255, 0.1);
  line-height: 2.2;
  color: #fff;
  div {
    width: 50%;
    padding-top: 40px;
    padding-right: 40px;
  }
}
.cardImg {
  position: absolute;
  border-radius: 20px;
  z-index: 10;
  top: calc(50% - 200px / 2);
  left: 0;
  display: flex;
  box-sizing: border-box;
  height: 200px;
  box-shadow: 0 15px 25px rgba(255, 255, 255, 0.6);

  img {
    background-size: contain;
    border-radius: 20px;
    box-sizing: border-box;
    height: 200px;
    width: 250px;
  }
}
@include mobile {
  .container {
    .wrap {
      padding: 50px 0px 50px 10px;
      grid-template-rows: repeat(0, 500px);
      grid-template-columns: repeat(8, 400px);
    }
  }
  .card_wrap {
    width: 90%;
    height: 260px;
    margin: 50px 0 10px 0;
    border-bottom: #a7a7a7 2px solid;
  }
  .card {
    position: relative;
    left: 0;
    width: 50%;
    height: 200px;
    border-radius: 0;
    color: #fff;
    background: none;
    box-shadow: none;
    line-height: 1.8;
    text-align: left;

    div {
      width: 100%;
      padding-left: 10px;
      padding-top: 0;
      padding-right: 0;
      font-size: 9px;
    }
    .null {
      width: 0;
    }
  }

  .cardImg {
    position: relative;
    top: 20px;
    left: 0;
    height: 200px;
    width: 50%;
    box-shadow: none;
    img {
      border-radius: 0;
      height: 90%;
      width: 100%;
      border-radius: 20px;
    }
  }
  .card_wrap:hover {
    .cardImg {
      transform: none;
    }
  }
}

@keyframes moveGradient {
  50% {
    background-position: 100% 50%;
  }
}
</style>
