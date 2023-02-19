# ivu-extends

基于 [view-design](http://v4.iviewui.com/docs/introduce)（_v4.7.0_） 扩展的组件库，平时开发造的一些轮子，包括组件的二次封装，Vue 指令和动态主题切换。

## 安装

```shell
npm install ivu-extends -S
```

## 使用

```js
import IvuExtends from 'ivu-extends'

Vue.use(IvuExtends)

// 或者
import { IveFormLabelSuffix, IveInputNumberUnit } from 'ivu-extends'

Vue.component(IveFormLabelSuffix.name, IveFormLabelSuffix)
Vue.component(IveInputNumberUnit.name, IveInputNumberUnit)
/* 或写为
 * Vue.use(IveFormLabelSuffix)
 * Vue.use(IveInputNumberUnit)
 */
```

## 组件

### IveFormLabelSuffix

对原属性 _label-colon_ 进行扩展，可定制 _label_ 后缀。

```html
<IveFormLabelSuffix :label-width="160" label-colon="：">
  <FormItem label="姓名"><Input></Input></FormItem>
  <FormItem label="年龄"><Input></Input></FormItem>
</IveFormLabelSuffix>
```

如果不想更换 Form 组件名（`Form` => `IveFormLabelSuffix`），可以全局/局部替换 ivu-form。

```js
// 在 main.js 中全局替换
Vue.component('Form', IveFormLabelSuffix)

// 在 Form 使用处，局部替换
import IveFormLabelSuffix from 'ivu-extends'

export default {
  components: { Form: IveFormLabelSuffix }
  /* ... */
}
```

替换后使用，保持原代码不变，只需要添加 _label-colon_ 属性。

```html
<Form :label-width="160" label-colon="：">
  <FormItem label="姓名"><Input></Input></FormItem>
  <FormItem label="年龄"><Input></Input></FormItem>
</Form>
```

### IveInputNumberUnit

### IveSelectUnion

### IveTableColumnKeyChain

### IveTooltipText

## 指令

### modify-opacity

ColorPicker 的优化指令，当 `opacity` 为 _0_ ，在颜色面板上选取颜色时，将不透明度置为 _1_ 。

使用：

```html
<ColorPicker v-model="color" alpha v-modify-opacity />
```

### resize

监听 DOM 尺寸变化。

> 使用场景：echarts 图表的 _DOM_ 容器尺寸发生变化时，需要执行 `echarts.resize()` 重新调整图表尺寸。

使用：

```html
<div v-resize:200.immediate="handleResize"></div>
```

|   属性    |                                                       说明                                                        |
| :-------: | :---------------------------------------------------------------------------------------------------------------: |
|    arg    |                                     传入一个数字，代表节流时间，默认为 `500`                                      |
| modifiers |                               仅支持 `immediate`，表示是否立即触发，默认为 `false`                                |
|   value   | 触发时的回调方法，参数为 [DOMRectReadOnly](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMRectReadOnly) 类型 |

### scroll-to

将当前元素或子元素的滚动条移动到底部或顶部。

> 使用场景：列表项过多出现滚动条，新增一项时，将列表的滚动条滚动到底部，确保新增的一项可见。

使用：

```html
<div
  v-scroll-to="{
    top: `handleShift`,
    bottom: `handlePush`,
    selector: ''
  }"
></div>
```

|   属性   |                                                    说明                                                     |
| :------: | :---------------------------------------------------------------------------------------------------------: |
|  value   |        配置项信息，`Object` 类型，有三个可选属性 `{ top: string, bottom: string, selector: string }`        |
|   top    | 滚动到顶部的回调方法名，`String` 类型，只支持同步方法，当前方法执行后，在下一轮事件循环中将滚动条滚动到顶部 |
|  bottom  | 滚动到底部的回调方法名，`String` 类型，只支持同步方法，当前方法执行后，在下一轮事件循环中将滚动条滚动到底部 |
| selector |       选择器，`String` 类型，如果想滚动的容器不是当前元素，而是它的子元素，可以提供一个子元素的选择器       |

### set-title-attr

将当前元素或子元素设置原生 _title_ 属性。

> 使用场景：下拉列表的选项中，有些文字过长，开启文字省略后，还需要能展示全部文字。

使用：

```html
<select v-model="model" style="width: 200px">
  <option v-for="item in list" :value="item.value" :key="item.value" v-set-title-attr="item.label">
    {{ item.label }}
  </option>
</select>
```

| 属性  |          说明           |
| :---: | :---------------------: |
| value | 在 _title_ 中展示的文字 |

## 主题切换

只支持 _v4.7.0_ 版本，如果使用其他版本，可以参照 [给 ViewDesign 加个主题换肤 💖](https://showlotus.gitee.io/7362ccce6f09.html) 生成对应的主题 _CSS_ 文件。

首先需要在 _main.js_ 中更换引入的 _CSS_ 文件。

```diff
- import 'view-design/dist/styles/iview.css'
+ import 'ivu-extends/dist/styles/iview.css'
```

引入 `genThemeColor` 方法：

```js
import { genThemeColor } from 'ivu-extends'
```

使用：

```js
genThemeColor(color)
```

其中 `color` 为十六进制颜色值，例如 `#ff0000`、`#0f0` 都是合法的颜色值。方法执行后，当前项目中使用到的 _view-design_ 组件，主题色都会发生变化。

如果完整引入了 `ivu-extends`，那么 Vue.prototype 上会有一个全局方法 `$genThemeColor`，使用方式为 `this.$genThemeColor(color)` 。
