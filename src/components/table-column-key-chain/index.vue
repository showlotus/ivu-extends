<script>
import { Table as iTable } from 'view-design'
import { getChainedKey } from '@/utils/assets'

export default {
  name: 'IveTableColumnKeyChain',
  functional: true,
  render: function (h, context) {
    const multiplyColumns = context.props.columns.filter(col => col.key.indexOf('.') > -1)
    context.props.data.forEach(v => {
      multiplyColumns.forEach(col => {
        v[col.key] = getChainedKey(v, col.key)
      })
    })
    return h(iTable, context.data, context.children)
  }
}
</script>
