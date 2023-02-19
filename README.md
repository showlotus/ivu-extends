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

### resize

### scroll-to

### set-title-attr

## 主题切换

只支持 _v4.7.0_ 版本，如果使用其他版本，可以参照 [给 ViewDesign 加个主题换肤 💖](https://showlotus.gitee.io/7362ccce6f09.html) 生成对应的主题 _CSS_ 文件。

首先需要在 _main.js_ 中更换引入的 _CSS_ 文件。

```diff
- import "view-design/dist/styles/iview.css"
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
