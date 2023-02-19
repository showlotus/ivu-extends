<template>
  <div class="ivu-select-union-wrap">
    <Button @click="handleAdd">add</Button>
    <Button @click="handleRemove">remove</Button>
    <div class="ivu-select-union-inner" :style="dynamicWidth">
      <SelectUnion
        v-for="(_, key) in formData"
        :key="key"
        v-model="formData[key]"
        clearable
        :group="parseInt(key.slice(-1)) % 2"
        :class="parseInt(key.slice(-1)) % 2 ? 'even' : 'odd'"
        @on-change="handleChange"
      >
        <Option value="a">A</Option>
        <Option value="b">B</Option>
        <Option value="c">C</Option>
      </SelectUnion>
    </div>
  </div>
</template>

<script>
import { SelectUnion } from 'ivu-extends'
export default {
  name: 'select-union',
  components: { SelectUnion },
  data() {
    return {
      formData: {
        select1: '',
        select2: '',
        select3: '',
        select4: ''
      }
    }
  },
  computed: {
    dynamicWidth() {
      return {
        width: `${Object.keys(this.formData).length * 100}px`
      }
    }
  },
  methods: {
    handleAdd() {
      const newKey = Object.keys(this.formData).length
      this.$set(this.formData, `select${newKey + 1}`, '')
    },
    handleRemove() {
      const lastKey = Object.keys(this.formData).at(-1)
      this.$delete(this.formData, lastKey)
    },
    handleChange(val) {
      console.log('change', val)
    }
  }
}
</script>

<style lang="less" scoped>
.ivu-select-union-wrap {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .ivu-select-union-inner {
    display: flex;
    gap: 20px;
  }

  /deep/ .ivu-select {
    &.odd {
      box-shadow: 0 0 4px lightcoral;
    }

    &.even {
      box-shadow: 0 0 4px lightblue;
    }
  }
}
</style>
