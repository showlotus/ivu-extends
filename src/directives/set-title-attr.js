// 将当前元素或子元素设置原生title属性
export default {
  name: 'setTitleAttr',
  bind(el, binding, _vnode) {
    const { value, arg } = binding
    let selector = arg || ''
    if (selector) {
      el = el.querySelector(`.${selector}`)
    }
    el.setAttribute('title', value)
  }
}
