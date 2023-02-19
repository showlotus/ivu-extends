<template>
  <div>
    <Table :columns="columns" :data="tableData" border></Table>
  </div>
</template>

<script>
import { TableColumnKeyChain } from 'ivu-extends'

export default {
  name: 'table-column-key-chain',
  components: { Table: TableColumnKeyChain },
  data() {
    return {
      columns: [
        {
          title: 'name',
          key: 'name'
        },
        {
          title: 'age',
          key: 'age'
        },
        {
          title: 'addressName',
          key: 'address.name',
          tooltip: true
        },
        {
          title: 'date',
          key: 'date',
          tooltip: true
        }
      ],
      tableData: [
        {
          name: 'John Brown',
          age: 18,
          address: { name: 'New York No. 1 Lake Park'.repeat(3) },
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: { name: 'London No. 1 Lake Park'.repeat(3) },
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: { name: 'Sydney No. 1 Lake Park' },
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: { name: 'Ottawa No. 2 Lake Park' },
          date: '2016-10-04'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less"></style>
