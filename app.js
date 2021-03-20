const fs = require('fs');
const notes = require('./notes');
const yargs = require('yargs');


let argv = yargs.argv;
const body = argv.body;
const title = argv.title;
const command = argv._[0];


console.log(command, body, title);

if (command === "add") {
    console.log("adding note");
    notes.addingNote(title, body);
} else if (command === "remove") {
    console.log("removing note");
    notes.removeNote(title);
} else if (command === "list") {
    console.log("listing notes");
}