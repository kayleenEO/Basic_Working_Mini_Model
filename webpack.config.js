module.exports = {
  mode: "development",
  entry: [
    "babel-polyfill", // enables async-await
    "./browser/index.js" // the starting point for our program
  ],
  output: {
    path: __dirname, // the absolute path for the directory where we want the output to be placed
    filename: "./bundle.js" // the name of the file that will contain our output (could be whatever we want) but bundle.js is typical
  },
  devServer: {
    contentBase: "./public"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  }
};
