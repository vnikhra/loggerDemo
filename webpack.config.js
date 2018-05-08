module.exports = {
    devtool: "inline-source-map",
    entry: './reactApp.js',
    output: {
        path: __dirname,
        filename: "app.min.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.js$/,
                include: /redux-helper`/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};