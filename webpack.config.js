const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
  	main : './src/js/main.js',
  	module : './src/js/module-1.js',
    // vendor : ['lodash', ...], 直接鎖定特定package
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module : {
    rules : [
      {
        test:/\.js$/, //看JS結尾的file
        exclude: [/node_modules],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'es2015', {
                    modules: false //不要看module的檔案
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  },
  // automatic venod bundling, part of lodash
  plugins: [new webpack.optimize.CommonsChunkPlugin({
  	name : 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity
  })]
};