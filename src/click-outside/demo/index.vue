<template>
  <demo-block title="基础用法">
    <div class="row">
      <div
        class="col"
        :class="{ active: active }"
        v-click-outside="clickOutside"
        @click="active = true"
      >
        点击我哦
      </div>
    </div>
  </demo-block>
  <demo-block title="指定不触发的元素">
    <div class="row2">
      <div class="col" ref="too">点我将不算点击外部</div>
      <div class="col">但我不行！</div>
      <div
        class="col"
        :class="{ active: active2 }"
        v-click-outside="{
          handler: clickOutside2,
          include: include,
        }"
        @click="active2 = true"
      >
        点击我哦
      </div>
    </div>
  </demo-block>
  <demo-block title="自定义判断是否取消">
    <div class="row2">
      <div class="col" id="too2">点俺也将不算点击外部</div>
      <div class="col">但我不行！</div>
      <div
        class="col"
        :class="{ active: active3 }"
        v-click-outside="{
          handler: clickOutside3,
          closeConditional: conditional,
        }"
        @click="active3 = true"
      >
        点击我哦
      </div>
    </div>
  </demo-block>
</template>

<script>
import ClickOutside from '../ClickOutside';

export default {
  directives: [ClickOutside],
  data() {
    return {
      active: false,
      active2: false,
      active3: false,
    };
  },
  methods: {
    conditional(e) {
      return !e.path.some((el) => {
        return el.id === 'too2';
      });
    },
    include() {
      return [this.$refs.too];
    },
    clickOutside3() {
      this.active3 = false;
    },
    clickOutside2() {
      this.active2 = false;
    },
    clickOutside() {
      this.active = false;
    },
  },
};
</script>

<style lang="less">
@import '~vant/es/style/var';
.demo-click-outside {
  .row,
  .row2 {
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }
  .col {
    width: 100%;
    height: 120px;
    border: 3px dotted #aaa;
    background-color: #fff;
    border-radius: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    text-align: center;
    &:hover {
      background-color: #eee;
    }
    &:active {
      background-color: #ddd;
    }
    &.active {
      background-color: @green;
      color: #fff;
    }
  }
  .row2 {
    .col {
      font-size: 12px;
      height: 60px;
      &:not(:last-child) {
        margin-right: 16px;
      }
    }
  }
}
</style>
