/**
 * https://microsoft.github.io/monaco-editor/api/index.html
 *
 * */

import {editor} from 'monaco-editor';
editor.setTheme('vs-dark')

export class MonacoEditor {
    private monacoEditor: editor.IStandaloneCodeEditor

    constructor(ele: string) {
        console.log('create editor')

        this.monacoEditor = editor.create(<HTMLElement>document.getElementById(ele), {
            // value: [
            //     'function x() {',
            //     '\tconsole.log("Hello world!");',
            //     '}'
            // ].join('\n'),
            language: 'javascript',

        });
    }

    setValue(code: string) {
        this.monacoEditor.setValue(code);

    }

}