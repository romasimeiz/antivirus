const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';
const SOURCE_PATH = path.join(__dirname, './client');
const PUBLIC_PATH = path.join(__dirname, './' + (isProduction ? 'production' : 'static'));

require('dotenv').config({path: isProduction ? '.env.production' : '.env'});

module.exports = function () {
    const plugins = [
        new CleanWebpackPlugin(PUBLIC_PATH + '/*'),
        new ExtractTextPlugin('assets/css/style.css'),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            },
            API_URL: JSON.stringify(process.env.API_URL),
            PER_PAGE: JSON.stringify(process.env.PER_PAGE)
        }),
        new CopyWebpackPlugin([
            {
                from: SOURCE_PATH + '/assets/img/*',
                to: PUBLIC_PATH
            }
        ])
    ];

    if (isProduction) {
        plugins.push(
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: true
            })
        );
    } else {
        plugins.push(
            new webpack.HotModuleReplacementPlugin()
        );
    }

    return {
        devtool: isProduction ? 'source-map' : 'eval',
        context: SOURCE_PATH,
        entry: {
            js: './index.js',
            vendor: ['react']
        },
        output: {
            path: PUBLIC_PATH,
            filename: 'assets/js/[name].bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'file-loader',
                        query: {
                            name: '[name].[ext]'
                        }
                    }
                },
                {
                    test: /\.(jsx?)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015', 'es2016', 'stage-0'],
                        plugins: ["transform-object-rest-spread", 'transform-runtime']
                    }
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader:'css-loader',
                                options: {
                                    root: '.'
                                }
                            }
                        ]
                    })
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader','sass-loader']
                    })
                },
                {
                    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                    loader: 'url-loader',
                    options: {
                        name: '/[path][name].[ext]',
                        limit: 10000
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
            modules: [
                path.resolve(__dirname, 'node_modules'),
                SOURCE_PATH
            ]
        },
        performance: isProduction && {
            maxAssetSize: 100,
            maxEntrypointSize: 300,
            hints: 'warning'
        },

        devServer: {
            contentBase: './client',
            historyApiFallback: true,
            port: 3000,
            compress: isProduction,
            inline: !isProduction,
            hot: !isProduction,
            stats: {
                assets: true,
                children: false,
                chunks: false,
                hash: false,
                modules: false,
                publicPath: false,
                timings: true,
                version: false,
                warnings: true,
                colors: {
                    green: '\u001b[32m'
                }
            }
        },

        plugins: plugins
    };
};
