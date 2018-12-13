const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const pug = require('./webpack/pug');
const babel = require('./webpack/babel');
const sass = require('./webpack/sass');
const copyFonts = require('./webpack/copyFonts');
const fileLoader = require('./webpack/file-loader');

const common = merge([ 
    {
        entry: './src/js/index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'js/script.js'
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'src/index.pug'
            }),
        ],
    },
    pug(),
    babel(),
    sass(),
    fileLoader(),
    copyFonts(),
]);

module.exports = function(env, argv) {
    return merge([
        common
    ]);
};