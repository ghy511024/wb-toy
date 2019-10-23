(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.js ***!
  \************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\$\\^\\&\\*\\(\\)\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\s]+)/g,\n    comments: {\n        blockComment: ['{#', '#}'],\n    },\n    brackets: [\n        ['{#', '#}'],\n        ['{%', '%}'],\n        ['{{', '}}'],\n        ['(', ')'],\n        ['[', ']'],\n        // HTML\n        ['<!--', '-->'],\n        ['<', '>'],\n    ],\n    autoClosingPairs: [\n        { open: '{# ', close: ' #}' },\n        { open: '{% ', close: ' %}' },\n        { open: '{{ ', close: ' }}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ],\n    surroundingPairs: [\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n        // HTML\n        { open: '<', close: '>' },\n    ],\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '',\n    ignoreCase: true,\n    keywords: [\n        // (opening) tags\n        'apply', 'autoescape', 'block', 'deprecated', 'do', 'embed', 'extends',\n        'flush', 'for', 'from', 'if', 'import', 'include', 'macro', 'sandbox',\n        'set', 'use', 'verbatim', 'with',\n        // closing tags\n        'endapply', 'endautoescape', 'endblock', 'endembed', 'endfor', 'endif',\n        'endmacro', 'endsandbox', 'endset', 'endwith',\n        // literals\n        'true', 'false',\n    ],\n    tokenizer: {\n        root: [\n            // whitespace\n            [/\\s+/],\n            // Twig Tag Delimiters\n            [/{#/, 'comment.twig', '@commentState'],\n            [/{%[-~]?/, 'delimiter.twig', '@blockState'],\n            [/{{[-~]?/, 'delimiter.twig', '@variableState'],\n            // HTML\n            [/<!DOCTYPE/, 'metatag.html', '@doctype'],\n            [/<!--/, 'comment.html', '@comment'],\n            [/(<)((?:[\\w\\-]+:)?[\\w\\-]+)(\\s*)(\\/>)/, ['delimiter.html', 'tag.html', '', 'delimiter.html']],\n            [/(<)(script)/, ['delimiter.html', { token: 'tag.html', next: '@script' }]],\n            [/(<)(style)/, ['delimiter.html', { token: 'tag.html', next: '@style' }]],\n            [/(<)((?:[\\w\\-]+:)?[\\w\\-]+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],\n            [/(<\\/)((?:[\\w\\-]+:)?[\\w\\-]+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],\n            [/</, 'delimiter.html'],\n            [/[^<]+/],\n        ],\n        /**\n         * Comment Tag Handling\n         */\n        commentState: [\n            [/#}/, 'comment.twig', '@pop'],\n            [/./, 'comment.twig'],\n        ],\n        /**\n         * Block Tag Handling\n         */\n        blockState: [\n            [/[-~]?%}/, 'delimiter.twig', '@pop'],\n            // whitespace\n            [/\\s+/],\n            // verbatim\n            // Unlike other blocks, verbatim ehas its own state\n            // transition to ensure we mark its contents as strings.\n            [/(verbatim)(\\s*)([-~]?%})/, [\n                    'keyword.twig',\n                    '',\n                    { token: 'delimiter.twig', next: '@rawDataState' },\n                ]],\n            { include: 'expression' }\n        ],\n        rawDataState: [\n            // endverbatim\n            [/({%[-~]?)(\\s*)(endverbatim)(\\s*)([-~]?%})/, [\n                    'delimiter.twig',\n                    '',\n                    'keyword.twig',\n                    '',\n                    { token: 'delimiter.twig', next: '@popall' },\n                ]],\n            [/./, 'string.twig'],\n        ],\n        /**\n         * Variable Tag Handling\n         */\n        variableState: [\n            [/[-~]?}}/, 'delimiter.twig', '@pop'],\n            { include: 'expression' },\n        ],\n        stringState: [\n            // closing double quoted string\n            [/\"/, 'string.twig', '@pop'],\n            // interpolation start\n            [/#{\\s*/, 'string.twig', '@interpolationState'],\n            // string part\n            [/[^#\"\\\\]*(?:(?:\\\\.|#(?!\\{))[^#\"\\\\]*)*/, 'string.twig'],\n        ],\n        interpolationState: [\n            // interpolation end\n            [/}/, 'string.twig', '@pop'],\n            { include: 'expression' },\n        ],\n        /**\n         * Expression Handling\n         */\n        expression: [\n            // whitespace\n            [/\\s+/],\n            // operators - math\n            [/\\+|-|\\/{1,2}|%|\\*{1,2}/, 'operators.twig'],\n            // operators - logic\n            [/(and|or|not|b-and|b-xor|b-or)(\\s+)/, ['operators.twig', '']],\n            // operators - comparison (symbols)\n            [/==|!=|<|>|>=|<=/, 'operators.twig'],\n            // operators - comparison (words)\n            [/(starts with|ends with|matches)(\\s+)/, ['operators.twig', '']],\n            // operators - containment\n            [/(in)(\\s+)/, ['operators.twig', '']],\n            // operators - test\n            [/(is)(\\s+)/, ['operators.twig', '']],\n            // operators - misc\n            [/\\||~|:|\\.{1,2}|\\?{1,2}/, 'operators.twig'],\n            // names\n            [/[^\\W\\d][\\w]*/, {\n                    cases: {\n                        '@keywords': 'keyword.twig',\n                        '@default': 'variable.twig'\n                    }\n                }],\n            // numbers\n            [/\\d+(\\.\\d+)?/, 'number.twig'],\n            // punctuation\n            [/\\(|\\)|\\[|\\]|{|}|,/, 'delimiter.twig'],\n            // strings\n            [/\"([^#\"\\\\]*(?:\\\\.[^#\"\\\\]*)*)\"|\\'([^\\'\\\\]*(?:\\\\.[^\\'\\\\]*)*)\\'/, 'string.twig'],\n            // opening double quoted string\n            [/\"/, 'string.twig', '@stringState'],\n            // misc syntactic constructs\n            // These are not operators per se, but for the purposes of lexical analysis we\n            // can treat them as such.\n            // arrow functions\n            [/=>/, 'operators.twig'],\n            // assignment\n            [/=/, 'operators.twig'],\n        ],\n        /**\n         * HTML\n         */\n        doctype: [\n            [/[^>]+/, 'metatag.content.html'],\n            [/>/, 'metatag.html', '@pop'],\n        ],\n        comment: [\n            [/-->/, 'comment.html', '@pop'],\n            [/[^-]+/, 'comment.content.html'],\n            [/./, 'comment.content.html']\n        ],\n        otherTag: [\n            [/\\/?>/, 'delimiter.html', '@pop'],\n            [/\"([^\"]*)\"/, 'attribute.value.html'],\n            [/'([^']*)'/, 'attribute.value.html'],\n            [/[\\w\\-]+/, 'attribute.name.html'],\n            [/=/, 'delimiter.html'],\n            [/[ \\t\\r\\n]+/],\n        ],\n        // -- BEGIN <script> tags handling\n        // After <script\n        script: [\n            [/type/, 'attribute.name.html', '@scriptAfterType'],\n            [/\"([^\"]*)\"/, 'attribute.value.html'],\n            [/'([^']*)'/, 'attribute.value.html'],\n            [/[\\w\\-]+/, 'attribute.name.html'],\n            [/=/, 'delimiter.html'],\n            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded', nextEmbedded: 'text/javascript' }],\n            [/[ \\t\\r\\n]+/],\n            [/(<\\/)(script\\s*)(>)/, ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]]\n        ],\n        // After <script ... type\n        scriptAfterType: [\n            [/=/, 'delimiter.html', '@scriptAfterTypeEquals'],\n            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded', nextEmbedded: 'text/javascript' }],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <script ... type =\n        scriptAfterTypeEquals: [\n            [/\"([^\"]*)\"/, { token: 'attribute.value.html', switchTo: '@scriptWithCustomType.$1' }],\n            [/'([^']*)'/, { token: 'attribute.value.html', switchTo: '@scriptWithCustomType.$1' }],\n            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded', nextEmbedded: 'text/javascript' }],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <script ... type = $S2\n        scriptWithCustomType: [\n            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.$S2', nextEmbedded: '$S2' }],\n            [/\"([^\"]*)\"/, 'attribute.value.html'],\n            [/'([^']*)'/, 'attribute.value.html'],\n            [/[\\w\\-]+/, 'attribute.name.html'],\n            [/=/, 'delimiter.html'],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        scriptEmbedded: [\n            [/<\\/script/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],\n            [/[^<]+/, '']\n        ],\n        // -- END <script> tags handling\n        // -- BEGIN <style> tags handling\n        // After <style\n        style: [\n            [/type/, 'attribute.name.html', '@styleAfterType'],\n            [/\"([^\"]*)\"/, 'attribute.value.html'],\n            [/'([^']*)'/, 'attribute.value.html'],\n            [/[\\w\\-]+/, 'attribute.name.html'],\n            [/=/, 'delimiter.html'],\n            [/>/, { token: 'delimiter.html', next: '@styleEmbedded', nextEmbedded: 'text/css' }],\n            [/[ \\t\\r\\n]+/],\n            [/(<\\/)(style\\s*)(>)/, ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]]\n        ],\n        // After <style ... type\n        styleAfterType: [\n            [/=/, 'delimiter.html', '@styleAfterTypeEquals'],\n            [/>/, { token: 'delimiter.html', next: '@styleEmbedded', nextEmbedded: 'text/css' }],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <style ... type =\n        styleAfterTypeEquals: [\n            [/\"([^\"]*)\"/, { token: 'attribute.value.html', switchTo: '@styleWithCustomType.$1' }],\n            [/'([^']*)'/, { token: 'attribute.value.html', switchTo: '@styleWithCustomType.$1' }],\n            [/>/, { token: 'delimiter.html', next: '@styleEmbedded', nextEmbedded: 'text/css' }],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <style ... type = $S2\n        styleWithCustomType: [\n            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.$S2', nextEmbedded: '$S2' }],\n            [/\"([^\"]*)\"/, 'attribute.value.html'],\n            [/'([^']*)'/, 'attribute.value.html'],\n            [/[\\w\\-]+/, 'attribute.name.html'],\n            [/=/, 'delimiter.html'],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        styleEmbedded: [\n            [/<\\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],\n            [/[^<]+/, '']\n        ],\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.js?");

/***/ })

}]);