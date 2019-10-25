<template>
    <div class="wb-fang-editor">
        <div id="editor"></div>
        <div class="view-panel">

        </div>
    </div>

</template>


<script lang="ts">

    var str = `
    import './index.less'
    import {Vue, Provide, Component, Watch, Prop} from "vue-property-decorator";
    import {MonacoEditor} from './editor/MonacoEditor';
    `

    import './index.less'
    import {Vue, Provide, Component, Watch, Prop} from "vue-property-decorator";
    import {MonacoEditor} from './editor/MonacoEditor';
    import {Message} from './message/Message';

    let editor: MonacoEditor;
    @Component({})
    export default class Index extends Vue {
        @Provide() mdstr: string = 'sdfsd'
        @Provide() message: Message = new Message();

        created() {

        }

        mounted() {
            editor = new MonacoEditor('editor');
            editor.setValue(str)
            this.message.listen((e) => {
                console.log(e);
            })
        }
    };
</script>