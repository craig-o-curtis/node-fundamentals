const util = require("util");
const { inc, dec, getCount } = require("./customModuleExport.js");

inc();
inc();
inc();
dec();

util.log(getCount());
