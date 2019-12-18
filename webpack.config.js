const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    'vue-base': path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'vue-base',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['*', '.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
    ],
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  externals: {
    'ally.js': 'ally.js',
    'lodash': 'lodash',
    'portal-vue': 'portal-vue',
    quill: 'quill',
    vue: 'vue',
    vuex: 'vuex',
  },
};
