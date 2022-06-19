<template>
  <Tooltip
    style="width: 100%; display: flex"
    :max-width="maxWidth"
    :disabled="!showTooltip"
    :content="content"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div
      ref="content"
      style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis"
      @mouseenter="handleTooltipIn"
    >
      {{ content }}
    </div>
  </Tooltip>
</template>
<script>
import { Tooltip } from "view-design"
export default {
  name: "tooltip-text",
  inheritAttrs: false,
  components: { Tooltip },
  props: {
    maxWidth: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      content: "",
      showTooltip: false
    }
  },
  mounted() {
    const { content } = this.$attrs
    if (content) {
      this.content = content
      return
    }
    if (this.$slots.default) {
      this.content = this.$slots.default[0].text
    }
  },
  methods: {
    handleTooltipIn() {
      const $content = this.$refs.content
      let range = document.createRange()
      range.setStart($content, 0)
      range.setEnd($content, $content.childNodes.length)
      const rangeWidth = range.getBoundingClientRect().width
      this.showTooltip = rangeWidth > $content.offsetWidth
      range = null
    }
  }
}
</script>
