const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
             {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    "eslint-loader"
                ]
            },
            {
                test: /\.(c|le)ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx"],
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@containers": path.resolve(__dirname, "src/containers")
        }
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};