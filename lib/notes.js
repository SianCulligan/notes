'use strict';

function Notes(args) {
  if (args.valid()) 
    this.execute(args.command);
  else 
    console.error('ERROR! Invalid arguments');
}

Notes.prototype.execute = function(command) {
  switch (command.action) {
  case 'add':
    this.add(command.payload);
    break;
  default: break;
  }};
        
Notes.prototype.add = function(payload) {
  let id = Math.floor(Math.random() * 10);
  console.log(id + ':', payload);
};

module.exports = Notes;
