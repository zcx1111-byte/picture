const { join } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: join(__dirname, './src/build'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: () => [
                                    require('postcss-flexbugs-fixes'),
                                    require('postcss-preset-env')({
                                        autoprefixer: {
                                            flexbox: 'no-2009',
                                        },
                                        stage: 3,
                                    }),
                                    require('postcss-normalize')(),
                                ],
                                sourceMap: true,
                            },
                        }
                    }

                ]
            },
            {
                //vue-loader 16.x版本会报错，这里用15.x版本,安装vue-loader同时，安装vue-template-compiler
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.(jpg|png|gif)/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }
            },
            {
                test: /\.(ttf|svg|woff|woff2|eot)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: './font',
                    name: '[hash:5].[ext]'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    devServer: {
        open: true,
        port: 3000,
        hot: true,
        compress: true
    }

}