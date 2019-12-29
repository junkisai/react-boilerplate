const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  mode: IS_PRODUCTION ? 'production' : 'development',
  entry: `${path.resolve(__dirname)}/src/app/index.jsx`,
  module: {
    rules: [
      {
        enforce: 'pre',
        loader: 'eslint-loader',
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        options: {
          emitErrors: true
        }
      },
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: ['/node_modules/']
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${path.resolve(__dirname)}/dist/index.html`
    })
  ]
};

if (!IS_PRODUCTION) {
  module.exports.devtool = 'source-map';
  module.exports.devServer = {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    port: 8080,
    historyApiFallback: true
  };
}
