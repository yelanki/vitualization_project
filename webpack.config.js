const path=require('path');
module.exports={
    mode:"development",
    devServer:{
        static:"./dist",
    },
    entry: ['./src/index.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', "css-loader"],
      },
    ]
}
};