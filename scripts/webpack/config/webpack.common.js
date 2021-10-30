const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { BUILD_DIRECTORY, SOURCE_DIRECTORY } = require("../constants");

module.exports = () => {
  return {
    stats: "errors-only",
    mode: "none",
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
      new MiniCssExtractPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.js$/,
          use: { loader: "babel-loader" },
        },
      ],
    },
  };
};

// module.exports = Promise.resolve({
//   mode: "none",
//   devtool: false,
// });
