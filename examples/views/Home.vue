<template>
  <div class="home-wrap">
    <Menu style="flex: 0 0 240px" @on-select="handleSelectMenu">
      <Submenu v-for="(c, i) in componentList" :key="i" :name="c">
        <template slot="title"> {{ c }} </template>
        <MenuItem v-for="t in BaseComponents[c]" :key="t.name" :name="t.name">{{
          t.name
        }}</MenuItem>
      </Submenu>
    </Menu>

    <div class="component-show">
      <!-- <component :is="currCom" /> -->

      <comWrap title="tooltip-text">
        <div style="width: 400px; color: red">
          <TooltipText
            transfer
            theme="light"
            content="hello worldhello worldhello worldhello worldhello worldhello worldhello world"
          />
        </div>
      </comWrap>

      <comWrap title="table-chained-key">
        <table-chained-key
          :data="tableData"
          :columns="chainColumns"
          highlight-row
          @on-current-change="handleCurrentChange"
        />
      </comWrap>

      <Table :data="tableData" :columns="columns"></Table>
    </div>
  </div>
</template>

<script>
import { groupMap, plugins } from '@/components/index'
console.log(plugins)
import TooltipText from '@/components/tooltip-text/tooltip-text.vue'
import TableChainedKey from '@/components/table-chained-key/table-chained-key.vue'
export default {
  name: 'HomeView',
  components: {
    // ...plugins,
    TooltipText,
    TableChainedKey,
    comWrap: {
      props: {
        title: { type: String, default: '' }
      },
      render: function (h) {
        return h(
          'div',
          {
            style: {
              padding: '20px  0',
              borderBottom: '1px solid #333'
            }
          },
          [h('h2', [h('i', this.title)]), this.$slots.default]
        )
      }
    }
  },
  data() {
    return {
      currCom: null,
      tableData: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03',
          info: {
            friend: 'Jane'
          }
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01',
          info: {
            friend: 'Jane 111111111111111111111'
          }
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02',
          info: {
            friend: 'Jane'
          }
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04',
          info: {
            friend: 'Jane'
          }
        }
      ],
      columns: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'Friend',
          // key: "info",
          render: (h, { row }) => {
            return h(
              TooltipText,
              {
                props: {
                  transfer: true,
                  theme: 'light',
                  content: row.info.friend
                },
                style: {
                  color: 'red'
                }
              },
              row.info.friend
            )
            // return (
            //   <TooltipText transfer={true} content={row.info.friend} style={{ color: "red" }} />
            // )
          }
        }
      ],
      chainColumns: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'Friend',
          key: 'info.friend'
          // tooltip: true
        }
      ]
    }
  },
  computed: {
    BaseComponents() {
      return groupMap
    },
    componentList() {
      return Object.keys(groupMap)
    }
  },
  mounted() {
    console.log(this.$options.components)
  },
  methods: {
    handleSelectMenu(name) {
      console.log(name)
      // this.currCom = components[name]
    },

    handleCurrentChange(currRow, oldRow) {
      console.log(currRow, oldRow)
    }
  }
}
</script>

<style scoped lang="less">
.home-wrap {
  display: flex;
  gap: 20px;
}

.component-show {
  padding: 20px;
  flex: 1;
  overflow: hidden;
}
</style>
