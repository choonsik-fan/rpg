import { CLI } from "./src";

let cmd = new CLI(process.stdin, process.stdout);

cmd.login()
    .then(context => {
        //
    });