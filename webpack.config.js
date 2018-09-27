const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    umdNamedDefine: true,
    // library: 'domske',
    globalObject: 'this'
  }
};
