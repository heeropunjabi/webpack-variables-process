var webpack = require('webpack');

var config = {
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source
  entry: {
    app: './app.js',
  },
  devServer: {
    open: true, // to open the local server in browser
    contentBase: __dirname + '/src',
  },
  output: {
    path: __dirname + '/dist', // `dist` is the destination
    publicPath: "/assets/",
    filename: 'bundle.js',
  },
  plugins:[
    new webpack.EnvironmentPlugin({
        BASE_URL:'http://localhost:3000',       // this is used as default value when not passed from cmd // Heero
        API_URL: 'http://localhost:3001'
    })
  ],
};

module.exports = config;