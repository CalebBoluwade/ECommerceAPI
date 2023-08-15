import path from "path";
// import {} from "webpack";
import nodeExternals from "webpack-node-externals";

const Config = {
  entry: {
    main: "./DIST/Main.js",
  },
  output: {
    path: path.join(__dirname, "dist", "DEV"),
    publicPath: "/",
    filename: "[name].js",
    clean: true,
  },
  mode: "development",
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

export default Config;
