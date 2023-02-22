# 使用 CSS 变量替换 ViewDesign 主题色

## 主题色

需要把与主题色相关的颜色都换成具体颜色，而不是由原来的 _less_ 函数生成的，这一步是为了方便后续的全局替换。

需要修改的 _less_ 变量如下：

```less
// Color
@primary-color: #2d8cf0; // 1
@processing-color: @primary-color; // 1
@link-color: #2d8cf0; // 1
@link-hover-color: tint(@link-color, 20%); // 2
@link-active-color: shade(@link-color, 5%); // 3
@selected-color: fade(@primary-color, 90%); // 4

// Button
@btn-group-border: shade(@primary-color, 5%); // 3
@btn-primary-bg: @primary-color; // 1

// Input
@input-hover-border-color: @primary-color; // 1
@input-focus-border-color: @primary-color; // 1

// Slider
@slider-color: tint(@primary-color, 20%); // 2

// 特殊的，有些需要额外替换
// 表单的聚焦外阴影
.ivu-input:focus {
  box-shadow: 0 0 0 2px fade(@primary-color, 20%); // 5
}

// 树形组件悬浮和选中时的背景色
.ivu-tree-title:hover {
  background-color: tint(@primary-color, 90%); // 6
}
.ivu-tree-title-selected,
.ivu-tree-title-selected:hover {
  background-color: tint(@primary-color, 80%); // 7
}

// 导航菜单激活时的背景颜色
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
  background: #f0faff; // 8 => tint(@primary-color, 95%)
}

// 不是从主题色中延申而来的颜色，用主题色延申色替换
@table-td-hover-bg: #ebf7ff; // 9 => tint(@primary-color, 90%)
@table-td-highlight-bg: #ebf7ff; // 9 => tint(@primary-color, 90%)
@date-picker-cell-hover-bg: #e1f0fe; // 10 => tint(@primary-color, 85%)
```

对应变量修改后如下：

```less
// Color
@primary-color: #2d8cf0; // 1
@processing-color: #2d8cf0; // 1
@link-color: #2d8cf0; // 1
@link-hover-color: #57a3f3; // 2
@link-active-color: #2b85e4; // 3
@selected-color: rgba(45, 140, 240, 0.9); // 4

// Button
@btn-group-border: #2b85e4; // 3
@btn-primary-bg: #2d8cf0; // 1

// Input
@input-hover-border-color: #2d8cf0; // 1
@input-focus-border-color: #2d8cf0; // 1

// Slider
@slider-color: #57a3f3; // 2

// 特殊的，有些需要额外替换
// 表单的聚焦外阴影
.ivu-input:focus {
  box-shadow: 0 0 0 2px rgba(45, 140, 240, 0.2); // 5
}

// 树形组件悬浮和选中时的背景色
.ivu-tree-title:hover {
  background-color: #eaf4fe; // 6 tint(@primary-color, 90%)
}
.ivu-tree-title-selected,
.ivu-tree-title-selected:hover {
  background-color: #d5e8fc; // 7 tint(@primary-color, 80%)
}

// 导航菜单激活时的背景颜色
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
  background: #f0faff; // 8 => tint(@primary-color, 95%)
}

// 不是从主题色中延申而来的颜色，用主题色延申色替换
@table-td-hover-bg: #ebf7ff; // 9 => tint(@primary-color, 90%)
@table-td-highlight-bg: #ebf7ff; // 9 => tint(@primary-color, 90%)
@date-picker-cell-hover-bg: #e1f0fe; // 10 => tint(@primary-color, 85%)
```

总计 10 种颜色，执行完 `iview-theme build -o dist/` 后，需要进行用 10 个 CSS 全局变量替换它们：

1. `#2d8cf0`：替换为 `var(--ivu-primary-color, #2d8cf0)`，总计 <big>**113**</big> 个；
2. `#57a3f3`：替换为 `var(--ivu-link-hover-color, #57a3f3)`，总计 <big>**46**</big> 个；
3. `#2b85e4`：替换为 `var(--ivu-link-active-color-color, #2b85e4)`，总计 <big>**22**</big> 个；
4. `rgba(45,140,240,.9)`：替换为 `var(--ivu-selected-color, rgba(45,140,240,.9))`，总计 <big>**2**</big> 个。
5. `rgba(45,140,240,.2)`：替换为 `var(--ivu-input-shadow-color, rgba(45,140,240,.2))`，总计 <big>**25**</big> 个。
6. `#eaf4fe`：替换为 `var(--ivu-tree-title-hover-color, #eaf4fe)`，总计 <big>**1**</big> 个。
7. `#d5e8fc`：替换为 `var(--ivu-tree-title-selected-color, #d5e8fc)`，总计 <big>**4**</big> 个。
8. `#f0faff`：替换为 `var(--ivu-menu-active-color, #f0faff)`，总计 <big>**5**</big> 个。
9. `#ebf7ff`：替换为 `var(--ivu-table-hover-bg-color, #ebf7ff)`，总计 <big>**3**</big> 个。
10. `#e1f0fe`：替换为 `var(--ivu-date-picker-hover-bg-color, #e1f0fe)`，总计 <big>**2**</big> 个。

> 在线编译 _less_ ：https://www.dute.org/less-to-css
