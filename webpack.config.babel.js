"use strict";

module.exports = function (env = {}) {

    let path = require("path");
    let HtmlWebpackPlugin = require('html-webpack-plugin');

    const publicPath = path.resolve(__dirname, 'public');
    const jsPath = path.resolve(publicPath, 'js');

    console.log(env);

    return {
        // entry: "./index.js",
        entry: {
            bundle: './index.js',
        },
        output: {
            path: jsPath,
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    resourceQuery: /workers/,
                    use: { loader: 'worker-loader' }
                }
            ]
        },

        devServer: {
            contentBase: publicPath
        },

        plugins: [
            new HtmlWebpackPlugin()
        ]
    };

};