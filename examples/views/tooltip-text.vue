<template>
  <div class="wrap">
    <TooltipText
      class="item tip"
      content="1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquid consectetur veritatis asperiores nostrum modi voluptatem aperiam eaque quas? Debitis deserunt corrupti veritatis, ipsam sunt eos odit vitae exercitationem tenetur."
    >
      <div style="display: flex">
        <div class="title">
          1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquid consectetur
          veritatis asperiores nostrum modi voluptatem aperiam eaque quas? Debitis deserunt corrupti
          veritatis, ipsam sunt eos odit vitae exercitationem tenetur.
        </div>
        <div class="icon">🤡</div>
      </div>
    </TooltipText>
    <TooltipText
      class="item tip"
      content="2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquid consectetur veritatis asperiores nostrum modi voluptatem aperiam eaque quas? Debitis deserunt corrupti veritatis, ipsam sunt eos odit vitae exercitationem tenetur."
    >
      <div style="display: flex">
        <div class="title">
          2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquid consectetur
          veritatis asperiores nostrum modi voluptatem aperiam eaque quas? Debitis deserunt corrupti
          veritatis, ipsam sunt eos odit vitae exercitationem tenetur.
        </div>
        <div class="icon">🤡</div>
      </div>
    </TooltipText>
    <TooltipText
      class="item tip"
      content="3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquid consectetur"
    >
      <div style="display: flex">
        <div class="title">
          3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquid consectetur
        </div>
        <div class="icon">🤡</div>
      </div>
    </TooltipText>
    <TooltipText
      class="item tip"
      content="4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquid consectetur"
    >
      <div style="display: flex">
        <div class="title">
          4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquid consectetur
        </div>
        <div class="icon">🤡</div>
      </div>
    </TooltipText>
    <TooltipText
      class="item tip"
      content="5. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    >
      <div style="display: flex">
        <div class="title">5. Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div class="icon">🤡</div>
      </div>
    </TooltipText>
    <TooltipText
      class="item tip"
      content="6. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    >
      <div style="display: flex">
        <div class="title">6. Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div class="icon">🤡</div>
      </div>
    </TooltipText>
    <TooltipText
      class="item tip"
      content="7. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus"
    >
      <div style="display: flex">
        <div class="title">
          7. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        </div>
        <div class="icon">🤡</div>
      </div>
    </TooltipText>
    <div style="width: 100px">
      <TooltipText>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</TooltipText>
    </div>
    <div style="width: 100px">
      <TooltipText content="bbb">
        <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<span>bbbbbbb</span>aaaaaaaa</div>
      </TooltipText>
    </div>
  </div>
</template>

<script>
import { TooltipText } from 'ivu-extends'

export default {
  components: { TooltipText },
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.wrap .item {
  display: flex;

  .title {
    flex: 0 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: lightblue;
  }

  .icon {
    padding-left: 10px;
    background-color: beige;
  }

  .tip {
    background-color: lightcoral;
  }
}
</style>
