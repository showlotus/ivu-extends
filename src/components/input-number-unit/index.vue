<template>
  <div :class="wrapClasses">
    <div :class="unitClasses">
      <slot v-if="$slots.unit" name="unit" />
      <span v-else>{{ unit }}</span>
    </div>
    <InputNumber
      :size="size"
      v-bind="$attrs"
      v-model="currValue"
      @on-focus="handleFocus"
      @on-blur="handleBlur"
    ></InputNumber>
  </div>
</template>

<script>
import { InputNumber } from 'view-design'

const prefixCls = 'ivu-input-number-unit'

export default {
  name: 'InputNumberUnit',
  components: { InputNumber },
  props: {
    value: {
      type: Number
    },
    size: {
      type: String,
      default: 'default'
    },
    unit: {
      type: String,
      default: ''
    },
    unitPlacement: {
      type: String,
      default: 'start',
      validator: val => ['start', 'end'].includes(val)
    }
  },
  data() {
    return {
      isFocused: false
    }
  },
  computed: {
    currValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    hasUnit() {
      return this.$slots.unit || this.unit
    },
    wrapClasses() {
      return [
        `${prefixCls}-wrap`,
        `ivu-input-number-${this.size}`,
        {
          [`${prefixCls}-start`]: this.unitInStart,
          [`${prefixCls}-end`]: this.unitInEnd,
          [`${prefixCls}-focus`]: this.isFocused,
          [`${prefixCls}-none-unit`]: !this.hasUnit
        }
      ]
    },
    unitClasses() {
      return {
        'unit-in-end': this.unitInEnd
      }
    },
    unitInStart() {
      return this.unit && this.unitPlacement === 'start'
    },
    unitInEnd() {
      return this.unit && this.unitPlacement === 'end'
    }
  },
  methods: {
    handleFocus() {
      this.isFocused = true
    },
    handleBlur() {
      this.isFocused = false
    }
  }
}
</script>

<style scoped lang="less">
.ivu-input-number-unit {
  &-wrap {
    display: flex;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #dcdee2;
    transition: all 0.2s linear;

    &:hover {
      border-color: #57a3f3;
    }

    /deep/ .ivu-input-number {
      flex: 1;
      border: none;

      &-small {
        height: 22px;
      }

      &-large {
        height: 38px;
      }

      &-focused {
        box-shadow: none;
      }

      .ivu-input-number-handler-wrap {
        display: none;
      }
    }

    .unit-in-end {
      order: 2;
    }
  }

  &-start {
    padding-left: 7px;
  }

  &-end {
    padding-right: 7px;
  }

  &-focus {
    border-color: #57a3f3;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(45, 140, 240, 0.2);
  }

  &-none-unit {
    padding-right: 0;

    /deep/ .ivu-input-number .ivu-input-number-handler-wrap {
      display: block;
    }
  }
}
</style>
