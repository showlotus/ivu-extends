<template>
  <div class="toggle-theme-wrap">
    <ColorPicker
      v-model="themeColor"
      placement="right-end"
      class="toggle-theme"
      @on-active-change="handleActiveChange"
    />

    <Tabs value="TypeTree" :animated="false" style="width: 100%; height: 100%">
      <TabPane label="TypeButton" name="TypeButton"><TypeButton /></TabPane>
      <TabPane label="TypeCard" name="TypeCard"><TypeCard /></TabPane>
      <TabPane label="TypeCell" name="TypeCell"><TypeCell /></TabPane>
      <TabPane label="TypeMenu" name="TypeMenu"><TypeMenu /></TabPane>
      <TabPane label="TypeNav" name="TypeNav"><TypeNav /></TabPane>
      <TabPane label="TypeForm" name="TypeForm"><TypeForm /></TabPane>
      <TabPane label="TypeForm2" name="TypeForm2"><TypeForm2 /></TabPane>
      <TabPane label="TypeTable" name="TypeTable"><TypeTable /></TabPane>
      <TabPane label="TypeTree" name="TypeTree"><TypeTree /></TabPane>
      <TabPane label="TypeOther" name="TypeOther"><TypeOther /></TabPane>
    </Tabs>
  </div>
</template>

<script>
import TypeButton from './components/TypeButton.vue'
import TypeCard from './components/TypeCard.vue'
import TypeCell from './components/TypeCell.vue'
import TypeMenu from './components/TypeMenu.vue'
import TypeNav from './components/TypeNav.vue'
import TypeForm from './components/TypeForm.vue'
import TypeForm2 from './components/TypeForm2.vue'
import TypeTable from './components/TypeTable.vue'
import TypeTree from './components/TypeTree.vue'
import TypeOther from './components/TypeOther.vue'

import { genThemeColor } from '../../../src/index'

export default {
  name: 'gen-theme-color',
  components: {
    TypeButton,
    TypeCard,
    TypeCell,
    TypeMenu,
    TypeNav,
    TypeForm,
    TypeTable,
    TypeForm2,
    TypeTree,
    TypeOther
  },
  data() {
    return {
      themeColor: '#EA5A45'
    }
  },
  computed: {},
  mounted() {
    // this.$genThemeColor(this.themeColor)
    genThemeColor(this.themeColor)
  },
  methods: {
    handleActiveChange(color) {
      this.themeColor = color
      genThemeColor(color)
    }
  }
}
</script>

<style lang="less" scoped>
.toggle-theme-wrap {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  padding: 10px;

  .toggle-theme {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999;
  }
}

:deep(.ivu-tabs .ivu-tabs-tabpane) {
  padding: 10px;
  height: calc(100vh - 80px);
  overflow: auto;
}
</style>
