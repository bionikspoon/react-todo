/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');
var path = require('path');

module.exports = {

    output: {
        filename: 'main.js',
        publicPath: '/assets/'
    },

    cache: true,
    debug: true,
    devtool: "eval-source-map",
    entry: [
        'webpack/hot/only-dev-server',
        './src/components/main.js'
    ],

    stats: {
        colors: true,
        reasons: true
    },

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
        //        loader: 'jsxhint?babel-experimental'
        //    }
        //],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot',
                    'babel-loader' + '?optional[]=runtime' + '&stage=0'
                ]
            },
            {
                test: /\.scss/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader?outputStyle=expanded'
                ]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]

};
