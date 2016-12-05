var webpack = require('webpack')

var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    entry: {
        'v-qrcode': './index.js'
    },

    output: {
        filename: './dist/[name].js',

        library: 'VQrcode',

        libraryTarget: 'umd',

        umdNamedDefine: true
    },

    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },

    devtool: '#source-map',

    plugins: (function () {
        return (
            isProduction
            ? [
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    }
                }),

                new webpack.BannerPlugin('(c) ' + new Date().getFullYear() + ' wxp. All Rights Reserved')
            ]
            : []
            )
            .concat([])
    })()
};
