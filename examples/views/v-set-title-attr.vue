<template>
  <div class="wrap">
    <Select v-model="model" style="width: 200px">
      <Option
        v-for="item in cityList"
        :value="item.value"
        :key="item.value"
        v-set-title-attr="item.label"
        >{{ item.label }}</Option
      >
    </Select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      model: ''
    }
  },
  created() {
    this.cityList.forEach(item => {
      item.label = item.label.repeat(5)
    })
  }
}
</script>
<style lang="less" scoped>
.wrap {
  padding: 16px;

  /deep/ .ivu-select {
    .ivu-select-dropdown {
      width: 200px;
    }
    .ivu-select-item {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
