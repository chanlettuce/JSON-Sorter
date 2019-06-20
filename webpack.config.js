const src = __dirname + "/src";
const dist = __dirname + "/dist";

var webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
        // 対象となるファイルの拡張子(cssのみ)
        test: /\.css$/,
        // Sassファイルの読み込みとコンパイル
        use: [
          // スタイルシートをJSからlinkタグに展開する機能
          "style-loader",
          // CSSをバンドルするための機能
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: "./html/index.html"
    })
  ]
};
