const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'development',
    entry: {
        "index": './src/page/demo/index.js',
        // "ts.worker": 'monaco-editor/esm/vs/language/typescript/ts.worker',
    },
    output: {
        globalObject: 'self',
        filename: '[name].bundle.js',
        publicPath: "../dist/",    // 输出解析文件的目录，url 相对于 HTML 页面
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimize: true,
        chunkIds: 'named',//设置chunk为对应name
        occurrenceOrder: true,
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 100,
            name: false,
            cacheGroups: {
                commons: {
                    name: 'vendor',
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: false,
                },
                styles: {
                    name: 'vendor',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true, // 是否单独提取css文件
                }
            },
            {
                test: /\.less$|\.css/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.jsx?$/,
                enforce: "pre",
                enforce: "post",
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".json", ".jsx", ".css"],
    },
    externals:{
        'vue':'window.Vue',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new VueLoaderPlugin()
    ]
};

