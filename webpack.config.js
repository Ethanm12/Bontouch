const path = require('path');

// NEED TO FINISH IMPLEMENTING THIS.

module.exports = {
    mode: 'development',
    // devtool: 'none',
    entry: "./src/index.js",
    output: {
        filename: "hello.js",
        path: path.resolve(__dirname, "Code"),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 'css-loader', 'sass-loader']  
            }
        ]
    }
};