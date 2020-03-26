'use strict';

class Notes {

  constructor (args) {
    if (args.valid()) 
      this.execute(args.command);
    else 
      console.error('ERROR! Invalid arguments');
  }

  execute (command) {
    switch (command.action) {
    case 'add':
      this.add(command.payload);
      break;
    default: break;
    }
  }

  add (payload) {
    let id = Math.floor(Math.random() * 10);
    console.log(id + ':', payload);
  }

  valid () {
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
    }}
}


module.exports = Notes;
