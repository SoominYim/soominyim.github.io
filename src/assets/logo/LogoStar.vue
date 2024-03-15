<template>
  <div class="star">
    <div class="wrap">
      <div id="a_wrap" class="item_warp">
        <div id="a"></div>
      </div>
      <div id="b_wrap" class="item_warp">
        <div id="b"></div>
      </div>
      <div id="c_wrap" class="item_warp">
        <div id="c"></div>
      </div>
      <div id="d_wrap" class="item_warp">
        <div id="d"></div>
      </div>
      <div id="e_wrap" class="item_warp">
        <div id="e"></div>
      </div>
      <div id="f_wrap" class="item_warp">
        <div id="f"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogoStar",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/utils.scss";
.star {
  position: absolute;
  top: 50px;
  left: 100px;
  width: calc(15px * 3);
  height: calc(15px * 1.732 * 2);
  align-items: center;
  align-content: center;
  text-align: center;
  z-index: 999999;
  @include mobile {
    top: 5px;
    left: 5px;
  }
  @include tablet {
    top: 50px;
    left: 50px;
  }
}

.wrap {
  position: absolute;
  left: 15px;
  width: calc(15px * 3);
  height: calc(15px * 1.732 * 2);
  .item_warp {
    position: absolute;
    height: calc(15px * 1.732);
    transform-origin: bottom;
    div {
      position: relative;
      width: 0px;
      height: 0px;
      border-bottom: calc(7.5px * 1.732) solid var(--grey);
      border-left: 7.5px solid transparent;
      border-right: 7.5px solid transparent;
      &:hover {
        border-bottom: calc(7.5px * 1.732) solid #555;
        &::after {
          border-top: calc(7.5px * 1.732) solid #555;
        }
      }
    }
    div::after {
      content: "";
      position: absolute;
      top: calc(7px * 1.732);
      left: -7.5px;
      width: 0px;
      height: 0px;
      border-top: calc(7.5px * 1.732) solid var(--grey);
      border-left: 7.5px solid transparent;
      border-right: 7.5px solid transparent;
    }
  }
  @include mobile {
    .item_warp {
      position: absolute;
      height: calc(10px * 1.732);
      transform-origin: bottom;
      div {
        position: relative;
        width: 0px;
        height: 0px;
        border-bottom: calc(5px * 1.732) solid var(--grey);
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        &:hover {
          border-bottom: calc(5px * 1.732) solid #555;
          &::after {
            border-top: calc(5px * 1.732) solid #555;
          }
        }
      }
      div::after {
        content: "";
        position: absolute;
        top: calc(4.7px * 1.732);
        left: -5px;
        width: 0px;
        height: 0px;
        border-top: calc(5px * 1.732) solid var(--grey);
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
      }
    }
  }
}

#b_wrap {
  transform: rotate(60deg);
}

#c_wrap {
  transform: rotate(120deg);
}

#d_wrap {
  transform: rotate(180deg);
}

#e_wrap {
  transform: rotate(240deg);
}

#f_wrap {
  transform: rotate(300deg);
}
</style>
