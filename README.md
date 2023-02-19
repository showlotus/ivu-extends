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
import { FormLabelSuffix, InputNumberUnit } from 'ivu-extends'

Vue.component(FormLabelSuffix.name, FormLabelSuffix)
Vue.component(InputNumberUnit.name, InputNumberUnit)
/* 或写为
 * Vue.use(FormLabelSuffix)
 * Vue.use(InputNumberUnit)
 */
```

## 组件

### FormLabelSuffix

对原属性 _label-colon_ 进行扩展，可定制 _label_ 后缀。

> 使用场景：统一为项目中的表单标签都添加中文冒号 `：` 后缀。

```html
<FormLabelSuffix :label-width="160" label-colon="：">
  <FormItem label="姓名"><Input></Input></FormItem>
  <FormItem label="年龄"><Input></Input></FormItem>
</FormLabelSuffix>
```

如果不想更换 Form 组件名（`Form` => `FormLabelSuffix`），可以全局/局部替换 ivu-form。

```js
// 在 main.js 中全局替换
Vue.component('Form', FormLabelSuffix)

// 在 Form 使用处，局部替换
import FormLabelSuffix from 'ivu-extends'

export default {
  components: { Form: FormLabelSuffix }
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

### InputNumberUnit

带单位的数字输入框，在 InputNumber 的基础上进行扩展，新增了两个属性：`unit` 和 `unit-placement`，一个插槽：`unit`。

> 使用场景：原生 InputNumber 添加单位后，单位算作输入框内容的一部分，导致还能选中删除，不优雅。

#### 使用

```html
<InputNumberUnit
  :max="100"
  :min="-10"
  size="small"
  unit="$"
  unit-placement="start"
  v-model="value"
/>
```

使用插槽

```html
<InputNumberUnit :max="100" :min="0" :step="1" unit-placement="end" size="large" v-model="value">
  <span slot="unit" style="color: red; font-weight: bold">%</span>
</InputNumberUnit>
```

#### props

|      属性      |                                             说明                                              |
| :------------: | :-------------------------------------------------------------------------------------------: |
|      unit      |                                      单位，`String` 类型                                      |
| unit-placement | 单位的位置，`String` 类型，可选值：`start`（在数字前） 或者 `end`（在数字后），默认为 `start` |

#### slot

| 名称 |      说明      |
| :--: | :------------: |
| unit | 自定义单位格式 |

### SelectUnion

联动选择输入框，在 Select 的基础上进行扩展，新增了一个属性：`group`。

> 使用场景：多个输入框之间需要联动，已选中项不可再选。

#### 使用

```html
<SelectUnion v-for="(item, key) in list" :key="key" v-model="value" :group="item.group">
  <option value="a">A</option>
  <option value="b">B</option>
  <option value="c">C</option>
</SelectUnion>
```

#### props

| 属性  |                                       说明                                       |
| :---: | :------------------------------------------------------------------------------: |
| group | 分组名，`String` 类型，相同组名的 SelectUnion 之间有联动效果，默认为 `'default'` |

### TableColumnKeyChain

在 Table 的基础上进行扩展，可链式传入 _columns_ 中的 _key_。

> 使用场景：要展示数据项中下层的属性，同时还需要生效 _tooltip_ 。

#### 使用

```html
<TableColumnKeyChain :columns="columns" :data="tableData" border></TableColumnKeyChain>
```

```js
export default {
  data() {
    return {
      columns: [
        {
          title: 'name',
          key: 'name'
        },
        {
          title: 'age',
          key: 'age'
        },
        {
          title: 'addressName',
          key: 'address.name', // 可以这样写
          tooltip: true // tooltip 也会生效
        },
        {
          title: 'date',
          key: 'date',
          tooltip: true
        }
      ],
      tableData: [
        {
          name: 'John Brown',
          age: 18,
          address: {
            name: 'New York No. 1 Lake Park'
          },
          date: '2016-10-03'
        }
      ]
    }
  }
}
```

### TooltipText

在 Tooltip 的基础上进行扩展，文本内容超出当前容器宽度时，自动开启 Tooltip 。

#### 使用

如果内容是纯文本，则默认将整个文本内容作为 Tooltip 的 _content_ 内容。

```html
<TooltipText>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</TooltipText>
```

如果内容非纯文本，用一个根容器包裹整个内容，同时需要单独指定 _content_ 。

```html
<TooltipText content="bbb">
  <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<span>bbbbbbb</span>aaaaaaaa</div>
</TooltipText>
```

## 指令

### modify-opacity

ColorPicker 的优化指令，当 `opacity` 为 _0_ ，在颜色面板上选取颜色时，将不透明度置为 _1_ 。

#### 使用

```html
<ColorPicker v-model="color" alpha v-modify-opacity />
```

### resize

监听 DOM 尺寸变化。

> 使用场景：echarts 图表的 _DOM_ 容器尺寸发生变化时，需要执行 `echarts.resize()` 重新调整图表尺寸。

#### 使用

```html
<div v-resize:200.immediate="handleResize"></div>
```

#### 配置

|   属性    |                                                       说明                                                        |
| :-------: | :---------------------------------------------------------------------------------------------------------------: |
|    arg    |                                     传入一个数字，代表节流时间，默认为 `500`                                      |
| modifiers |                               仅支持 `immediate`，表示是否立即触发，默认为 `false`                                |
|   value   | 触发时的回调方法，参数为 [DOMRectReadOnly](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMRectReadOnly) 类型 |

### scroll-to

将当前元素或子元素的滚动条移动到底部或顶部。

> 使用场景：列表项过多出现滚动条，新增一项时，将列表的滚动条滚动到底部，确保新增的一项可见。

#### 使用

```html
<div
  v-scroll-to="{
    top: `handleShift`,
    bottom: `handlePush`,
    selector: ''
  }"
></div>
```

#### 配置

|   属性   |                                                    说明                                                     |
| :------: | :---------------------------------------------------------------------------------------------------------: |
|  value   |        配置项信息，`Object` 类型，有三个可选属性 `{ top: string, bottom: string, selector: string }`        |
|   top    | 滚动到顶部的回调方法名，`String` 类型，只支持同步方法，当前方法执行后，在下一轮事件循环中将滚动条滚动到顶部 |
|  bottom  | 滚动到底部的回调方法名，`String` 类型，只支持同步方法，当前方法执行后，在下一轮事件循环中将滚动条滚动到底部 |
| selector |       选择器，`String` 类型，如果想滚动的容器不是当前元素，而是它的子元素，可以提供一个子元素的选择器       |

### set-title-attr

将当前元素或子元素设置原生 _title_ 属性。

> 使用场景：下拉列表的选项中，有些文字过长，开启文字省略后，还需要能展示全部文字。

#### 使用

```html
<select v-model="model" style="width: 200px">
  <option v-for="item in list" :value="item.value" :key="item.value" v-set-title-attr="item.label">
    {{ item.label }}
  </option>
</select>
```

#### 配置

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
