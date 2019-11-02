const webpack = require('webpack');

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = {
    mode: 'development',
    entry: {
        "index": path.resolve(__dirname, './index.js',)
    },
    output: {
        globalObject: 'window',
        filename: '[name].js',
        publicPath: "./out/",    // 输出解析文件的目录，url 相对于 HTML 页面
        path: path.resolve(__dirname, './out')
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
                enforce: "post",
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".json", ".jsx", ".css"],
    },
    externals: {
        'vue': 'window.Vue',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new VueLoaderPlugin()
    ]
};


webpack(config, (error, stats) => {
    console.log(error,'完成了311......')
})