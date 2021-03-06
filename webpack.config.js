const HtmlWebpackPlugin = require("html-webpack-plugin");

const src = __dirname + "/src";
const dist = __dirname + "/dist";

module.exports = {
  mode: process.env.NODE_ENV || "development",
  context: src,
  entry: "./js/index.js",
  output: {
    path: dist,
    filename: "index.min.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./html/index.html"
    })
  ]
};
