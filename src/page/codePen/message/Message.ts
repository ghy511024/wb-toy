export class Message {
    private funStack: ((data: string) => any)[];

    constructor() {
        this.init();
        this.funStack = []
    }

    init() {
        window.addEventListener('message', (e) => {
            this.funStack.forEach((fun) => {
                fun(e.data)
            })
        });
    }

    onMessage(e: MessageEvent) {

    }

    listen(fun: (data: string) => any) {
        this.funStack.push(fun);
    }

}