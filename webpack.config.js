require('dotenv').load();

var webpack = require('webpack');
var s = JSON.stringify;
var p = JSON.parse;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'script.js',
    path: __dirname + '/public/dist/'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx|es6)$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.es6']
  },
  plugins: [
    new webpack.DefinePlugin({
      _API_: s(process.env.API),
      _ROOT_URI_: s(process.env.ROOT_URI),
      _ENV_: s(process.env.NODE_ENV),
      _DEV_: s(process.env.NODE_ENV !== 'production'),
      _PRODUCTION_: s(process.env.NODE_ENV === 'production'),
      _IMG_: s(process.env.IMG),
      _CDN_: s(process.env.CDN),
      _REDUX_DEVTOOLS_: p(process.env.REDUX_DEVTOOLS)
    })
  ]
};
