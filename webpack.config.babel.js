'use strict'

import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const abs = (...values) => {
    let p = [__dirname].concat(values);

    return path.resolve.apply(null, p);
};

const srcPath = abs('src')

const outputPath = abs('dist')

const isProduction = process.env.NODE_ENV === 'production'

const assetsPath = isProduction ? '/v-qrcode/dist/' : '/'

export default {
    context: srcPath,

    entry: {
        index: ['./index.js']
    },

    output: {
        path: outputPath,

        filename: '[name].js',

        publicPath: assetsPath
    },

    module: {
        preLoaders: [
            // {
            //     test: /\.js$/,
            //     loader: 'fecs-loader',
            //     exclude: /node_modules/
            // }
        ],

        loaders: [
            {
                test: /\.html$/,
                loader: 'html'
            },

            {
                test: /\.vue$/,
                loader: 'vue'
            },

            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ],

        noParse: /\.min\.js/
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],

    // https://github.com/vuejs/vue/wiki/Vue-2.0-RC-Starter-Resources
    resolve: {
        root: srcPath,

        alias: {
            vue: 'vue/dist/vue.js'
        },

        extensions: ['', '.vue', '.js']
    }
};
