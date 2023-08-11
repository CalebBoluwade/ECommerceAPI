const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: {
    main: "./DIST/Main.js",
  },
  output: {
    path: path.join(__dirname, "dist", "PROD"),
    publicPath: "/",
    filename: "[name].js",
    clean: true,
  },
  mode: "production",
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};