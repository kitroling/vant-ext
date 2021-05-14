# WaterMark 水印

### 介绍

可以在背景或者上层显示一层水印，水印层将只显示，但不会响应任何事件

### 引入

```js
import Vue from 'vue';
import { WaterMark } from 'vant-ext';

Vue.use(WaterMark);
```

## 代码演示

### 基础用法

```html
<water-mark content="water mark"> // content </water-mark>
```

### 自定义水印内容

可以通过 watermark 插槽自定义水印内容和其样式

```html
<water-mark class="content" content="water mark" :opacity="1" cover>
  // content
  <template #watermark>
    <span class="water-mark-text">COVER MODE</span>
  </template>
</water-mark>

<style>
  .water-mark-text {
    background-color: #ffeedd;
    padding: 4px 8px;
    line-height: 1;
  }
</style>
```

## API

### Props

| 参数    | 说明           | 类型               | 默认值  |
| ------- | -------------- | ------------------ | ------- |
| content | 水印内容       | _string_           | -       |
| spacing | 间隙           | _string_, _number_ | '20vw'  |
| rotate  | 角度           | _number_           | -45     |
| opacity | 透明度         | _number_           | 0.2     |
| repeat  | 是否重复       | _boolean_          | `true`  |
| cover   | 是否在顶层层级 | _boolean_          | `false` |

### Slots

| 名称      | 说明           |
| --------- | -------------- |
| default   | 默认插槽       |
| watermark | 自定义水印内容 |
