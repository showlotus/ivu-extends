<template>
  <div id="app">
    <h3>组件</h3>

    <router-link tag="button" class="link-btn" to="/form-label-suffix"
      >form-label-suffix</router-link
    >
    <router-link tag="button" class="link-btn" to="/input-number-unit"
      >input-number-unit</router-link
    >
    <router-link tag="button" class="link-btn" to="/select-union">select-union</router-link>
    <router-link tag="button" class="link-btn" to="/table-column-key-chain"
      >table-column-key-chain</router-link
    >
    <router-link tag="button" class="link-btn" to="/tooltip-text">tooltip-text</router-link>

    <h3>指令</h3>

    <router-link tag="button" class="link-btn" to="/v-modify-opacity">v-modify-opacity</router-link>
    <router-link tag="button" class="link-btn" to="/v-resize">v-resize</router-link>
    <router-link tag="button" class="link-btn" to="/v-scroll-to">v-scroll-to</router-link>
    <router-link tag="button" class="link-btn" to="/v-set-title-attr">v-set-title-attr</router-link>

    <h3>主题切换</h3>

    <router-link tag="button" class="link-btn" to="/gen-theme-color">gen-theme-color</router-link>

    <router-view class="main" />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="less">
#app {
  padding: 16px;
}

.main {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #fff;
}

.link-btn {
  padding: 0 5px;
}
</style>
