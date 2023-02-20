import FormLabelSuffix from '@/components/form-label-suffix/index.js'
import InputNumberUnit from '@/components/input-number-unit/index.js'
import SelectUnion from '@/components/select-union/index.js'
import TableColumnKeyChain from '@/components/table-column-key-chain/index.js'
import TooltipText from '@/components/tooltip-text/index.js'
import genThemeColor from '@/utils/genThemeColor.js'
import modifyOpacity from '@/directives/modify-opacity.js'
import resize from '@/directives/resize.js'
import scrollTo from '@/directives/scroll-to.js'
import setTitleAttr from '@/directives/set-title-attr.js'
import { version } from '../package.json'

const components = [FormLabelSuffix, InputNumberUnit, SelectUnion, TableColumnKeyChain, TooltipText]
const directives = [modifyOpacity, resize, scrollTo, setTitleAttr]

const install = function (Vue, _ops = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  directives.forEach(directive => {
    Vue.directive(directive.name, directive)
  })

  Vue.prototype.$genThemeColor = genThemeColor
}

export {
  FormLabelSuffix,
  genThemeColor,
  InputNumberUnit,
  SelectUnion,
  TableColumnKeyChain,
  TooltipText,
  modifyOpacity,
  resize,
  scrollTo,
  setTitleAttr
}

export default {
  version,
  install,
  FormLabelSuffix,
  genThemeColor,
  InputNumberUnit,
  SelectUnion,
  TableColumnKeyChain,
  TooltipText,
  modifyOpacity,
  resize,
  scrollTo,
  setTitleAttr
}
