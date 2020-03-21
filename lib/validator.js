// Exports a class
// The constructor should accept a single parameter
// An object that is a set of "rules" for validation (called a "schema")
// The class should expose a method called validate() that accepts a single parameter
// An object to validate against the saved schema
// When called, the validate() method should return a boolean indicating whether the object is valid based on the schema
// Things we want to be able to validate
// Is the object we're trying to validate actually an object?
// All all "required" properties present and do they have values?
// For any property that specifies a type, does the value match that type?

'use strict';

