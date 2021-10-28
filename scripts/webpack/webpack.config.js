const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

const {
  BUILD_DIRECTORY,
  PROJECT_ROOT,
  SOURCE_DIRECTORY,
} = require("./constants");

const cleanOptions = {
  root: PROJECT_ROOT,
  verbose: true,
  cleanAfterEveryBuildPatterns: BUILD_DIRECTORY,
};

module.exports = () => {
  return {
    stats: "errors-only",
    mode: "none",
    devtool: false,
    entry: SOURCE_DIRECTORY,
    output: {
      path: BUILD_DIRECTORY,
      filename: "bundle.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./static/template.html",
        title: "Webpack",
      }),
      new CleanWebpackPlugin(cleanOptions),
      new MiniCssExtractPlugin(),
      new HotModuleReplacementPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  };
};

// module.exports = Promise.resolve({
//   mode: "none",
//   devtool: false,
// });
