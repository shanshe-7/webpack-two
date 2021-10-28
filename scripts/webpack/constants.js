const { resolve } = require("path");
const { path: ROOT_PATH } = require("app-root-path");

exports.BUILD_DIRECTORY = resolve(ROOT_PATH, "./build");
exports.SOURCE_DIRECTORY = resolve(ROOT_PATH, "./source");
exports.HOST = "localhost";
exports.PORT = 3000;

exports.PROJECT_ROOT = ROOT_PATH;
