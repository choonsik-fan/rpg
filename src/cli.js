const eventemitter = require('eventemitter3');
const readline = require('node:readline');

export class CLI extends eventemitter {
    constructor(output, input) {
        this.output = output;
        this.input = input;
        this.cli = null;
    }
    async handle(event, ...args) {
        return await emit(event, ...args);
    }
    async login() {
        return new Promise(resolve => {
            this.cli = readline.createInterface({
                input: this.input,
                output: this.output
            });
            resolve(this);
        });
    }
    async question(text) {
        if (this.cli === null)
            await this.login();
        return new Promise(resolve => {
            this.cli.question(text, function (answer) {
                resolve(answer);
            });
        });
    }
}