<template>
  <div class="v-scroll-wrap">
    <div class="btn-group">
      <button @click="handleReset">reset</button>
      <button @click="handlePush">push</button>
      <button @click="handleShift">shift</button>
      <button @click="modalVisible = true">open Modal</button>
    </div>
    <div v-if="hiddenAll" class="content-wrap">
      <div>
        <h3 class="title">div</h3>
        <div
          class="content"
          v-scroll-to="{
            top: `handleShift`,
            bottom: `handlePush`,
            selector: ''
          }"
        >
          <div v-for="t in list" :key="t.id" class="item">{{ t.name }}</div>
        </div>
      </div>
      <div style="width: 200px">
        <h3 class="title">ivu-table</h3>
        <Table
          :data="list"
          :columns="columns"
          :height="400"
          border
          v-scroll-to="{
            top: `handleShift`,
            bottom: `handlePush`,
            selector: `.ivu-table-body`
          }"
        ></Table>
      </div>
      <div style="width: 200px">
        <h3 class="title">ivu-table no-header</h3>
        <Table
          :data="list"
          :columns="columns"
          :height="400"
          :show-header="false"
          border
          v-scroll-to="{
            top: `handleShift`,
            bottom: `handlePush`,
            selector: `.ivu-table-body`
          }"
        ></Table>
      </div>
    </div>

    <Modal
      v-model="modalVisible"
      title="这是一个弹窗"
      class-name="vertical-center-modal"
      v-scroll-to="{
        top: `handleModalShift`,
        bottom: `handleModalPush`,
        selector: '.ivu-modal-body'
      }"
    >
      <div class="btn-group">
        <button @click="handleReset">reset</button>
        <button @click="handleModalPush">push</button>
        <button @click="handleModalShift">shift</button>
      </div>
      <div class="content">
        <div v-for="t in list" :key="t.id" class="item">{{ t.name }}</div>
      </div>
    </Modal>
  </div>
</template>

<script>
const genData = (n = 10) => new Array(n).fill(0).map((_, i) => ({ id: i, name: `Tom-${i}` }))

export default {
  name: 'v-scroll-to',
  data() {
    return {
      list: genData(),
      columns: [
        {
          title: 'Name',
          key: 'name'
        }
      ],
      modalVisible: false,
      hiddenAll: true
    }
  },
  methods: {
    handleReset() {
      this.list = genData()
      this.hiddenAll = !this.hiddenAll
    },
    handlePush() {
      console.log('push')
      const lastItemId = this.list[this.list.length - 1].id + 1
      const newItem = { id: lastItemId, name: `Tom-${lastItemId}` }
      this.list.push(newItem)
    },
    handleShift() {
      console.log('shift')
      this.list.shift()
    },
    handleModalShift() {
      this.list.shift()
    },
    async handleModalPush() {
      const lastItemId = this.list[this.list.length - 1].id + 1
      const newItem = { id: lastItemId, name: `Tom-${lastItemId}` }
      this.list.push(newItem)
    }
  }
}
</script>

<style lang="less">
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;

  .ivu-modal {
    top: 0;
  }

  .ivu-modal-body {
    height: 400px;
    overflow: auto;

    .btn-group {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    .content {
      height: auto;
    }
  }
}
</style>

<style lang="less" scoped>
.v-scroll-wrap {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.btn-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.content-wrap {
  display: flex;
  gap: 20px;
}

.content {
  width: 200px;
  height: 400px;
  overflow: auto;
  border: 1px solid #dcdee2;

  .item {
    height: 30px;
    border-bottom: 1px solid #dcdee2;
  }

  .item:not(:last-child) {
    margin-bottom: 10px;
  }
}

.title {
  text-align: center;
}
</style>
