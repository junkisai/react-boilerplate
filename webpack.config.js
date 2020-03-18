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
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: [/node_modules/],
        options: {
          emitErrors: true
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: ['/node_modules/']
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp|otf|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
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
      template: `${path.resolve(__dirname)}/public/index.html`
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
