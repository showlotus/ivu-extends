<template>
  <div class="wrap">
    <div :class="toolBarCls" v-resize:200.immediate="handleResizeLeft">{{ leftWidth }}</div>
    <div ref="boxRef" class="right" v-resize:200.immediate="handleResizeRight">
      {{ rightWidth }}
      <div v-if="showBox" class="box" v-resize:200.immediate="handleResizeBox">{{ boxWidth }}</div>
      <div class="ops-btn">
        <button @click="expand = !expand">expand</button>
        <button @click="showBox = !showBox">toggle show box</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-resize',
  data() {
    return {
      expand: true,
      showBox: true,
      leftWidth: null,
      rightWidth: null,
      boxWidth: null
    }
  },
  computed: {
    toolBarCls() {
      return [
        'tool-bar',
        {
          expand: this.expand
        }
      ]
    }
  },
  mounted() {},
  methods: {
    handleResizeLeft(ops) {
      this.leftWidth = ops.width
      console.log(ops)
    },
    handleResizeRight({ width }) {
      this.rightWidth = width
    },
    handleResizeBox({ width }) {
      this.boxWidth = width
    }
  }
}
</script>

<style scoped lang="less">
.wrap {
  display: flex;
  height: 100vh;

  .tool-bar {
    width: 80px;
    padding: 10px;
    background: lightblue;
    transition: 0.3s;

    &.expand {
      width: 200px;
    }
  }

  .right {
    flex: 1;
    padding: 10px;
    background-color: #ffb8b8;

    .ops-btn {
      display: flex;
      gap: 10px;
    }
  }
}

.box {
  margin: 20px;
  width: 70%;
  height: 20vw;
  background-color: #bfa;
  border-radius: 10px;
  box-shadow: 0 0 4px #ccc;
}
</style>
