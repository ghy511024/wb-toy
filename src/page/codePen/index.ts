
import {Vue} from "vue-property-decorator";
import app from './index.vue';

declare global {
    interface Window {
        MonacoEnvironment: { getWorkerUrl: (moduleId: string, label: string) => (string) };
    }
}

self.MonacoEnvironment = {
    getWorkerUrl: function (moduleId: string, label: string) {
        if (label === 'json') {
            return './json.worker.bundle.js';
        }
        if (label === 'css') {
            return './css.worker.bundle.js';
        }
        if (label === 'html') {
            return './html.worker.bundle.js';
        }
        if (label === 'typescript' || label === 'javascript') {
            return '../dist/ts.worker.bundle.js';
        }
        return '../dist/ts.worker.bundle.js';
    }
}

new Vue({
    el: '#app',
    render: function (h) {
        return h(app)
    }
});