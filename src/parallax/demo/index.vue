<template>
  <van-parallax
    :height="200"
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <div>以这行文字为对照</div>
  </van-parallax>
</template>

<style lang="less">
.demo-parallax {
  padding: 0 16px;
  &::before,
  &::after {
    content: '';
    display: block;
    height: 50vh;
    width: 100%;
  }
}
</style>
