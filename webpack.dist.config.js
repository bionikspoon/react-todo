/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */

'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {

    output: {
        publicPath: '/assets/',
        path: 'dist/assets/',
        filename: 'main.js'
    },

    debug: false,
    devtool: false,
    entry: './src/components/main.js',

    stats: {
        colors: true,
        reasons: false
    },

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    ],

    resolve: {
        extensions: [
            '',
            '.js'
        ],
        alias: {
            'actions': path.join(__dirname, 'src/actions/'),
            'components': path.join(__dirname, 'src/components/'),
            'constants': path.join(__dirname, 'src/constants/'),
            'dispatcher': path.join(__dirname, 'src/dispatcher/'),
            'images': path.join(__dirname, 'src/images/'),
            'stores': path.join(__dirname, 'src/stores/'),
            'styles': path.join(__dirname, 'src/styles'),
            'mixins': path.join(__dirname, 'src/mixins')
        }
    },

    module: {
        //preLoaders: [
        //    {
        //        test: /\.js$/,
        //        exclude: /node_modules/,
        //        loader: 'jsxhint'
        //    }
        //],

        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader' + '?optional[]=runtime' + '&stage=0'
                ]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
};
