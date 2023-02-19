<script>
import { Select } from 'view-design'

/**
 * 查找兄弟组件
 * @param {VNode} context 当前组件上下文
 * @param {string} componentName 组件名称
 * @param {string} group 组名
 * @param {boolean} exceptMe 是否包含当前组件自己
 * @returns {VNode[]}
 */
function findBrothersComponents(context, componentName, group, exceptMe = true) {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName && item.group === group
  })
  let index = res.findIndex(item => item._uid === context._uid)
  if (exceptMe) res.splice(index, 1)
  return res
}

/**
 * 获取 Option 上绑定的 value 值
 */
function getOptionVal(vnode) {
  return vnode.componentOptions.propsData.value
}

/**
 * 判断当前输入框的值是否为空
 * @param {*} val 需要判断的值
 * @return {boolean}
 */
function isEmptyVal(val) {
  return val === '' || val == null
}

const name = 'ivu-select-union'

export default {
  name: 'SelectUnion',
  components: { Select },
  props: {
    group: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    groupName() {
      return `_${name}-group-${this.group}`
    },
    groupValueList() {
      return this.$parent[this.groupName]
    },
    currVal() {
      return this.$attrs.value
    }
  },
  watch: {
    currVal(newVal, oldVal) {
      if (!isEmptyVal(newVal)) {
        this.groupValueList.add(newVal)
      }
      this.groupValueList.delete(oldVal)
      this.updateSiblings()
    }
  },
  created() {
    this.initGroup()
  },
  beforeDestroy() {
    this.clear()
  },
  methods: {
    initGroup() {
      this.$parent[this.groupName] = this.$parent[this.groupName] || new Set()
    },
    updateSiblings() {
      const siblings = findBrothersComponents(this, name, this.group, true)
      siblings.forEach(vc => {
        vc.$forceUpdate()
      })
    },
    clear() {
      this.groupValueList.delete(this.currVal)
      this.updateSiblings()
    }
  },
  render(h) {
    const filterSelectedValue = vnode => {
      if (!vnode.tag) return false
      const val = getOptionVal(vnode)
      return !this.groupValueList.has(val) || val === this.currVal
    }
    const children = this.$slots.default.filter(filterSelectedValue)
    return h(
      Select,
      {
        props: this.$attrs,
        on: this.$listeners
      },
      children
    )
  }
}
</script>
