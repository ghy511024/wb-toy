const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        "monaco": './src/monaco.js',
        // "editor.worker": 'monaco-editor/esm/vs/editor/editor.worker.js',
        // "json.worker": 'monaco-editor/esm/vs/language/json/json.worker',
        // "css.worker": 'monaco-editor/esm/vs/language/css/css.worker',
        // "html.worker": 'monaco-editor/esm/vs/language/html/html.worker',
    },
    output: {
        globalObject: 'self',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: "monaco",
        libraryTarget: "window",//"window"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }]
    },
    externals: {
        // "monaco-editor": "monaco-editor"
    }
};
