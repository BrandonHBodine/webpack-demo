const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    page1: './src/js/page1.js',
    page2: './src/js/page2.js'
  },
  devServer: {
      contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: './src/index.html',
      chunks: ['page1']
    }), 
    new HtmlWebpackPlugin({
      title: 'PAGE 2 template',
      filename: 'page2.html',
      template: 'src/page2.html',
      chunks: ['page2'],
    })

  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production'
};