'use strict'

var path = require('path')
var webpack = require('webpack')

var MiniCssExtractPlugin = require('mini-css-extract-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlHardDiskPlugin = require('html-webpack-harddisk-plugin')
var Autoprefixer = require('autoprefixer')

function join(dest) {
  return path.resolve(__dirname, dest)
}

module.exports = {
  entry: {
    app: [
      join('src/index.pug'),
      join('src/sass/main.sass'),
    ],
 },

  output: {
    path: join('dist'),
    publicPath: '/',
  },

  resolve: {
    alias: {
      '@': join('src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [Autoprefixer],
            },
          },
          'sass-loader?indentedSyntax',
        ],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              // attrs: ['img:src', 'link:href', 'meta:content']
              attrs: ['img:src', 'link:href']
            }
          },
          'pug-html-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images',
          },
        }],
      },
      {
        test: /\.(ico|xml|webmanifest)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './',
          },
        }],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: join('src/index.pug'),
      alwaysWriteToDisk: true,
    }),
    new HtmlHardDiskPlugin(),
  ],

  devServer: {
    watchOptions: {
      ignored: /node_modules/,
    },
    historyApiFallback: true,
    stats: 'errors-only',
    overlay: {
      errors: true,
      warnings: false
    },
  },
}
