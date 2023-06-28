// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
//use ./ in the file name, if it is not a build-in module
const names = require("./04-names");
const sayHi = require("./05-utils");
const data = require("./06-alternative-flavor");
//don't need to use module.require.
//This will execute all the function calls made on that file/.
require("./07-mind-grenade");
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
