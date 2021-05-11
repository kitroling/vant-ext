# Responsive 比例盒子

### 介绍

Responsive 是一个按比例保持宽高比的盒子

### 引入

```js
import Vue from 'vue';
import { Responsive } from 'vant-ext';

Vue.use(Responsive);
```

## 代码演示

### 基础用法

```html
<van-responsive
  :aspect-ratio="16 / 9"
  class="custom-box"
  content-class="custom-content"
>
  这个盒子的宽高保持了16:9的比例
</van-responsive>
```

## API

### Props

| 参数         | 说明             | 类型               | 默认值 |
| ------------ | ---------------- | ------------------ | ------ |
| aspectRatio  | 宽高比例         | _number_, _string_ | -      |
| contentClass | 内部元素额外类名 | _string_           | -      |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
