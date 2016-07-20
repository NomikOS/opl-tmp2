module.exports = {
  // the main entry of our app
  // entry: ['./src/index.js', './src/director/index.js'],
  entry: [ './src/index.js' ],
  // output configuration
  output: {
    path: __dirname + '/build/',
    publicPath: 'build/',
    filename: 'build.js'
  },
  // how modules should be transformed
  module: {
    loaders: [
      // process *.vue files using vue-loader
      { test: /\.vue$/, loader: 'vue' },
      // process *.js files using babel-loader
      // the exclude pattern is important so that we don't
      // apply babel transform to all the dependencies!
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   loader: "file-loader?name=img/img-[hash:6].[ext]"
      // },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'url',
      query: {
        // limit for base64 inlining in bytes
        limit: 10000,
        // custom naming format if file is larger than
        // the threshold
        name: '[name].[ext]?[hash]'
      }
    }
    ]
  },
  // configure babel-loader.
  // this also applies to the JavaScript inside *.vue files
  babel: {
    presets: [ 'es2015' ],
    plugins: [ 'transform-runtime' ]
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: '"production"'
  //     }
  //   }),
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false
  //     }
  //   })
  // ]  
}