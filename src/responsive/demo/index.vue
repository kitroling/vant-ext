<template>
  <demo-block title="基础用法">
    <van-responsive :aspect-ratio="16 / 9" content-class="box">
      这个盒子的宽高保持了16:9的比例
    </van-responsive>
  </demo-block>
</template>
<style lang="less">
@import '~vant/es/style/var.less';
.demo-responsive {
  padding: 16px;
  .box {
    background-color: @orange-light;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
