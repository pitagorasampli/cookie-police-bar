const path = require('path');

const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  entry: path.join(srcPath, 'index.js'),
  mode: 'production',
  module: {
    rules: [
      {
        include: [srcPath],
        loader: 'babel-loader',
        test: /\.js$/,
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'web',
};
