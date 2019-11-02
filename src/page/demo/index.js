const vue = require('vue');

var app = new vue({
    el: '#app',
    created() {
        console.log('sdf11');
    },
    data: {
        message: 'Hello Vue!'
    }
});