<template>
  <div id="app">
    <nprogress-container></nprogress-container>
    <router-view></router-view>
  </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
export default {
  components: {
    NprogressContainer
  }
}
</script>

<style lang="less" rel="stylesheet/less">
  @import "./assets/css/main.less";

  .nprogress-container {
    position: fixed !important;
    width: 100%;
    height: 50px;
    z-index: 2048;
    pointer-events: none;

    #nprogress {
      @color: #1ab394;

      .bar {
        background: @color;
      }
      .peg {
        box-shadow: 0 0 10px @color, 0 0 5px @color;
      }

      .spinner-icon {
        border-top-color: @color;
        border-left-color: @color;
      }
    }
  }
</style>
