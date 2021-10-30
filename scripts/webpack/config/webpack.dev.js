const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");

const getCommonConfig = require("./webpack.common");

module.exports = () => {
  return merge(getCommonConfig(), {
    plugins: [new HotModuleReplacementPlugin()],
  });
};

// module.exports = Promise.resolve({
//   mode: "none",
//   devtool: false,
// });
