const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const getCommonConfig = require("./webpack.common");
const { BUILD_DIRECTORY, PROJECT_ROOT } = require("../constants");

const cleanOptions = {
  root: PROJECT_ROOT,
  verbose: true,
  cleanAfterEveryBuildPatterns: BUILD_DIRECTORY,
};

module.exports = () => {
  return merge(getCommonConfig(), {
    plugins: [new CleanWebpackPlugin(cleanOptions)],
  });
};

// module.exports = Promise.resolve({
//   mode: "none",
//   devtool: false,
// });
