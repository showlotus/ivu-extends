<template>
  <div class="home-wrap">
    <Menu @on-select="handleSelectMenu">
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
          <tooltip-text
            transfer
            content="hello worldhello worldhello worldhello worldhello worldhello worldhello world"
          />
        </div>
      </comWrap>
    </div>
  </div>
</template>

<script>
import { groupMap, plugins } from "@/components/index"
export default {
  name: "HomeView",
  components: {
    ...plugins,
    comWrap: {
      props: {
        title: { type: String, default: "" }
      },
      render: function (h) {
        return h(
          "div",
          {
            style: {
              padding: "20px 20px 20px 0",
              borderBottom: "1px solid #333"
            }
          },
          [h("h2", [h("i", this.title)]), this.$slots.default]
        )
      }
    }
  },
  data() {
    return {
      currCom: null
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
  mounted() {},
  methods: {
    handleSelectMenu(name) {
      console.log(name)
      // this.currCom = components[name]
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
}
</style>
