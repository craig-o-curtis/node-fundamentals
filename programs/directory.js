const fs = require("fs");
const path = require("path");
const util = require("util");
const throwErr = require("./lib/throwError.js");

const run = () => {
  const newDirPath = path.join(__dirname, "storage-files");
  const dirExists = fs.existsSync(newDirPath); // want sync here to block next step

  if (dirExists) {
    util.log("Dir exists");
    process.exit();
  }

  // use dir name (at root)
  fs.mkdir(newDirPath, (err) => {
    throwErr(err);
  });
  // or
};

run();
