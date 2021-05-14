<template>
  <demo-block title="基础用法">
    <div class="content">
      <van-water-mark content="water mark">
        <p class="text">
          每个人都有属于自己的一片森林，也许我们从来不曾去过，但它一直在那里，总会在那里。迷失的人迷失了，相逢的人会再相逢。
        </p>
        <p class="text">希望你可以记住我，记住我这样活过，这样在你身边待过。</p>
        <p class="text">
          少年时我们追求激情，成熟后却迷恋平庸。在我们寻找、伤害、背离之后，还能一如既往地相信爱情，这是一种勇气。
        </p>
      </van-water-mark>
    </div>
  </demo-block>
  <demo-block title="自定义水印内容">
    <div class="content">
      <van-water-mark content="water mark" :opacity="1" cover>
        <p class="text">
          每个人都有属于自己的一片森林，也许我们从来不曾去过，但它一直在那里，总会在那里。迷失的人迷失了，相逢的人会再相逢。
        </p>
        <p class="text">希望你可以记住我，记住我这样活过，这样在你身边待过。</p>
        <p class="text">
          少年时我们追求激情，成熟后却迷恋平庸。在我们寻找、伤害、背离之后，还能一如既往地相信爱情，这是一种勇气。
        </p>
        <template #watermark>
          <span class="water-mark-text">COVER MODE</span>
        </template>
      </van-water-mark>
    </div>
  </demo-block>
</template>

<script>
export default {};
</script>

<style lang="less">
.demo-water-mark {
  .content {
    padding: 0 16px;
    margin-bottom: 16px;
  }
  .water-mark-text {
    background-color: #fed;
    padding: 4px 8px;
    line-height: 1;
  }
}
</style>
