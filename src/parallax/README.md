> _想法还不明确，暂时不要广泛使用_

# Parallax 视差

### 介绍

Parallax 在滚动时给背景赋予视差效果

### 引入

```js
import Vue from 'vue';
import { Parallax } from 'vant-ext';

Vue.use(Parallax);
```

## 代码演示

### 基础用法

```html
<van-parallax
  :height="200"
  src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
>
  <div>以这行文字为对照</div>
</van-parallax>
```

## API

### Props

| 参数   | 说明         | 类型     | 默认值 |
| ------ | ------------ | -------- | ------ |
| alt    | 图片说明文字 | _string_ | -      |
| height | 整体高度     | _number_ | 500    |
| src    | 图片地址     | _string_ | -      |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
