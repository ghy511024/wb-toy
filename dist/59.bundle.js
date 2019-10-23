(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.js":
/*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.js ***!
  \********************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '\\'',\n        blockComment: ['/*', '*/'],\n    },\n    brackets: [\n        ['{', '}'], ['[', ']'], ['(', ')'], ['<', '>'],\n        ['addhandler', 'end addhandler'],\n        ['class', 'end class'],\n        ['enum', 'end enum'],\n        ['event', 'end event'],\n        ['function', 'end function'],\n        ['get', 'end get'],\n        ['if', 'end if'],\n        ['interface', 'end interface'],\n        ['module', 'end module'],\n        ['namespace', 'end namespace'],\n        ['operator', 'end operator'],\n        ['property', 'end property'],\n        ['raiseevent', 'end raiseevent'],\n        ['removehandler', 'end removehandler'],\n        ['select', 'end select'],\n        ['set', 'end set'],\n        ['structure', 'end structure'],\n        ['sub', 'end sub'],\n        ['synclock', 'end synclock'],\n        ['try', 'end try'],\n        ['while', 'end while'],\n        ['with', 'end with'],\n        ['using', 'end using'],\n        ['do', 'loop'],\n        ['for', 'next']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}', notIn: ['string', 'comment'] },\n        { open: '[', close: ']', notIn: ['string', 'comment'] },\n        { open: '(', close: ')', notIn: ['string', 'comment'] },\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\n        { open: '<', close: '>', notIn: ['string', 'comment'] },\n    ],\n    folding: {\n        markers: {\n            start: new RegExp(\"^\\\\s*#Region\\\\b\"),\n            end: new RegExp(\"^\\\\s*#End Region\\\\b\")\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.vb',\n    ignoreCase: true,\n    brackets: [\n        { token: 'delimiter.bracket', open: '{', close: '}' },\n        { token: 'delimiter.array', open: '[', close: ']' },\n        { token: 'delimiter.parenthesis', open: '(', close: ')' },\n        { token: 'delimiter.angle', open: '<', close: '>' },\n        // Special bracket statement pairs\n        // according to https://msdn.microsoft.com/en-us/library/tsw2a11z.aspx\n        { token: 'keyword.tag-addhandler', open: 'addhandler', close: 'end addhandler' },\n        { token: 'keyword.tag-class', open: 'class', close: 'end class' },\n        { token: 'keyword.tag-enum', open: 'enum', close: 'end enum' },\n        { token: 'keyword.tag-event', open: 'event', close: 'end event' },\n        { token: 'keyword.tag-function', open: 'function', close: 'end function' },\n        { token: 'keyword.tag-get', open: 'get', close: 'end get' },\n        { token: 'keyword.tag-if', open: 'if', close: 'end if' },\n        { token: 'keyword.tag-interface', open: 'interface', close: 'end interface' },\n        { token: 'keyword.tag-module', open: 'module', close: 'end module' },\n        { token: 'keyword.tag-namespace', open: 'namespace', close: 'end namespace' },\n        { token: 'keyword.tag-operator', open: 'operator', close: 'end operator' },\n        { token: 'keyword.tag-property', open: 'property', close: 'end property' },\n        { token: 'keyword.tag-raiseevent', open: 'raiseevent', close: 'end raiseevent' },\n        { token: 'keyword.tag-removehandler', open: 'removehandler', close: 'end removehandler' },\n        { token: 'keyword.tag-select', open: 'select', close: 'end select' },\n        { token: 'keyword.tag-set', open: 'set', close: 'end set' },\n        { token: 'keyword.tag-structure', open: 'structure', close: 'end structure' },\n        { token: 'keyword.tag-sub', open: 'sub', close: 'end sub' },\n        { token: 'keyword.tag-synclock', open: 'synclock', close: 'end synclock' },\n        { token: 'keyword.tag-try', open: 'try', close: 'end try' },\n        { token: 'keyword.tag-while', open: 'while', close: 'end while' },\n        { token: 'keyword.tag-with', open: 'with', close: 'end with' },\n        // Other pairs\n        { token: 'keyword.tag-using', open: 'using', close: 'end using' },\n        { token: 'keyword.tag-do', open: 'do', close: 'loop' },\n        { token: 'keyword.tag-for', open: 'for', close: 'next' }\n    ],\n    keywords: [\n        'AddHandler', 'AddressOf', 'Alias', 'And', 'AndAlso', 'As', 'Async', 'Boolean', 'ByRef', 'Byte', 'ByVal', 'Call',\n        'Case', 'Catch', 'CBool', 'CByte', 'CChar', 'CDate', 'CDbl', 'CDec', 'Char', 'CInt', 'Class', 'CLng',\n        'CObj', 'Const', 'Continue', 'CSByte', 'CShort', 'CSng', 'CStr', 'CType', 'CUInt', 'CULng', 'CUShort',\n        'Date', 'Decimal', 'Declare', 'Default', 'Delegate', 'Dim', 'DirectCast', 'Do', 'Double', 'Each', 'Else',\n        'ElseIf', 'End', 'EndIf', 'Enum', 'Erase', 'Error', 'Event', 'Exit', 'False', 'Finally', 'For', 'Friend',\n        'Function', 'Get', 'GetType', 'GetXMLNamespace', 'Global', 'GoSub', 'GoTo', 'Handles', 'If', 'Implements',\n        'Imports', 'In', 'Inherits', 'Integer', 'Interface', 'Is', 'IsNot', 'Let', 'Lib', 'Like', 'Long', 'Loop',\n        'Me', 'Mod', 'Module', 'MustInherit', 'MustOverride', 'MyBase', 'MyClass', 'NameOf', 'Namespace', 'Narrowing', 'New',\n        'Next', 'Not', 'Nothing', 'NotInheritable', 'NotOverridable', 'Object', 'Of', 'On', 'Operator', 'Option',\n        'Optional', 'Or', 'OrElse', 'Out', 'Overloads', 'Overridable', 'Overrides', 'ParamArray', 'Partial',\n        'Private', 'Property', 'Protected', 'Public', 'RaiseEvent', 'ReadOnly', 'ReDim', 'RemoveHandler', 'Resume',\n        'Return', 'SByte', 'Select', 'Set', 'Shadows', 'Shared', 'Short', 'Single', 'Static', 'Step', 'Stop',\n        'String', 'Structure', 'Sub', 'SyncLock', 'Then', 'Throw', 'To', 'True', 'Try', 'TryCast', 'TypeOf',\n        'UInteger', 'ULong', 'UShort', 'Using', 'Variant', 'Wend', 'When', 'While', 'Widening', 'With', 'WithEvents',\n        'WriteOnly', 'Xor'\n    ],\n    tagwords: [\n        'If', 'Sub', 'Select', 'Try', 'Class', 'Enum',\n        'Function', 'Get', 'Interface', 'Module', 'Namespace', 'Operator', 'Set', 'Structure', 'Using', 'While', 'With',\n        'Do', 'Loop', 'For', 'Next', 'Property', 'Continue', 'AddHandler', 'RemoveHandler', 'Event', 'RaiseEvent', 'SyncLock'\n    ],\n    // we include these common regular expressions\n    symbols: /[=><!~?;\\.,:&|+\\-*\\/\\^%]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    integersuffix: /U?[DI%L&S@]?/,\n    floatsuffix: /[R#F!]?/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // whitespace\n            { include: '@whitespace' },\n            // special ending tag-words\n            [/next(?!\\w)/, { token: 'keyword.tag-for' }],\n            [/loop(?!\\w)/, { token: 'keyword.tag-do' }],\n            // usual ending tags\n            [/end\\s+(?!for|do)([a-zA-Z_]\\w*)/, { token: 'keyword.tag-$1' }],\n            // identifiers, tagwords, and keywords\n            [/[a-zA-Z_]\\w*/, {\n                    cases: {\n                        '@tagwords': { token: 'keyword.tag-$0' },\n                        '@keywords': { token: 'keyword.$0' },\n                        '@default': 'identifier'\n                    }\n                }],\n            // Preprocessor directive\n            [/^\\s*#\\w+/, 'keyword'],\n            // numbers\n            [/\\d*\\d+e([\\-+]?\\d+)?(@floatsuffix)/, 'number.float'],\n            [/\\d*\\.\\d+(e[\\-+]?\\d+)?(@floatsuffix)/, 'number.float'],\n            [/&H[0-9a-f]+(@integersuffix)/, 'number.hex'],\n            [/&0[0-7]+(@integersuffix)/, 'number.octal'],\n            [/\\d+(@integersuffix)/, 'number'],\n            // date literal\n            [/#.*#/, 'number'],\n            // delimiters and operators\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/@symbols/, 'delimiter'],\n            // strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"/, 'string', '@string'],\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/(\\'|REM(?!\\w)).*$/, 'comment'],\n        ],\n        string: [\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"C?/, 'string', '@pop']\n        ],\n    },\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.js?");

/***/ })

}]);