module.exports = {
    entry: "./src/inline-editor.js",
    output: {
        path: __dirname,
        filename: "inline-editor.js",
        libraryTarget: "umd",
        library: 'InlineContentEditor'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};