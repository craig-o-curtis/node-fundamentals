//** core modules - come with Nodejs */
const path = require("path");
const { join } = require("path"); // ** can destructure methods
const util = require("util");
const { log } = require("util");
const v8 = require("v8");
const { getHeapStatistics } = require("v8");
const events = require("events");

// ** create path
const dirUploads = path.join(__dirname, "www", "files", "uploads");
console.log(dirUploads);

// ** util
util.log(path.basename(__filename));
util.log(` ^ name of current file`);

// ** v8
util.log(v8.getHeapStatistics());
