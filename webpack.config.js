const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const precss = require('precss');
const cssnext = require('cssnext');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const vuxLoader = require('vux-loader');

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
      'third': path.resolve(__dirname, 'node_modules/'),
      'less': path.resolve(__dirname, 'front/styles/less/'),
      'vux-components': 'vux/src/components',
      'rootSrc': path.resolve(__dirname, 'front'),
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue/,
        loader: 'vue'
      },
      {
        test: /vux.src.*?js$/,
        loader: 'babel'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: extractCSS.extract(['css', 'less'])
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose?jQuery!expose?$'
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
    new webpack.ProvidePlugin({
      $: 'jquery'
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

module.exports = vuxLoader.merge(webpackConfig, {
  plugins: [
    {
      name: 'vux-ui'
    },
    {
      name: 'duplicate-style'
    }
  ]
})