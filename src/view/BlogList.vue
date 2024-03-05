<template>
  <div class="container">
    <div class="wrap">
      <div class="card_wrap" v-for="(blog, i) in blogs" :key="i" @click="$router.push('/list/' + i)">
        <div class="card">
          {{ blog.title }}
          <br />
          {{ blog.content }}
        </div>
        <div class="cardImg">
          <img :src="blog.image" alt="" />
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

.card_wrap:hover {
  .cardImg {
    transform: translateX(50px) rotate(360deg);
  }
}

.card {
  display: flex;
  box-sizing: border-box;
  position: relative;
  width: 300px;
  height: 300px;
  padding: 20px;
  border-radius: 50%;
  flex-direction: column;
  z-index: 10;
  background-color: #a7a7a7;
  box-shadow: 0px 10px 15px -3px rgba(255, 255, 255, 0.1), 0px 10px 15px -3px rgba(255, 255, 255, 0.1),
    0px 10px 15px -3px rgba(255, 255, 255, 0.1);
  color: #000;
}

.cardImg {
  position: absolute;
  left: 200px;
  height: 300px;
  background: white;
  border-radius: 50%;
  transition: all ease 2s;

  img {
    border-radius: 50%;
    box-sizing: border-box;
    height: 300px;
    width: 300px;
    object-fit: contain;
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
    height: 250px;
    margin: 50px 0 10px 0;
    border-bottom: #a7a7a7 2px solid;
  }
  .card {
    width: 50%;
    height: 200px;
    border-radius: 0;
  }

  .cardImg {
    position: relative;
    left: 0;
    height: 200px;
    border-radius: 0;
    width: 50%;

    img {
      border-radius: 0;
      height: 200px;
      width: 100%;
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
