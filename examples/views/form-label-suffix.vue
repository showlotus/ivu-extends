<template>
  <div>
    <Form :label-width="160" label-colon="：">
      <Row>
        <Col :span="6">
          <FormItem label="姓名" :label-width="60">
            <Input></Input>
          </FormItem>
        </Col>
        <Col :span="6">
          <FormItem label="年龄">
            <Input></Input>
          </FormItem>
        </Col>
      </Row>
      <FormItem label="性别">
        <Input></Input>
        <Form :label-width="60">
          <FormItem label="住址">
            <Input></Input>
          </FormItem>
        </Form>
      </FormItem>
      <FormItem label="">
        <Input></Input>
        <FormItem label="empty-label">
          <Input></Input>
        </FormItem>
      </FormItem>
      <span>
        extra span
        <FormItem label="国家">
          <Input></Input>
          <FormItem label="国家">
            <Input></Input>
            <FormItem label="国家" :label-width="80">
              <Input></Input>
            </FormItem>
          </FormItem>
        </FormItem>
      </span>
    </Form>
  </div>
</template>

<script>
import { FormLabelSuffix } from 'ivu-extends'
export default {
  name: 'form-label-suffix',
  components: {
    Form: FormLabelSuffix
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="less"></style>
