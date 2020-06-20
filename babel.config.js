module.exports = {
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: false,
        regenerator: false,
        corejs: false,
      },
    ],
  ],
}
