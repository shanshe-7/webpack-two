const chalk = require("chalk");
const DevServer = require("webpack-dev-server");
const hot = require("webpack-hot-middleware");

const { HOST, PORT } = require("./constants");

const webpack = require("webpack");
const getDevConfig = require("./config/webpack.dev");
const compiler = webpack(getDevConfig());

const devServerOptions = {
  port: PORT,
  host: HOST,
  historyApiFallback: true,
  client: {
    overlay: true,
    logging: "none",
  },
  onAfterSetupMiddleware: (devServer) => {
    devServer.app.use(hot(compiler, { log: false }));
  },
};

const server = new DevServer(devServerOptions, compiler);

(async () => {
  await server.start();

  console.log(
    `${chalk.greenBright("server listening on")} ${chalk.blueBright(
      `http://${HOST}:${PORT}`
    )}`
  );
})();
