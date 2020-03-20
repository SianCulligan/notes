'use strict';

const minimist = require('minimist');
// const a = require('./lib/input.js'

function Input(args) {
  let formatted = minimist(args);
  this.command = {};
  let objectKeyArray = Object.keys(formatted);

  for (let i = 0; i < objectKeyArray.length; i++) {
    let key = objectKeyArray[i];
    let currentVal = formatted[key];

    switch (key) {
    case 'a':
    case 'add':
      this.command = { action: 'add', payload: currentVal };
      return;
    default:
      break;
    }}}



Input.prototype.valid = function() {

  // use IF statements to "test before tests"
  if (!this.command) 
    return false;

  if (!this.command.action) 
    return false;

  switch (this.command.action) {
  case 'add':
    if(typeof this.command.payload === 'string') return true;
    else return false;
  default:
    break;
  }};

module.exports = Input;
