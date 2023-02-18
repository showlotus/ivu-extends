<script>
import { Form as iForm } from 'view-design'

export default {
  name: 'IVEFormLabelSuffix',
  functional: true,
  props: {
    labelColon: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const FormItemList = []

    const dfs = root => {
      if (!root.children || !Array.isArray(root.children)) return
      root.children.forEach(child => {
        // 组件
        if (child.componentOptions) {
          if (child.componentOptions.tag === 'FormItem') {
            FormItemList.push(child)
          }
          dfs(child.componentOptions)
        } else if (child.children) {
          // 普通HTML标签
          dfs(child)
        }
      })
    }

    dfs(context)

    const handler = vnode => {
      const { label } = vnode.componentOptions.propsData
      if (label) {
        vnode.componentOptions.propsData.label += context.props.labelColon
      }
    }
    FormItemList.forEach(handler)

    return h(iForm, context.data, context.children)
  }
}
</script>
