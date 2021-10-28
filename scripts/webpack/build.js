const chalk = require("chalk");

const webpack = require("webpack");
const getConfig = require("./webpack.config");
const compiler = webpack(getConfig());

compiler.hooks.beforeRun.tap({ name: "start" }, () => {
  console.log("started");
});

compiler.run((error, stats) => {
  if (error) {
    console.log(error.stack || error);
    if (error.details) {
      console.log(error.details);
    }
    return null;
  }

  const info = stats.toString({
    hash: true,
    modules: false,
    entryPoints: false,
    colors: true,
    env: true,
  });

  console.log(chalk.greenBright("build completed"));
  console.log(info);

  if (stats.hasErrors()) {
    console.log(chalk.redBright("Error!"));
    console.log(info);
  }

  if (stats.hasWarnings()) {
    console.log(chalk.yellowBright("Warning!"));
    console.log(info);
  }
});
