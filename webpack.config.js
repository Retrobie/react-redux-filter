const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
};
