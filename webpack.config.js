const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require("webpack");
const deps = require("./package.json").dependencies;
module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    publicPath: "http://localhost:3000/",
  },
  devServer: {
    port: 3000,
    historyApiFallback:{
        index:'index.html'
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin({
      activeModules: true,
    }),
    new ModuleFederationPlugin({
      name: "Host",
      filename: "remoteEntry.js", // Specify the filename for remoteEntry.js
      remotes: {
        // subAppOne: "subAppOne@http://localhost:3005/remoteEntry.js",
        subAppTwo: "subAppTwo@https://master.dv99pvqx8qd1l.amplifyapp.com/remoteEntry.js",
      },
      // exposes:{
      //     './UserLoggedIn':'./src/UserLoggedIn.js'
      // },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        // "react-router-dom": { singleton: true },
        // Include other shared dependencies as needed
      },
    }),
  ],
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins:['@babel/plugin-transform-runtime']
              },
            },
          },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
    ],
},
resolve: {
    extensions: ['.js','.jsx'],
},
};
