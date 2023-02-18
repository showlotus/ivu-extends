// 初始颜色不透明度为 0 时，优化 ColorPicker 体验
export default {
  name: 'modifyOpacity',
  bind(el, binding, vnode) {
    const vm = vnode.componentInstance
    let canModifyOpacity = true
    const originChildChange = vm.childChange
    const newChildChange = function (data) {
      if (canModifyOpacity && isTransparent(this.value) && data.a === 0) {
        modifyOpacity(data)
      }
      originChildChange(data)
    }
    vm.childChange = newChildChange.bind(vm)
    vm.$watch('visible', val => {
      if (val) {
        canModifyOpacity = true
      }
    })

    function modifyOpacity(data) {
      data.a = 1
      canModifyOpacity = false
    }

    function isTransparent(color) {
      if (color.charAt(0) === '#' && color.length > 7) {
        return color.substr(7) === '00'
      } else if (color.startsWith('rgba')) {
        return color.replace(/.*,\s*([01]|0\.\d+)\)$/, '$1') === '0'
      }
      return color === 'transparent' // fix: 点击清空后，再打开颜色面板选择颜色，指令不生效
    }
  }
}
