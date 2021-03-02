const fs = require("fs");
const path = require("path");
const util = require("util");

const mdFilePath = path.join(__dirname, "assets", "Readme.md");
const jpgFilePath = path.join(__dirname, "assets", "alex.jpg");

const run = () => {
  // Sync
  const text = fs.readFileSync(mdFilePath, "utf-8");
  util.log("********** MD Sync **********");
  util.log(text);

  // Async
  fs.readFile(mdFilePath, "utf-8", (err, text) => {
    handleErr(err);
    util.log("********** MD Async **********");
    util.log(text);
  });

  // Async read image
  fs.readFile(jpgFilePath, (err, img) => {
    handleErr(err);
    util.log("********** Binary Async **********");
    util.log(img);
  });
};

const handleErr = (err) => {
  if (err) {
    util.log(`Error occurred: ${err}`);
    process.exit();
  }
};

run();
