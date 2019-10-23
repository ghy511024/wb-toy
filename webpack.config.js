const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        "app": './src/index.js',
        // "editor.worker": 'monaco-editor/esm/vs/editor/editor.worker.js',
        // "json.worker": 'monaco-editor/esm/vs/language/json/json.worker',
        // "css.worker": 'monaco-editor/esm/vs/language/css/css.worker',
        // "html.worker": 'monaco-editor/esm/vs/language/html/html.worker',
    },
    output: {
        globalObject: 'self',
        filename: '[name].bundle.js',
        publicPath: "../dist/",    // 输出解析文件的目录，url 相对于 HTML 页面
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    externals: {
        // "monaco-editor": "monaco-editor"
    }
};
