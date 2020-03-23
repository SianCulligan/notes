'use strict';

class ValidateNote {

  constructor (rules) {
    this.rules = rules;
  }

  vaidate (input) {
    if (input === noteRules) {
      return true;
    } else {
      return false;
    }
    // I know this is totally wrong. I'm not sure how to use the schema and run the input through to validate - the dots aren't connecting for me, help plese! 
  }
}

const noteRules = {
  input: {type: 'string', required: true},
  note: {type: 'string', required: true},
};


module.exports = ValidateNote ;