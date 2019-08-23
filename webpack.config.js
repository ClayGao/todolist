const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js', // 引入的檔案
  output: {
    path: path.resolve(__dirname, 'dist'), // 輸出的位置
    filename: 'index.bundle.js' // * html 要引入的檔案
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ["style-loader","css-loader"]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader:"file-loader",
        options:{
          name:'[name].[ext]',
          outputPath:'assets/images/'
          //the images will be emited to dist/assets/images/ folder
        }
      },
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
      jquery:  'jquery/dist/jquery.min.js',
      "jquery-ui": "jquery-ui/jquery-ui.js",  
      'jquery-ui': path.resolve('./node_modules/jquery-ui/ui'),      
      // bind to modules;
      modules: path.join(__dirname, "node_modules"),
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      jquery: "jquery",
      "window.jQuery": "jquery",
      "window.$": "jquery"
    })
  ]
};