<template>
  <Tooltip
    style="width: 100%; display: flex"
    transfer
    :max-width="300"
    :disabled="!showTooltip"
    :content="text"
    v-bind="$props"
    v-on="$listeners"
  >
    <div ref="content" class="content" @mouseenter="handleTooltipIn">
      <slot />
    </div>
  </Tooltip>
</template>
<script>
import { Tooltip } from 'view-design'

export default {
  name: 'IveTooltipText',
  components: { Tooltip },
  props: {
    ...Tooltip.props,
    color: {
      type: String,
      default: '#fff'
    },
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showTooltip: false
    }
  },
  computed: {
    text() {
      return this.content || (this.$slots.default && this.$slots.default[0].text) || ''
    }
  },
  methods: {
    handleTooltipIn() {
      const $content = this.$refs.content.children[0]
      let range = document.createRange()
      range.setStart($content, 0)
      range.setEnd($content, $content.childNodes.length)
      const rangeWidth = range.getBoundingClientRect().width
      const inOffset = o => rangeWidth - $content.offsetWidth > o // 可接受的偏移范围内
      this.showTooltip = rangeWidth > $content.offsetWidth && inOffset(1)
      range = null
    }
  }
}
</script>

<style scoped>
.content {
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
