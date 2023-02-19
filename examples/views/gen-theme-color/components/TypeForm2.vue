<template>
  <div>
    <Transfer
      :data="data1"
      :target-keys="targetKeys1"
      :render-format="render1"
      @on-change="handleChange1"
    ></Transfer>

    <Rate v-model="value" />

    <br />

    <Rate allow-half v-model="valueHalf" />

    <br />

    <Row>
      <Col span="12">
        <Rate show-text v-model="valueText" />
      </Col>
      <Col span="12">
        <Rate show-text allow-half v-model="valueCustomText">
          <span style="color: #f5a623">{{ valueCustomText }}</span>
        </Rate>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'TypeForm2',
  data() {
    return {
      value: 1,
      data1: this.getMockData(),
      targetKeys1: this.getTargetKeys(),
      valueHalf: 2.5,
      valueText: 3,
      valueCustomText: 3.8,
    };
  },
  methods: {
    getMockData() {
      let mockData = [];
      for (let i = 1; i <= 20; i++) {
        mockData.push({
          key: i.toString(),
          label: 'Content ' + i,
          description: 'The desc of content  ' + i,
          disabled: Math.random() * 3 < 1,
        });
      }
      return mockData;
    },
    getTargetKeys() {
      return this.getMockData()
        .filter(() => Math.random() * 2 > 1)
        .map((item) => item.key);
    },
    render1(item) {
      return item.label;
    },
    handleChange1(newTargetKeys, direction, moveKeys) {
      console.log(newTargetKeys);
      console.log(direction);
      console.log(moveKeys);
      this.targetKeys1 = newTargetKeys;
    },
  },
};
</script>

<style scoped lang="less"></style>
