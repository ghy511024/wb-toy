export class Message {
    private funStack: ((data: string) => any)[];

    constructor() {
        this.init();
        this.funStack = []
    }

    init() {
        window.addEventListener('message', (e) => {
            let port = e.ports[0];
            port.onmessage = this.onMessage;
        });
    }

    onMessage(e: MessageEvent) {
        this.funStack.forEach((fun) => {
            fun(e.data)
        })
    }

    listen(fun: (data: string) => any) {
        this.funStack.push(fun);
    }

}