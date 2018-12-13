module.exports = function() {
    return {
        module: {
            rules: [{
                test: /\.(gif|png|jpe?g|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img/',
                    publicPath: '../img'
                }
            }]
        }
    }
};