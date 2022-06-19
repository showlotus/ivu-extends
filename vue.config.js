const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  devServer: { port: 8989 },
  transpileDependencies: true
})
