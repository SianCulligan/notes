'use strict';

const Input = require('../lib/input.js');
const Note = require('../lib/notes.js');

//list out bad example notes
let badNoteA = new Input([]);
let badNoteB = new Input(['WRONG NOTE']);
let badNoteC = new Input(['-b', 'WRONG NOTE']);
let badNoteD = new Input(['-a', '']); 

// list good notes
let goodNote = new Input(['-a', 'this is a note!']);

// Look up 'spy' in jest documentation
//RESOURCE: https://remarkablemark.org/blog/2018/04/10/jest-spyon-function/
//RESOURCES: https://stackoverflow.com/questions/54750313/jest-spyon-method

//Still Super confused on the spyOn() thing - need better resources & examples

// bad note test
describe('This test handles bad Note', () => {
  it('handles empty Note', () => {
    let result = new Note (badNoteA);
    expect(result.valid()).toBeFalsy();
  });
  
  it('handles wrong Note', () => {
    let result = new Note(badNoteB);
    expect(result.valid()).toBeFalsy();
  });
  
  it('handles wrong flag', () => {
    let result = new Note(badNoteC);
    expect(result.valid()).toBeFalsy();
  });
  
  it('handles wrong data type', () => {
    let result = new Note(badNoteD);
    expect(result.valid()).toBeFalsy();
  });
});
  
describe('This test handles good Note', () => {
  it('handles good Note with an -a flag', () => {
    let result = new Note(goodNote);
    expect(result.valid()).toBeTruthy();
  });
});
  