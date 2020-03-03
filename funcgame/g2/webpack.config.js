// Note this only includes basic configuration for development mode.
// For a more comprehensive configuration check:
// https://github.com/fable-compiler/webpack-config-template

var path = require("path");

module.exports = {
    mode: "development",
    entry: {
        app1: "./app1/src/App.fsproj",
        app2: "./app2/src/App.fsproj"
    },
    output: {
        path: path.join(__dirname, "./public"),
        filename: "[name].bundle.js",
    },
    devServer: {
        contentBase: "./public",
        port: 8080,
    },
    module: {
        rules: [{
            test: /\.fs(x|proj)?$/,
            use: "fable-loader"
        }]
    }
}