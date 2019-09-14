const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

module.exports = () => {
  const basePath = path.join(__dirname) + '/.env';
  const envPath = basePath + '.' + process.env.NODE_ENV;

  // check if file exists, otherwise fall back to production .env
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const fileEnv = dotenv.config({ path: finalPath }).parsed;

  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(process.env[next]);
    return prev;
  }, {});

  return {
    entry: __dirname + '/client/src/index.jsx',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true
              }
            }
          ]
        }]},
    output: {
      filename: 'bundle.js',
      path: __dirname + '/public/dist/'
    },
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ]
  };
};
