'use strict';

const Input = require('../lib/input.js');


let badInputA = [];
let badInputB = ['WRONG'];
let badInputC = ['-b', 'WRONG'];
let badInputD = ['-a', '']; 
let goodInput = ['-a', 'this is a note!']; 


describe('This test handles bad input', () => {
  it('handles empty input', () => {
    let result = new Input(badInputA);
    // result.command; { action: 'add', payload: 'a string'}
    expect(result.valid()).toBeFalsy();
  });

  it('handles wrong input', () => {
    let result = new Input(badInputB);
    expect(result.valid()).toBeFalsy();
  });

  it('handles wrong flag', () => {
    let result = new Input(badInputC);
    expect(result.valid()).toBeFalsy();
  });

  it('handles wrong data type', () => {
    let result = new Input(badInputD);
    expect(result.valid()).toBeFalsy();
  });
});

describe('This test handles good input', () => {
  it('handles good input with an -a flag', () => {
    let result = new Input(goodInput);
    expect(result.valid()).toBeTruthy();
  });
});



































// 'use strict';

// const Input = require('../lib/input.js');

// // Sample bad inputs
// const badInputA = [];
// const badInputB = ['WRONG'];
// const badInputC = ['-b', 'WRONG'];
// const badInputD = ['-a', ''];

// // Sample good inputs
// const goodInput = ['-a', 'This is a note!'];


// // Tests for bad inputs
// describe('this module handles bad input and shows false', () => {
//   it('handles empty input', () => {
//     let result = new Input(badInputA);
//     expect(result.valid()).toBeFalsy();
//   });

//   it('handles wrong input', () => {
//     let result = new Input(badInputB);
//     expect(result.valid()).toBeFalsy();
//   });

//   it('handles wrong flag', () => {
//     let result = new Input(badInputC);
//     expect(result.valid()).toBeFalsy();
//   });

//   it('handles wrong data type', () => {
//     let result = new Input(badInputD);
//     expect(result.valid()).toBeFalsy();
//   });});

// // Tests for good inputs
// describe('this module handles good input and shows true', () => {
//   it('handles good input for -a flag', () => {
//     let result = new Input(goodInput);
//     expect(result.valid()).toBeTruthy();
//   });});
  