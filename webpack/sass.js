const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer')
module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.sass$/,
                    use: ExtractTextPlugin.extract(
                        {
                            fallback: 'style-loader',
                            use: [{
                                loader: 'css-loader'
                            }, {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: [
                                        autoprefixer({
                                            browsers:['ie >= 8', 'last 15 versions']
                                        })
                                    ]
                                }
                            }, {
                                loader: 'sass-loader'
                            }]
                        }
                    )
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin({
                filename: 'css/style.css',
                allChunks: true,
            }),
        ]
    }
}