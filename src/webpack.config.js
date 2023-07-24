// webpack.config.js

module.exports = {
    // Other configuration properties...
    resolve: {
      fallback: {
        "crypto": require.resolve("crypto-browserify")
      }
    },
  };
  