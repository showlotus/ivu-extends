<script>
function findChainedKey(obj, keys) {
  let curr = obj
  let keyList = keys.split(".")
  for (let key of keyList) {
    if (!curr) return ""
    curr = curr[key]
  }
  return curr
}
import Vue from "vue"
import Table from "view-design"
Vue.use(Table)
export default {
  name: "table-chained-key",
  functional: true,
  render: function (h, context) {
    const multiplyColumns = context.props.columns.filter(col => col.key.indexOf(".") > -1)
    context.props.data.forEach(v => {
      multiplyColumns.forEach(col => {
        v[col.key] = findChainedKey(v, col.key)
      })
    })
    return h("Table", context.data, context.children)
  }
}
</script>
