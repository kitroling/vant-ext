# Amount 金融数字

### 介绍

金融数字，一般用于金额，数量等

https://didi.github.io/mand-mobile/#/zh-CN/docs/components/business/amount

### 引入

```js
import Vue from 'vue';
import { DemoButton } from 'vant-ext';

Vue.use(DemoButton);
```

## 代码演示

### 基础用法

```html
<demo-button type="primary" />
```

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------- | -------- | -------- | --------- |
| type          | 按钮类型 | _string_ | `primary` |
| color `1.0.0` | 按钮颜色 | _string_ | -         |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
