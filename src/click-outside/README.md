# ClickOutside 点击外部

### 介绍

ClickOutside 当点击所在元素的外部时

### 引入

```js
import Vue from 'vue';
import { ClickOutside } from 'vant-ext';

Vue.use(ClickOutside);
```

## 代码演示

### 基础用法

```html
<div class="row">
  <div
    class="col"
    :class="{active: active}"
    v-click-outside="clickOutside"
    @click="active = true"
  >
    点击我哦
  </div>
</div>
<script>
  export default {
    data() {
      return {
        active: false,
      };
    },
    methods: {
      clickOutside() {
        this.active = false;
      },
    },
  };
</script>
```

### 指定不触发的元素

可在 `include` 设置包含的元素，使得此元素也不会触发点击外部

```html
<div class="row">
  <div class="col" ref="too">点我将不算点击外部</div>
  <div class="col">但我不行！</div>
  <div
    class="col"
    :class="{active: active}"
    v-click-outside="{
      handler: clickOutside,
      include: include,
    }"
    @click="active = true"
  >
    点击我哦
  </div>
</div>
<script>
  export default {
    data() {
      return {
        active: false,
      };
    },
    methods: {
      include() {
        return [this.$refs.too];
      },
      clickOutside() {
        this.active = false;
      },
    },
  };
</script>
```

### 自定义判断是否取消

可在 `closeConditional` 自行判断是否属于点击外部

```html
<div class="row">
  <div class="col" id="too">点俺也将不算点击外部</div>
  <div class="col">但我不行！</div>
  <div
    class="col"
    :class="{active: active}"
    v-click-outside="{
      handler: clickOutside,
      closeConditional: conditional
    }"
    @click="active = true"
  >
    点击我哦
  </div>
</div>
<script>
  export default {
    data() {
      return {
        active: false,
      };
    },
    methods: {
      conditional(event) {
        return !event.path.some((el) => {
          return el.id === 'too';
        });
      },
      clickOutside() {
        this.active = false;
      },
    },
  };
</script>
```
