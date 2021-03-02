const path = require("path");

// can get name of current file and full path to dir
console.log(__dirname);
console.log(__filename);
console.log(`Filename is: ${path.basename(__filename)}`);

// ** Node tools  - loaded from separate module
// ** path ships with nodejs
