<template>
  <div class="container">
    <div class="wrap">
      <div class="card_wrap" v-for="(project, i) in projects" :key="i" @click="$router.push('/list/' + i)">
        <div class="cardImg">
          <img v-if="project.image !== null" :src="project.image" alt="" />
        </div>
        <div class="card">
          <div class="null"></div>
          <div>
            <strong style="margin-right: 20px; font-size: 16px">💻 {{ project.title }}</strong>
            <br />
            {{ project.content }}
            <br />
            <strong style="margin-right: 20px; font-size: 16px">🔗 SKILLS</strong>
            <br />
            <p v-html="project.project"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  projects: Array,
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utils.scss" as *;

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
  box-shadow: 1px 2px 14px rgba(255, 255, 255, 0.33), 4px 8px 56px rgba(255, 255, 255, 0.22),
    10px 17px 125px rgba(255, 255, 255, 0.11);

  line-height: 2.2;
  color: #fff;

  div {
    width: 50%;
    padding-top: 30px;
    padding-right: 30px;
    font-family: "GangwonEdu_OTFBoldA";
    font-size: 12px;
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
  box-shadow: 8px 6px 11px rgba(255, 255, 255, 0.16), 31px 24px 44px rgba(255, 255, 255, 0.08);

  img {
    background-size: contain;
    border-radius: 20px;
    box-sizing: border-box;
    height: 200px;
    width: 250px;
  }
}

@include mobile_tablet {
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
    padding-top: 13px;

    div {
      text-align: center;
      width: 100%;
      padding-left: 10px;
      padding-top: 0;
      padding-right: 0;
      font-size: 11px;
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
