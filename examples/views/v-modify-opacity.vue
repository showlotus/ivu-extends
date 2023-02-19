<template>
  <div>
    <div class="item">
      <span>未绑定 modify-opacity：{{ color }}</span>
      <ColorPicker v-model="color" alpha />
    </div>
    <div class="item">
      <span>绑定 modify-opacity：{{ color }}</span>
      <ColorPicker v-model="color" alpha v-modify-opacity />
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-modify-opacity',
  data() {
    return {
      color: 'rgba(0, 0, 0, 0)'
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="less">
.item {
  margin-bottom: 20px;
  padding: 16px;
}
</style>
