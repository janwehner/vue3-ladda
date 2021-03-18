const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const { merge } = require('webpack-merge');

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: './src/index.js',
  output: {
    library: 'VueLadda',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist'),
    filename: 'vue-ladda.js'
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
  ],
  optimization: {
    minimize: true,
  },
});
