const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'development',
    entry: {
        "index": './src/page/codepen/index.ts',
        "ts.worker": 'monaco-editor/esm/vs/language/typescript/ts.worker',
    },
    output: {
        globalObject: 'self',
        filename: '[name].bundle.js',
        publicPath: "../dist/",    // 输出解析文件的目录，url 相对于 HTML 页面
        path: path.resolve(__dirname, 'dist')
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
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new VueLoaderPlugin()
    ]
};
