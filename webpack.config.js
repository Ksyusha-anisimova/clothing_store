const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const isDev = process.env.NODE_ENV !== 'production'

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    mode: isDev ? 'development' : 'production',

    output: {
        filename: isDev ? 'bundle.js' : 'assets/js/[name].[contenthash:8].js',
        assetModuleFilename: 'assets/media/[name].[hash][ext][query]',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },

    devtool: isDev ? 'eval-source-map' : 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },

    module: {
        rules: [

            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: [
                            ['@babel/preset-env', { targets: 'defaults', modules: false }],
                            ['@babel/preset-react', { runtime: 'automatic', development: isDev }],
                            '@babel/preset-typescript'
                        ],
                        plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean)
                    }
                }
            },


            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },


            {
                test: /\.html$/i,
                loader: 'html-loader'
            },


            {
                test: /\.svg$/i,
                oneOf: [
                    {
                        resourceQuery: /react/,
                        use: ['@svgr/webpack']
                    },
                    {
                        type: 'asset/resource'
                    }
                ]
            },


            {
                test: /\.(png|jpe?g|gif|webp|avif)$/i,
                type: 'asset/resource'
            },


            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
            failOnError: !isDev
        }),
        ...(isDev ? [new ReactRefreshWebpackPlugin()] : [])
    ],

    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 3001,
        proxy: [
            {
                context: ["/api", "/images"],
                target: "http://localhost:8080"
            }
        ],
        open: true,
        hot: true,
        historyApiFallback: true
    },

    optimization: {
        splitChunks: isDev ? false : { chunks: 'all' },
        runtimeChunk: isDev ? false : 'single'
    }
}
