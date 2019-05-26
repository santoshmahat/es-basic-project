const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:path.resolve(__dirname,'src/index.js'),
  output:{
    path:path.resolve(__dirname,'build/dist'),
    filename:"bundle.js"
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:{
          loader:"babel-loader",
          options:{
            presets:["@babel/preset-env"],
            plugins:["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test:/\.css$/,
        use:[
          "style-loader", "css-loader"
        ]
      }
    ]
  },
  mode:"development",
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ]
}