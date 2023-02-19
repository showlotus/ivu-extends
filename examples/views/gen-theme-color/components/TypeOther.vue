<template>
  <div>
    <Progress :percent="25" />
    <Progress :percent="45" status="active" />
    <Progress :percent="65" status="wrong" />
    <Progress :percent="100" />
    <Progress :percent="25" hide-info />

    <br />

    <Progress :percent="25" :stroke-width="20" text-inside />
    <Progress :percent="45" :stroke-width="20" status="active" text-inside />
    <Progress :percent="65" :stroke-width="20" status="wrong" text-inside />
    <Progress :percent="100" :stroke-width="20" text-inside />

    <br />

    <Progress vertical :percent="25" />
    <Progress vertical :percent="45" status="active" />
    <Progress vertical :percent="65" status="wrong" />
    <Progress vertical :percent="100" />
    <Progress vertical :percent="25" hide-info />

    <br />

    <Tag color="default">default</Tag>
    <Tag color="primary">primary</Tag>
    <Tag color="success">success</Tag>
    <Tag color="error">error</Tag>
    <Tag color="warning">warning</Tag>
    <Tag color="magenta">magenta</Tag>
    <Tag color="red">red</Tag>
    <Tag color="volcano">volcano</Tag>
    <Tag color="orange">orange</Tag>
    <Tag color="gold">gold</Tag>
    <Tag color="yellow">yellow</Tag>
    <Tag color="lime">lime</Tag>
    <Tag color="green">green</Tag>
    <Tag color="cyan">cyan</Tag>
    <Tag color="blue">blue</Tag>
    <Tag color="geekblue">geekblue</Tag>
    <Tag color="purple">purple</Tag>
    <Tag color="#FFA2D3">Custom Color</Tag>
    <br /><br />
    <Tag type="border" closable color="primary">标签一</Tag>
    <Tag type="border" closable color="success">标签二</Tag>
    <Tag type="border" closable color="error">标签三</Tag>
    <Tag type="border" closable color="warning">标签四</Tag>
    <br /><br />
    <Tag type="dot" closable color="primary">标签一</Tag>
    <Tag type="dot" closable color="success">标签二</Tag>
    <Tag type="dot" closable color="error">标签三</Tag>
    <Tag type="dot" closable color="warning">标签四</Tag>

    <br />

    <Timeline>
      <TimelineItem>
        <p class="time">1976年</p>
        <p class="content">Apple I 问世</p>
      </TimelineItem>
      <TimelineItem>
        <p class="time">1984年</p>
        <p class="content">发布 Macintosh</p>
      </TimelineItem>
      <TimelineItem>
        <p class="time">2007年</p>
        <p class="content">发布 iPhone</p>
      </TimelineItem>
      <TimelineItem>
        <p class="time">2010年</p>
        <p class="content">发布 iPad</p>
      </TimelineItem>
      <TimelineItem>
        <p class="time">2011年10月5日</p>
        <p class="content">史蒂夫·乔布斯去世</p>
      </TimelineItem>
    </Timeline>

    <br />

    <Spin size="small"></Spin>
    <Spin></Spin>
    <Spin size="large"></Spin>

    <Row>
      <Col class="demo-spin-col" span="8">
        <Spin fix>加载中...</Spin>
      </Col>
      <Col class="demo-spin-col" span="8">
        <Spin fix>
          <Icon type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
          <div>Loading</div>
        </Spin>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'TypeOther',
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
.time {
  font-size: 14px;
  font-weight: bold;
}
.content {
  padding-left: 5px;
}
</style>
