import FormLabelSuffix from '@/components/form-label-suffix/index.js'
import InputNumberUnit from '@/components/input-number-unit/index.js'
import SelectUnion from '@/components/select-union/index.js'
import TableChain from '@/components/table-chain/index.js'
import TooltipText from '@/components/tooltip-text/index.js'
import modifyOpacity from '@/directives/modify-opacity.js'
import resize from '@/directives/resize.js'
import scrollTo from '@/directives/scroll-to.js'
import setTitleAttr from '@/directives/set-title-attr.js'

const components = [FormLabelSuffix, InputNumberUnit, SelectUnion, TableChain, TooltipText]
const directives = [modifyOpacity, resize, scrollTo, setTitleAttr]

const install = function (Vue, _ops = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  directives.forEach(directive => {
    Vue.directive(directive.name, directive)
  })
}

export {
  FormLabelSuffix,
  InputNumberUnit,
  SelectUnion,
  TableChain,
  TooltipText,
  modifyOpacity,
  resize,
  scrollTo,
  setTitleAttr
}

export default {
  version: '1.0.0',
  install,
  FormLabelSuffix,
  InputNumberUnit,
  SelectUnion,
  TableChain,
  TooltipText,
  modifyOpacity,
  resize,
  scrollTo,
  setTitleAttr
}
