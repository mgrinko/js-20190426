const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('NODE_ENV--------------------', process.env.NODE_ENV);
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[contenthash].js',
  },

  devtool: isProduction ? false : 'source-map',

  devServer: {
    contentBase: './public'
  },

  optimization: {
    minimize: isProduction,
    minimizer: [new TerserPlugin()],
  },

  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
  })],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  }
};
