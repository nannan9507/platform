const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var precss = require('precss');
var cssnext = require('cssnext');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');


const extractCSS = new ExtractTextPlugin('styles/style.css')

const webpackConfig = {
  entry: ['./front/main.js'],
  output: {
    path: path.resolve('./server/dist'),
    publicPath: '/dist/',
    filename: 'scripts/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.css', '.less'],
    alias: {
      'pages': path.resolve(__dirname, 'front/pages'),
      'components': path.resolve(__dirname, 'front/pages/components'),
      'third': path.resolve(__dirname, 'node_modules/')
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue/,
        loader: 'vue',
        exclude: /node_modules/
      },
      {
        test: /\.js/,
        loader: 'babel',
        exclude: (path) => {
          return !!path.match(/node_modules/);
        }
      },
      {
        test: /\.less$/,
        loader: extractCSS.extract(['css', 'less'])
      }
    ]
  },
  postcss: function () {
    return [autoprefixer, precss, cssnano, cssnext]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/server/template/production.ejs',
      hash: true,
      filename: __dirname + '/server/views/index.ejs',
      inject: 'body'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
        drop_console: true,
        pure_funcs: ['console.log']
      },
      mangle: {
        except: ['$', 'exports', 'require']
      }
    }),
    new webpack.NoErrorsPlugin(),
    extractCSS
  ]
}

if (process.env.NODE_ENV === 'development') {
  const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

  webpackConfig.entry.push(hotMiddlewareScript);
  webpackConfig.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    extractCSS
  ];
}

module.exports = webpackConfig;