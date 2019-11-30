const path = require('path');


module.exports = {
    entry: path.resolve(__dirname, 'client'),
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','@babel/preset-env', '@babel/preset-react']
                    }

                }
            }
        ]
    },
    mode: 'development'
}