const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development", 
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js", 
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        host: 'localhost',
        port: 5000,
        hot: true,
        proxy: {
          '/search': 'http://localhost:3000',
        },
      },
      resolve: {
        extensions: ['.js', '.jsx']
      },
      module: {
        rules: [
          {
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
        ],
      },
      
    devtool: "source-map",
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Search',
        template: path.resolve(__dirname, 'index.html'),
        excludeChunks: ['polyfills'],
      }),
    ]
}