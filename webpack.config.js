const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    static: path.join(__dirname, 'public'),
    hot: true,
    port: 3340,
  },
  entry: path.resolve(__dirname, 'src', 'index.js'),
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
        test: /\.js$/,
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  target: 'web',
};
