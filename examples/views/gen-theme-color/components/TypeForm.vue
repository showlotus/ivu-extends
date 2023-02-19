<template>
  <div>
    <Form :model="formItem" :label-width="80">
      <FormItem label="Input">
        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="Select">
        <Select v-model="formItem.select">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem label="DatePicker">
        <Row>
          <Col span="11">
            <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="11">
            <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="Radio">
        <RadioGroup v-model="formItem.radio">
          <Radio label="male">Male</Radio>
          <Radio label="female">Female</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="Checkbox">
        <CheckboxGroup v-model="formItem.checkbox">
          <Checkbox label="Eat"></Checkbox>
          <Checkbox label="Sleep"></Checkbox>
          <Checkbox label="Run"></Checkbox>
          <Checkbox label="Movie"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="Switch">
        <i-switch v-model="formItem.switch" size="large">
          <span slot="open">On</span>
          <span slot="close">Off</span>
        </i-switch>
      </FormItem>
      <FormItem label="Slider">
        <Slider v-model="formItem.slider" range></Slider>
      </FormItem>
      <FormItem label="Text">
        <Input
          v-model="formItem.textarea"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 5 }"
          placeholder="Enter something..."
        ></Input>
      </FormItem>
      <FormItem>
        <Button type="primary">Submit</Button>
        <Button style="margin-left: 8px">Cancel</Button>
      </FormItem>
    </Form>

    <Select v-model="model1" style="width: 200px">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{
        item.label
      }}</Option>
    </Select>

    <br />

    <Row>
      <Col span="12">
        <DatePicker
          :value="value1"
          format="yyyy年MM月dd日"
          type="date"
          placeholder="Select date"
          style="width: 200px"
        ></DatePicker>
      </Col>
      <Col span="12">
        <DatePicker
          :value="value2"
          format="yyyy/MM/dd"
          type="daterange"
          placement="bottom-end"
          placeholder="Select date"
          style="width: 200px"
        ></DatePicker>
      </Col>
    </Row>

    <br />

    <Row>
      <Col span="12">
        <TimePicker type="time" placeholder="Select time" style="width: 168px"></TimePicker>
      </Col>
      <Col span="12">
        <TimePicker
          type="timerange"
          placement="bottom-end"
          placeholder="Select time"
          style="width: 168px"
        ></TimePicker>
      </Col>
    </Row>

    <br />

    <RadioGroup v-model="phone">
      <Radio label="apple">
        <Icon type="logo-apple"></Icon>
        <span>Apple</span>
      </Radio>
      <Radio label="android">
        <Icon type="logo-android"></Icon>
        <span>Android</span>
      </Radio>
      <Radio label="windows">
        <Icon type="logo-windows"></Icon>
        <span>Windows</span>
      </Radio>
    </RadioGroup>

    <br />

    <Cascader :data="data" v-model="value3"></Cascader>

    <i-switch :value="true" />

    <Slider v-model="sliderVal" style="width: 300px"></Slider>

    <Progress :percent="sliderVal" style="width: 300px" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: '',
      },

      phone: 'apple',
      sliderVal: 50,
      cityList: [
        {
          value: 'New York',
          label: 'New York',
        },
        {
          value: 'London',
          label: 'London',
        },
        {
          value: 'Sydney',
          label: 'Sydney',
        },
        {
          value: 'Ottawa',
          label: 'Ottawa',
        },
        {
          value: 'Paris',
          label: 'Paris',
        },
        {
          value: 'Canberra',
          label: 'Canberra',
        },
      ],
      model1: '',

      value1: '2016-01-01',
      value2: ['2016-01-01', '2016-02-15'],

      value3: [],
      data: [
        {
          value: 'beijing',
          label: '北京',
          children: [
            {
              value: 'gugong',
              label: '故宫',
            },
            {
              value: 'tiantan',
              label: '天坛',
            },
            {
              value: 'wangfujing',
              label: '王府井',
            },
          ],
        },
        {
          value: 'jiangsu',
          label: '江苏',
          children: [
            {
              value: 'nanjing',
              label: '南京',
              children: [
                {
                  value: 'fuzimiao',
                  label: '夫子庙',
                },
              ],
            },
            {
              value: 'suzhou',
              label: '苏州',
              children: [
                {
                  value: 'zhuozhengyuan',
                  label: '拙政园',
                },
                {
                  value: 'shizilin',
                  label: '狮子林',
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
