const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'app.[contenthash].js',
        clean: true
    },

    devServer : {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port:3166,
        open:true,
        hot:true
    },

    plugins:[
        new HtmlWebpackPlugin({
            title:"Redux App",
            filename:'index.html',
            template:'src/index.html'
        })
    ]
}