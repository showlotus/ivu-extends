<template>
  <div>
    <Page :total="100" show-total />
    <br />
    <Page :total="40" size="small" />
    <br />
    <Page :total="40" size="small" show-elevator show-sizer />
    <br />
    <Page :total="40" size="small" show-total />
    <br />

    <Steps :current="1">
      <Step title="已完成" content="这里是该步骤的描述信息"></Step>
      <Step title="进行中" content="这里是该步骤的描述信息"></Step>
      <Step title="待进行" content="这里是该步骤的描述信息"></Step>
      <Step title="待进行" content="这里是该步骤的描述信息"></Step>
    </Steps>

    <Steps :current="2" direction="vertical">
      <Step title="已完成" content="这里是该步骤的描述信息"></Step>
      <Step title="已完成" content="这里是该步骤的描述信息"></Step>
      <Step title="进行中" content="这里是该步骤的描述信息"></Step>
      <Step title="待进行" content="这里是该步骤的描述信息"></Step>
    </Steps>
  </div>
</template>

<script>
export default {
  name: 'TypeForm',
  data() {
    return {};
  },
};
</script>

<style scoped lang="less"></style>
