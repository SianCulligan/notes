'use strict';

console.log('Where are my dogs?!');
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');


let parsedInput = new Input(process.argv.slice(2));
let notes = new Notes(parsedInput);




















