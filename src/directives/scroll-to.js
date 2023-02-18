// 将当前容器或子容器的滚动条移动到底部或顶部
export default {
  name: 'scrollTo',
  bind(el, binding, vnode) {
    const { top, bottom, selector } = binding.value
    let container = el
    if (selector && selector.trim()) {
      container = el.querySelector(selector)
    }
    if (!container) return
    const _this = vnode.context
    if (top) {
      el.teardownTop = intercept(_this, top, () => {
        _this.$nextTick(() => {
          container.scrollTo(0, 0)
        })
      })
    }
    if (bottom) {
      el.teardownBottom = intercept(_this, bottom, () => {
        _this.$nextTick(() => {
          const containerHeight = container.clientHeight
          const contentHeight = container.scrollHeight
          container.scrollTo(0, contentHeight - containerHeight)
        })
      })
    }
    if (top || bottom) {
      _this.$forceUpdate()
    }

    function intercept(obj, key, callback) {
      const originFn = obj[key]
      obj[key] = function () {
        originFn(...arguments)
        callback()
      }
      return function () {
        obj[key] = originFn
      }
    }
  },
  unbind(el, binding, vnode) {
    // 解绑后，取消拦截
    const _this = vnode.context
    el.teardownTop && el.teardownTop()
    el.teardownBottom && el.teardownBottom()
    if (el.teardownTop || el.teardownBottom) {
      _this.$forceUpdate()
    }
  }
}
