export function noop() {}

// 降低颜色不透明度
export function reduceOpacity(color, ratio = 0.5) {
  // hex 类型
  if (color.indexOf('#') > -1) {
    // prettier-ignore
    const opacity = Math.floor(ratio * 255).toString(16).padStart(2, "0")
    if (color.length <= 4) {
      return color.replace(/(\w)/g, '$1$1') + opacity
    } else if (color.length <= 7) {
      return color + opacity
    } else {
      return color.slice(0, 7) + opacity
    }
  } else {
    // rgba 类型
    const values = color.match(/[\d.]+/g)
    let opacity = 0.5
    if (values.length === 4) {
      opacity = parseFloat(values[3]) * ratio
    }
    return `rgba(${values[0]}, ${values[1]}, ${values[2]}, ${opacity})`
  }
}

// 链式获取某个属性
export function getChainedKey(obj, keys) {
  let curr = obj
  let keyList = keys.split('.')
  for (let key of keyList) {
    if (!curr) return ''
    curr = curr[key]
  }
  return curr
}

// 节流
export function throttle(fn, wait = 500) {
  let timer = null
  let isFirstTime = true // 是否是第一次触发

  return function (...args) {
    const that = this
    if (isFirstTime) {
      fn.apply(that, args)
      return (isFirstTime = false)
    }

    // 当前正在执行中，直接退出（技能还在冷却中）
    if (timer) {
      return false
    }

    // 设置 timer（使用技能）
    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      fn.apply(that, args)
    }, wait)
  }
}

// 防抖
export function debounce(fn, wait = 500) {
  let timer = null
  return function (...args) {
    const that = this
    // 在 wait 时间段内触发（有人进来，取消关闭电梯门的指令，重新打开电梯门）
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    // 设置 timer（等待 wait 时间段后，关闭电梯门）
    timer = setTimeout(() => {
      fn.apply(that, args)
    }, wait)
  }
}
