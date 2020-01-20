const config = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname + '/build',
    filename: 'adalia-map.js'
  },
  module: {
    rules: [
      {
        loader:'babel-loader',
        test: /\.js$/,
        exclude:  /node_modules/,
        query: {
           presets: ['es2015'] 
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  devServer:{
    port: 3000,
    contentBase: __dirname + '/build',
    inline: true
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
}
module.exports = config;
