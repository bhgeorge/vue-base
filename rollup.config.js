const path = require('path');
const alias = require('rollup-plugin-import-alias');
const commonjs = require('rollup-plugin-commonjs');
const VuePlugin = require('rollup-plugin-vue');
const JsonPlugin = require('rollup-plugin-json');

module.exports = {
  input: path.resolve(__dirname, './src/index.js'),
  output: {
    file: path.resolve(__dirname, 'dist/vue-base.js'),
    format: 'cjs',
    exports: 'named',
    sourceMap: true,
  },
  plugins: [
    alias({
      Paths: {
        '@': './src',
      },
      Extensions: ['js', 'vue'],
    }),
    commonjs(),
    VuePlugin(),
    JsonPlugin(),
  ],
  external: [
    'vue',
    'vuex',
    'portal-vue',
    'quill',
    'ally.js',
    'lodash',
    'vue-runtime-helpers',
  ],
};
