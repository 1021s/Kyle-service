const path = require('path');


module.exports = {
    entry: path.resolve(__dirname, 'client', 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/, 
                use: 'babel-loader'
            }
        ]
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
