module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [['@babel/preset-env']],
          },
        },
      },
    ],
  },
}
