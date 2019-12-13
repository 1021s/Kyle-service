const path = require('path');

module.exports = {
  entry: {
    vendors: ['styled-components'],
    main: path.resolve(__dirname, 'client', 'index.js'),
  },
  optimization: {
    runtimeChunk: {
      name: 'vendors',
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          // test: /[\\/]node_modules[\\/]/,
          test: 'vendors',
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  mode: 'development',
  resolve: {
    alias: {
      'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
    },
    extensions: ['.js', '.jsx'],
  },
};
