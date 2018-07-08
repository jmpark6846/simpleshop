const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    vendor: ['babel-polyfill'],
    app: ['./src/index.js'],
  },
  output: {
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  devtool: 'inline-source-map',
  module:{
    rules:[
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true, // js파일에서 css 파일을 모듈 처럼 import 할 수 있게 해준다.
              camelCase: true,
              sourceMap: true
            }
          }
        ]

      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include : path.join(__dirname, 'src'),
        use: [{
            loader: 'url-loader',
            options: {
               limit: 30000,
               name: '[name].[ext]'
            }
        }]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    })
  ],

  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true,
  }
    
};