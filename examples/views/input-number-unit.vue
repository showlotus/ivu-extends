<template>
  <div class="wrap">
    <Form :label-width="160">
      <FormItem label="小尺寸">
        <InputNumberUnit
          :max="1000000000"
          :min="-10"
          size="small"
          unit="$"
          unit-placement="start"
          v-model="value"
        />
      </FormItem>
      <FormItem label="小尺寸">
        <InputNumberUnit
          :max="1000000000"
          :min="-10"
          size="small"
          unit="%"
          unit-placement="end"
          v-model="value"
        />
      </FormItem>
      <FormItem label="默认尺寸">
        <InputNumberUnit
          :max="1000000000"
          :min="-10"
          unit="￥"
          unit-placement="start"
          v-model="value"
        />
      </FormItem>
      <FormItem label="默认尺寸">
        <InputNumberUnit
          :max="1000000000"
          :min="-10"
          unit="px"
          unit-placement="end"
          v-model="value"
        />
      </FormItem>
      <FormItem label="大尺寸">
        <InputNumberUnit
          :max="1000000000"
          :min="-10"
          :step="2"
          unit="￥"
          unit-placement="end"
          size="large"
          v-model="value"
        >
          <span slot="unit" style="color: red; font-weight: bold">%%%</span>
        </InputNumberUnit>
      </FormItem>
      <FormItem label="大尺寸">
        <InputNumberUnit
          :max="1000000000"
          :min="-10"
          :step="2"
          unit="￥"
          unit-placement="start"
          size="large"
          v-model="value"
        >
          <span slot="unit" style="color: blue; font-weight: bold">###</span>
        </InputNumberUnit>
      </FormItem>
      <FormItem label="大尺寸-未设置单位">
        <InputNumberUnit
          :max="1000000000"
          :min="-10"
          unit-placement="end"
          size="large"
          v-model="value"
        >
        </InputNumberUnit>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { InputNumberUnit } from 'ivu-extends'
export default {
  components: { InputNumberUnit },
  data() {
    return {
      value: 0
    }
  }
}
</script>

<style scoped lang="less">
.wrap {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
