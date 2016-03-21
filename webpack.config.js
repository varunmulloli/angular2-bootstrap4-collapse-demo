var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'public', 'src','index.js'),
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'vendor.js',
    publicPath: "public/dist/"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
            presets: ['es2015']
        }
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" }, 
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" }, 
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  }
}