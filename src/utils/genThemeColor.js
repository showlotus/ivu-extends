import less from 'less'

const Color = less.color
const { fade, shade, tint } = less.functions.functionRegistry._data

function toRgb(color) {
  const { alpha, rgb } = color
  const [r, g, b] = rgb.map(v => parseInt(v, 10))
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

/**
 * 生成主题色
 * @param {string} themeColor 十六进制的颜色值
 * @returns
 */
export default function genThemeColor(themeColor) {
  const color = new Color(themeColor.slice(1))

  const linkHoverColor = tint(color, { value: 20 })
  const linkActiveColor = shade(color, { value: 5 })
  const selectedColor = fade(color, { value: 90 })
  const inputShadowColor = fade(color, { value: 20 })
  const treeTitleHoverColor = tint(color, { value: 90 })
  const treeTitleSelectedColor = tint(color, { value: 80 })
  const menuActiveColor = tint(color, { value: 95 })
  const tableHoverBgColor = tint(color, { value: 90 })
  const datePickerHoverBgColor = tint(color, { value: 85 })

  const colors = {
    '--ivu-primary-color': themeColor,
    '--ivu-link-hover-color': toRgb(linkHoverColor),
    '--ivu-link-active-color-color': toRgb(linkActiveColor),
    '--ivu-selected-color': toRgb(selectedColor),
    '--ivu-input-shadow-color': toRgb(inputShadowColor),
    '--ivu-tree-title-hover-color': toRgb(treeTitleHoverColor),
    '--ivu-tree-title-selected-color': toRgb(treeTitleSelectedColor),
    '--ivu-menu-active-color': toRgb(menuActiveColor),
    '--ivu-table-hover-bg-color': toRgb(tableHoverBgColor),
    '--ivu-date-picker-hover-bg-color': toRgb(datePickerHoverBgColor)
  }

  // 设置主题色 CSS 变量
  Object.keys(colors).forEach(key => {
    document.body.style.setProperty(key, colors[key])
  })
}
