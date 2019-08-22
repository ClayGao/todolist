const path = require('path');

module.exports = {
  entry: './src/index.js', // 引入的檔案
  output: {
    path: path.resolve(__dirname, 'dist'), // 輸出的位置
    filename: 'index.bundle.js' // * html 要引入的檔案
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      //
      jquery:  'jquery/dist/jquery.min.js' 
    }
  }
};