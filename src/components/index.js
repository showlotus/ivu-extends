const allComponents = require.context("./", true, /((\w+-)+\w+)\/\1\.vue/)
/* eslint-disable */
export const groupMap = {}
export const plugins = {}
allComponents.keys().forEach(path => {
  const name = path.match(/(?:\w+-)+\w+\.vue$/)[0]
  const group = name.replace(/(-\w+)+\.vue$/, "")
  groupMap[group]
  if (!groupMap[group]) {
    groupMap[group] = []
  }
  const currComponent = allComponents(path).default
  const formatName = name.replace(/\.vue/, "")
  plugins[formatName] = currComponent
  groupMap[group].push(currComponent)
})
