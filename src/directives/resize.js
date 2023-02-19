import { noop, throttle } from '@/utils/assets'

export default {
  name: 'resize',
  bind(el, binding) {
    let wait = Number(binding.arg)
    let immediate = binding.modifiers.immediate || false
    wait = Number.isNaN(wait) ? undefined : wait
    const callback = binding.value || noop
    const handler = throttle(entries => {
      const rect = entries[0].contentRect
      // 是否立即触发
      if (!immediate) {
        immediate = true
        return
      }
      // 将当前 DOM 的信息返回
      callback(rect)
    }, wait)
    el._observe = new ResizeObserver(handler)
    el._observe.observe(el)
  },
  unbind(el) {
    el._observe.unobserve(el)
    delete el._observe
  }
}
